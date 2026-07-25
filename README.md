# Travel-apps

This repository is a GitHub Pages-compatible PWA hub for generated road trips.

## Structure

- `index.html`: root landing page that lists trips from `trips.json`
- `trips.json`: catalog of trip subdirectories and human-readable descriptions
- `site.webmanifest`: PWA manifest for the root directory app
- `sw.js`: service worker for offline caching of the directory app
- `dev/`: generated trip page output (preview build)
- `sw/dev/`: generated trip package with `images/` and `validation_report.json`

## Add A New Trip

1. Add your generated trip subdirectory and ensure it contains an `index.html`.
2. Regenerate the catalog:

	```powershell
	.\scripts\generate-trips.ps1
	```

	Optional custom root path:

	```powershell
	.\scripts\generate-trips.ps1 -RootPath "C:\path\to\Travel-apps"
	```

3. If needed, edit the generated `trips.json` entry fields for richer copy. The generator preserves existing manual values keyed by `entry` when possible.
4. Ensure each object in `trips.json` includes:
	- `name`
	- `directory`
	- `entry`
	- `description`
	- `routeSummary`
	- `templateVersion`
	- `generatedAt`
	- optional `validation` and `validationReport`
5. Commit and push. GitHub Pages will serve the updated listing.

## Notes

- All links in `index.html` use relative paths so they work in a project pages URL.
- The service worker intentionally caches only same-origin assets.
- If cached content appears stale, use the "Refresh trip catalog" button on the landing page.

