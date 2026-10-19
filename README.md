# Fulcrum Agentics Website

An Astro site for **Fulcrum Agentics**, an Arizona applied-AI engineering, software R&D and emerging advanced-manufacturing venture.

## Positioning

Fulcrum builds reusable intelligence and practical operating systems. Its services span:

- **AI operations and integration** — workflow orchestration, data engineering, rules-driven approvals, supplier and order systems.
- **Advanced analytics and applied research** — source-grounded analytical logic, mathematical optimization and quantitative research.
- **Product R&D and contract micro-manufacturing (planned)** — prototype engineering, Formlabs additive manufacturing, Opulo LumenPnP electronics placement, APSX injection molding and compact CNC tooling. This is a proposed capability, **not yet a claim of installed equipment or available capacity**.

### Selected work

- **Hotels4Humanity (affiliated customer)** — Hermes, PAM ETL, shipping intelligence, Route Authority, automated content workflows, commerce analytics.
- **Trial Workbench** — legal intelligence and evidence-backed analytical workflows (active development).
- **Algorithmic trading models** — quantitative research (in development; no claims of live performance).
- **BacRub LLC (affiliated R&D client)** — a prospective application for prototyping and manufacturing services.

Affiliated companies are distinguished from independent third-party customer traction throughout the site.

## Local development

```bash
npm ci
npm run dev
npm run build
```

The production site deploys to GitHub Pages from `master` via `.github/workflows/astro.yml`.

## Main content

- `src/config.ts` — branding, metadata, navigation, hero and calls to action.
- `src/components/Capabilities.astro` — capability lanes, planned microfactory and customer applications.
- `src/components/Offers.astro` — ways to work with Fulcrum.
- `src/content/workflows.ts` — working software and selected projects.
- `src/content/faq.ts` — readiness and scope disclosures.
- `src/styles/globals.css` — visual system, responsive layout and light/dark themes.

Existing privacy, legal and Hermes resource routes remain in place.
