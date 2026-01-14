# Wild Kingdom

An Astro-powered static site showcasing Africa's Big Five with smooth transitions, PWA support, and responsive design.

Live site: `https://francismul.github.io/wild_kingdom/`

## Tech Stack

- Astro 5 with React integration
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- PWA via `@vite-pwa/astro`
- Image optimization with `sharp`

## Prerequisites

- Node.js 20+ (recommended)
- npm 9+

## Local Development

```zsh
pnpm install
pnpm dev
```

Open `http://localhost:4321`.

## Build

```zsh
pnpm run build
# or, to obfuscate client JS in production builds
pnpm run build:obfuscated
```

Output is written to `dist/`.

## Deploy to GitHub Pages

This repo ships with an Actions workflow at `.github/workflows/deploy.yml` that:

- Installs dependencies and builds the site
- Uploads `dist/` as the Pages artifact
- Deploys to GitHub Pages

Steps to enable:

1. Push to `main` (or run the workflow manually).
2. In GitHub → Repository → Settings → Pages, set Source to “GitHub Actions”.
3. The site publishes to `https://francismul.github.io/wild_kingdom/`.

### Path Base and Site

This project is configured for a repository-based GitHub Pages URL:

- `astro.config.mjs` sets `site: 'https://francismul.github.io'` and `base: '/wild_kingdom'`.
- PWA `manifest` uses `scope` and `start_url` of `/wild_kingdom/`.
- Public asset links in layout use `import.meta.env.BASE_URL` so icons and splash screens resolve under the base from any route.

If you fork/rename the repo, update `base` to match: `'/<your-repo-name>'`.

## Project Structure

```
astro.config.mjs
package.json
public/
	splash_screens/
src/
	assets/
	components/
	data/
	layouts/
	pages/
	styles/
	utils/
```

Key files:

- `src/layouts/Layout.astro`: global head tags, icons, splash screens, router transitions.
- `src/pages/*.astro`: top-level routes (including dynamic `[animal].astro`).
- `astro.config.mjs`: integrations, PWA config, and GitHub Pages base/site.

## PWA Notes

- Register type is `autoUpdate`.
- Service worker and manifest paths are base-aware; they will resolve under `/wild_kingdom/`.
- Offline caching targets `**/*.{js,css,html,ico,png,svg,webp}`.

## Useful Commands

- `pnpm run dev`: start the dev server
- `pnpm run build`: build to `dist/`
- `pnpm run preview`: preview the production build
- `pnpm run build:obfuscated`: production build with JS obfuscation

## License

See `LICENSE` for details.
