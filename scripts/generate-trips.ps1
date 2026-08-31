param(
    [string]$RootPath = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Convert-ToRelativePath {
    param(
        [string]$BasePath,
        [string]$TargetPath
    )

    $baseResolved = (Resolve-Path $BasePath).Path.TrimEnd('\')
    $targetResolved = (Resolve-Path $TargetPath).Path

    if ($targetResolved.StartsWith($baseResolved, [System.StringComparison]::OrdinalIgnoreCase)) {
        $relative = $targetResolved.Substring($baseResolved.Length).TrimStart('\')
        if ([string]::IsNullOrWhiteSpace($relative)) {
            return "."
        }
        return $relative.Replace('\', '/')
    }

    $baseUri = New-Object System.Uri($baseResolved + '\')
    $targetUri = New-Object System.Uri($targetResolved)
    $relativeFromUri = $baseUri.MakeRelativeUri($targetUri).ToString()
    return [System.Uri]::UnescapeDataString($relativeFromUri).Replace('\', '/')
}

function Get-HtmlTitle {
    param([string]$HtmlText)

    if ([string]::IsNullOrWhiteSpace($HtmlText)) {
        return $null
    }

    $match = [regex]::Match($HtmlText, "<title>(.*?)</title>", [System.Text.RegularExpressions.RegexOptions]::IgnoreCase -bor [System.Text.RegularExpressions.RegexOptions]::Singleline)
    if (-not $match.Success) {
        return $null
    }

    $title = $match.Groups[1].Value
    # <title> is HTML-escaped by the generator, so an ampersand arrives here as
    # "&amp;". The card renders this value with textContent -- which is correct
    # and must stay -- so the entity has to be decoded now, or it reaches the
    # page as literal "&amp;". ("Old Hickory &amp; Asheville" shipped that way.)
    $title = [System.Net.WebUtility]::HtmlDecode($title)
    $title = [regex]::Replace($title, "\s+", " ").Trim()
    return $title
}

function Get-HtmlMetaDescription {
    param([string]$HtmlText)

    # The generator already writes a human summary here from the manifest's
    # own subtitle ("Five capitals by rail - Brussels to Frankfurt"). The card
    # used to say "Generated road-trip-generator output package in
    # EuropeExploration/prod", which describes the build system rather than
    # the trip.
    if (-not $HtmlText) { return $null }
    $m = [regex]::Match($HtmlText, '<meta\s+name="description"\s+content="([^"]*)"', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    if (-not $m.Success) { return $null }
    $text = [System.Net.WebUtility]::HtmlDecode($m.Groups[1].Value)
    $text = [regex]::Replace($text, "\s+", " ").Trim()
    if (-not $text) { return $null }
    # The meta repeats the trip title before an em dash; the card shows the
    # title separately, so drop that prefix and keep the summary.
    $dash = [string][char]0x2014
    $parts = $text -split ("\s+" + [regex]::Escape($dash) + "\s+"), 2
    if ($parts.Count -eq 2 -and $parts[1].Trim()) { return $parts[1].Trim() }
    return $text
}

function Get-NameFromDirectory {
    param([string]$RelativeDirectory)

    if ([string]::IsNullOrWhiteSpace($RelativeDirectory) -or $RelativeDirectory -eq ".") {
        return "Trip"
    }

    $segments = $RelativeDirectory.Split('/') | Where-Object { $_ }
    $words = foreach ($segment in $segments) {
        $clean = $segment -replace '[-_]+', ' '
        (Get-Culture).TextInfo.ToTitleCase($clean)
    }
    return ($words -join " - ")
}

function Get-OptionalPropertyValue {
    param(
        [object]$Object,
        [string]$PropertyName
    )

    if ($null -eq $Object -or [string]::IsNullOrWhiteSpace($PropertyName)) {
        return $null
    }

    $property = $Object.PSObject.Properties[$PropertyName]
    if ($null -eq $property) {
        return $null
    }

    return $property.Value
}

function New-TripEntry {
    param(
        [string]$Root,
        [System.IO.FileInfo]$IndexFile,
        [hashtable]$ExistingByEntry
    )

    $entry = Convert-ToRelativePath -BasePath $Root -TargetPath $IndexFile.FullName
    $relativeDirectory = Convert-ToRelativePath -BasePath $Root -TargetPath $IndexFile.DirectoryName

    $existing = $null
    if ($ExistingByEntry.ContainsKey($entry)) {
        $existing = $ExistingByEntry[$entry]
    }

    # The validation report is still written per run; the gallery card just no
    # longer surfaces it. Template version, pass/fail and warning counts are
    # build-system facts, not things a reader of the trip list needs -- and the
    # template version shown was stale anyway (generator.__template_version__
    # has not moved since the initial rebuild, while the template file has).
    $validationReportPath = Join-Path $IndexFile.DirectoryName "validation_report.json"
    $generatedAt = $null

    if (Test-Path $validationReportPath) {
        $validation = Get-Content -Raw -Path $validationReportPath -Encoding UTF8 | ConvertFrom-Json
        $generatedAt = $validation.generated_at_utc
        if (-not $generatedAt) {
            $generatedAt = $validation.timestamp_utc
        }
    }

    $html = Get-Content -Raw -Path $IndexFile.FullName -Encoding UTF8
    $title = Get-HtmlTitle -HtmlText $html

    $name = $null
    $existingName = Get-OptionalPropertyValue -Object $existing -PropertyName "name"
    if ($existingName) {
        $name = $existingName
    } elseif ($title) {
        $name = $title -replace "\s*[\-\u2014]\s*Full\s*$", ""
    } else {
        $name = Get-NameFromDirectory -RelativeDirectory $relativeDirectory
    }

    $description = Get-HtmlMetaDescription -HtmlText $html
    if (-not $description) {
        $existingDescription = Get-OptionalPropertyValue -Object $existing -PropertyName "description"
        if ($existingDescription) {
            $description = $existingDescription
        } else {
            $description = "Itinerary page in $relativeDirectory."
        }
    }

    $routeSummary = Get-OptionalPropertyValue -Object $existing -PropertyName "routeSummary"

    $existingGeneratedAt = Get-OptionalPropertyValue -Object $existing -PropertyName "generatedAt"
    if (-not $generatedAt -and $existingGeneratedAt) {
        $generatedAt = $existingGeneratedAt
    }

    $entryObject = [ordered]@{
        name = $name
        directory = $relativeDirectory
        entry = $entry
        description = $description
    }

    if ($routeSummary) {
        $entryObject.routeSummary = $routeSummary
    }

    if ($generatedAt) {
        $entryObject.generatedAt = [string]$generatedAt
    }

    return [pscustomobject]$entryObject
}

$rootResolved = (Resolve-Path $RootPath).Path
$catalogPath = Join-Path $rootResolved "trips.json"

$existingByEntry = @{}
if (Test-Path $catalogPath) {
    $existingCatalog = Get-Content -Raw -Path $catalogPath -Encoding UTF8 | ConvertFrom-Json
    if ($existingCatalog -and $existingCatalog.trips) {
        foreach ($trip in $existingCatalog.trips) {
            if ($trip.entry) {
                $existingByEntry[$trip.entry] = $trip
            }
        }
    }
}

$indexFiles = Get-ChildItem -Path $rootResolved -Filter "index.html" -File -Recurse |
    Where-Object {
        $_.FullName -ne (Join-Path $rootResolved "index.html") -and
        $_.FullName -notmatch "\\.git\\" -and
        $_.FullName -notmatch "\\.archiver_shadow\\" -and
        $_.FullName -notmatch "\\.vscode\\" -and
        # Non-prod builds are NOT privacy-redacted -- only prod is (see the
        # generator's _resolve_privacy_redaction) -- so a dev/eval index.html
        # carries private planning links and lodging/booking details verbatim.
        # Those directories are gitignored and never published, but this script
        # scans the FILESYSTEM rather than git, so without this it lists them in
        # trips.json, which IS committed: the public landing page would then
        # advertise the path and render a card linking to a 404.
        $_.FullName -notmatch '[\\/](dev|eval)[\\/]'
    }

$trips = @(foreach ($indexFile in $indexFiles) {
    New-TripEntry -Root $rootResolved -IndexFile $indexFile -ExistingByEntry $existingByEntry
})

# Wrapped in @() so a single-match result stays a 1-element array rather than
# unwrapping to a bare object -- Sort-Object/pipeline output on exactly one
# item does that unwrap, which then made $trips.Count below throw
# PropertyNotFoundStrict (the catalog file itself still wrote correctly via
# ConvertTo-Json, since @($trips) at the assignment forced array-shape there
# too -- only this diagnostic line was affected).
$trips = @($trips | Sort-Object directory, entry)

$catalog = [ordered]@{
    updatedAt = (Get-Date).ToUniversalTime().ToString("o")
    trips = @($trips)
}

$json = $catalog | ConvertTo-Json -Depth 50
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($catalogPath, $json + [Environment]::NewLine, $utf8NoBom)

Write-Host "Generated trips catalog: $catalogPath"
Write-Host "Trip count: $($trips.Count)"
