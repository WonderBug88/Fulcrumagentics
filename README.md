# Fulcrum Agentics Website

Astro website for Fulcrum Agentics, an Arizona-based applied AI and software engineering venture.

## Current homepage

The homepage is intentionally short and evidence-led:

- A clear statement of what Fulcrum builds.
- Selected work developed in the affiliated **Hotels4Humanity** environment: Hermes, PAM ETL, Shipping Intelligence, Route Authority and Content Studio.
- A concise explanation of the engineering focus, plus a carefully labeled reference to R&D.
- A direct contact link for collaborations and introductions.

The website **does not market proposed micro-manufacturing facilities, equipment or future research projects as available commercial services**. Trial Workbench and quantitative systems remain in development and are not presented as finished commercial products.

## Development

```bash
npm ci
npm run dev
npm run build
```

GitHub Pages is configured to deploy from `master` via `.github/workflows/astro.yml`. Pull requests run build validation.

## Site structure

- `src/pages/index.astro` — lean homepage with portfolio, about and contact.
- `src/config.ts` — brand, metadata, navigation and contact copy.
- `src/components/Navigation.astro` and `Footer.astro` — shared navigation and footer.
- `src/styles/globals.css` — brand tokens and shared styles.
- `src/pages/use-case.astro` — detailed historical ETL use-case page.
- `src/pages/hermes-shipping-provider/` — Hermes resource pages.

Earlier expanded homepage components remain in the repository for reference but are not rendered on the public homepage.
