# Workout PWA (React + Vite)

This repository contains the React + Vite rebuild of the Workout PWA. The app is designed to be deployed as a static site (GitHub Pages) with offline support via a service worker.

## Development

```bash
npm install
npm run dev
```

If you're running in GitHub Codespaces, make sure the port 5173 is forwarded and public, or use the Codespaces "Ports" tab to open the forwarded URL.

## Production build

```bash
npm install
npm run build
npm run preview
```

## GitHub Pages deployment

This repo includes a GitHub Actions workflow that builds on every push to `main` and publishes the `dist/` folder to GitHub Pages.

If you deploy from a subpath (e.g., `https://user.github.io/Workout-PWA-Site/`), the workflow sets `BASE_PATH` automatically to the repo name so asset URLs resolve correctly.

If you deploy elsewhere or with a custom domain, override the base path during build:

```bash
BASE_PATH=/ npm run build
```
