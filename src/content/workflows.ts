export const workflowProofItems = [
  {
    name: 'Route Authority',
    tag: 'Search + internal-link workflow',
    problem:
      'Search Console and GA4 demand needs to become safe internal-link routing, not a blind publish button.',
    built:
      'A review and publishing loop that separates gate, routing, review, publish, cleanup, and audit behavior.',
    controls:
      'Operators can inspect results, review route decisions, and keep cleanup/publish state auditable.',
    output:
      'Approved link blocks, cleanup reports, readiness checks, and performance views for live Route Authority pages.',
  },
  {
    name: 'PAM ETL + SKU Authority',
    tag: 'Supplier source to production workflow',
    problem:
      'Vendor data, live catalog SKUs, and internal SKU exceptions cannot be collapsed into one automated guess.',
    built:
      'A contract-first ETL review loop with deterministic source checks, SKU authority classification, and operator decisions.',
    controls:
      'Upload V2 remains the production write boundary; review pages surface source profile, proposed changes, load errors, and SKU authority evidence.',
    output:
      'Staged proposals, contract fixes, BigCommerce SKU fix recommendations, internal exception handling, and mutation proof.',
  },
  {
    name: 'Hermes Fulfillment',
    tag: 'PO, options, FedEx rate approval',
    problem:
      'Fulfillment work needs exact order evidence, clear option labels, and shipping approval before a real label can be created.',
    built:
      'A review-first fulfillment surface that refreshes order evidence, renders option label/value pairs, and separates rate lookup from label creation.',
    controls:
      'FedEx rate retrieval, rate approval, and production label creation are distinct steps with persisted approval status.',
    output:
      'PO draft reviews, manufacturer packets, production-rate evidence, approval state, and label-ready artifacts.',
  },
  {
    name: 'GSC + GA4 Freshness',
    tag: 'Analytics sync and dashboard trust',
    problem:
      'Dashboards lose trust when operators cannot tell whether the numbers are current, complete, or bound to the real app database.',
    built:
      'A freshness guard and catch-up sync pattern that checks data windows, queues background repair, and verifies rendered values.',
    controls:
      'The workflow distinguishes app-bound data from stale local processes or whole-store totals.',
    output:
      'Freshness metadata, sync runs, cached summaries, and rendered dashboard values that can be checked against the database.',
  },
  {
    name: 'Marketplace Staging',
    tag: 'eBay-ready review before publish',
    problem:
      'Marketplace publishing needs seller-limit awareness, stock rules, OAuth boundaries, and operator review before live listing changes.',
    built:
      'A read-first staging path that packages BigCommerce products into marketplace-ready payloads without jumping straight to live publish.',
    controls:
      'Quantity caps, zero-stock handling, OAuth checks, item blockers, and publish batches are separated from staging.',
    output:
      'Reviewable marketplace payloads, prioritized publish candidates, and audit logs for created, updated, or skipped offers.',
  },
  {
    name: 'Trial Workbench',
    tag: 'Case preparation and evidence readiness',
    problem:
      'Generic AI can make a user feel heard, but serious disputes require organized records, sourced research notes, clearly marked gaps, and a package a professional can review.',
    built:
      'A semantic case workspace for evidence intake, chronology, research organization, claim-element review, and attorney handoff preparation.',
    controls:
      'The workflow keeps claims tied to pinned evidence, marks unsupported points, separates research notes from advice, and keeps the user oriented around preparation rather than promises.',
    output:
      'Semantic case memory, chronology, evidence map, gap list, research notes, case readiness report, and attorney handoff package.',
  },
];