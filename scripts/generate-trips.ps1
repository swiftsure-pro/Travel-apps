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
    $title = [regex]::Replace($title, "\s+", " ").Trim()
    return $title
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

    $validationReportPath = Join-Path $IndexFile.DirectoryName "validation_report.json"
    $validation = $null
    $templateVersion = $null
    $generatedAt = $null
    $validationReport = $null

    if (Test-Path $validationReportPath) {
        $validation = Get-Content -Raw -Path $validationReportPath -Encoding UTF8 | ConvertFrom-Json
        $templateVersion = $validation.template_version
        if (-not $templateVersion -and $validation.generator.template_version) {
            $templateVersion = $validation.generator.template_version
        }

        $generatedAt = $validation.generated_at_utc
        if (-not $generatedAt) {
            $generatedAt = $validation.timestamp_utc
        }

        $validationReport = Convert-ToRelativePath -BasePath $Root -TargetPath $validationReportPath
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

    $description = $null
    $existingDescription = Get-OptionalPropertyValue -Object $existing -PropertyName "description"
    if ($existingDescription) {
        $description = $existingDescription
    } elseif ($validation) {
        $description = "Generated road-trip-generator output package in $relativeDirectory."
    } else {
        $description = "Generated itinerary page located in $relativeDirectory."
    }

    $routeSummary = Get-OptionalPropertyValue -Object $existing -PropertyName "routeSummary"

    $existingTemplateVersion = Get-OptionalPropertyValue -Object $existing -PropertyName "templateVersion"
    if (-not $templateVersion -and $existingTemplateVersion) {
        $templateVersion = $existingTemplateVersion
    }

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

    if ($templateVersion) {
        $entryObject.templateVersion = [string]$templateVersion
    }

    if ($generatedAt) {
        $entryObject.generatedAt = [string]$generatedAt
    }

    if ($validation) {
        $warningCount = 0
        if ($validation.summary -and $null -ne $validation.summary.warning_count) {
            $warningCount = [int]$validation.summary.warning_count
        }

        $isValid = $false
        if ($validation.summary -and $null -ne $validation.summary.valid) {
            $isValid = [bool]$validation.summary.valid
        }

        $entryObject.validation = [ordered]@{
            valid = $isValid
            warningCount = $warningCount
        }
    } else {
        $existingValidation = Get-OptionalPropertyValue -Object $existing -PropertyName "validation"
        if ($existingValidation) {
            $entryObject.validation = $existingValidation
        }
    }

    if ($validationReport) {
        $entryObject.validationReport = $validationReport
    } else {
        $existingValidationReport = Get-OptionalPropertyValue -Object $existing -PropertyName "validationReport"
        if ($existingValidationReport) {
            $entryObject.validationReport = $existingValidationReport
        }
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
        $_.FullName -notmatch "\\.vscode\\"
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
