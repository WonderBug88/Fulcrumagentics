# Fulcrum Agentics Website

Astro site for Fulcrum Agentics, positioned around operator-controlled agentic workflow software and services.

The homepage is proof-led. It explains how Fulcrum turns messy operational processes into controlled workflows with source evidence, approval gates, run logs, and audited outputs.

## Current Positioning

- Operator-controlled agentic workflows, not a generic AI agency
- Proof from built workflows: Route Authority, PAM ETL/SKU authority, Hermes fulfillment, GSC/GA4 freshness, marketplace staging, and Trial Workbench
- Email-first CTA: `hello@fulcrumagentics.com`
- No fake testimonials, fake pricing, or fake form submission
- Clear buyer-objection answer: use AI for isolated work; hire Fulcrum when the workflow needs real data, review gates, audit trails, and production boundaries
- Dedicated "Why Fulcrum" section focused on buying back the learning curve from prior production workflow failure modes

## Development

```bash
npm install
npm run dev
npm run build
```

The site deploys to GitHub Pages from `master` through `.github/workflows/astro.yml`.

## Main Content Files

- `src/config.ts` - site metadata, navigation, CTA, hero, engagement, contact, footer
- `src/content/*.ts` - proof workflows, control features, process steps, FAQ
- `src/components/*.astro` - rendered sections
- `src/styles/globals.css` - brand tokens, theme support, responsive layout
