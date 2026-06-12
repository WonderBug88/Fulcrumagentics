const contactEmail = 'hello@fulcrumagentics.com';
const workflowMailto = `mailto:${contactEmail}?subject=Workflow discussion`;

export const siteConfig = {
  site: {
    name: 'Fulcrum Agentics',
    logo: {
      src: '/assets/fulcrum-mark.svg',
      alt: 'Fulcrum Agentics',
      height: 32,
    },
    title: 'Fulcrum Agentics | Reviewable AI Workflows That Hold Up',
    description:
      'Fulcrum Agentics turns AI experiments into reviewable, evidence-backed workflows with approvals, run logs, exports, and production boundaries.',
    keywords:
      'reviewable AI workflows, agentic workflow software, AI operations, human in the loop AI, evidence backed automation, digital employee workflows, operational automation, BigCommerce automation, SKU review, fulfillment automation, trial workbench, semantic case workspace, GSC GA4 workflows',
    email: contactEmail,
    workflowMailto,
    ogTitle: 'Fulcrum Agentics - Reviewable AI Workflows That Hold Up',
    ogDescription:
      'Anyone can build an AI demo. Fulcrum builds reviewable workflows operators can trust with real data, approvals, exports, and audit trails.',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fulcrum Agentics',
    twitterDescription:
      'Stop babysitting AI. Turn messy work into reviewable workflows operators can trust.',
  },

  navigation: {
    links: [
      { name: 'Proof', href: '#proof' },
      { name: 'Trial Workbench', href: '/trialworkbench/' },
      { name: 'Control', href: '#control' },
      { name: 'Why Fulcrum', href: '#why-fulcrum' },
      { name: 'Engagement', href: '#engagement' },
      { name: 'FAQ', href: '#faq' },
    ],
    cta: {
      text: 'Discuss a Workflow',
      href: workflowMailto,
    },
  },

  hero: {
    eyebrow: 'Operator-controlled agentic workflows',
    headline: 'Turn messy operations into workflows you can trust.',
    headlineLines: ['Turn messy', 'operations into', 'workflows you', 'can trust.'],
    description:
      'Fulcrum Agentics builds software-backed operating systems for catalog, search, fulfillment, marketplace, and legal evidence work. The agent proposes, the workflow verifies, and the operator stays in control before anything important changes.',
    cta: {
      primary: { text: 'Discuss a Workflow', href: workflowMailto },
      secondary: { text: 'See Built Workflows', href: '#proof' },
    },
    proofPoints: [
      'Source evidence before generated answers',
      'Approval gates before risky actions',
      'Run logs, exports, and review queues',
    ],
    stats: [
      { value: 'Review-first', label: 'operators approve the risky step' },
      { value: 'Evidence-led', label: 'source data stays visible' },
      { value: 'Export-ready', label: 'outputs become reviewable work product' },
    ],
    console: {
      title: 'Reviewable workflow run',
      rows: [
        { label: 'Source evidence', value: 'Files, records, APIs, emails, orders, analytics' },
        { label: 'Deterministic checks', value: 'Rules, contracts, thresholds, freshness' },
        { label: 'Agent proposal', value: 'Recommended action with reasons and source context' },
        { label: 'Operator decision', value: 'Approve, reject, fix, stage, or hold' },
        { label: 'Audited output', value: 'Publish, sync, export, report, label, or handoff' },
      ],
    },
  },

  features: {
    title: 'Reviewable Systems, Not Prompt Demos',
    subtitle:
      'Every workflow is designed around how operators actually decide, approve, inspect, and prove work.',
  },

  proof: {
    title: 'Proof From Built Workflows',
    subtitle:
      'These are operating loops Fulcrum has already built: review-first, source-backed, and connected to real business systems or record sets.',
    screenshots: [
      {
        src: '/assets/proof/route-authority-results.png',
        alt: 'Route Authority results and review queue screen',
        label: 'Route Authority',
        caption: 'Results, review queue, routed targets, and agent diagnosis states.',
      },
      {
        src: '/assets/proof/hermes-fedex-review-redacted.png',
        alt: 'Hermes FedEx label review screen with ship-to details redacted',
        label: 'Hermes',
        caption: 'FedEx production rate evidence, approval state, and label readiness.',
      },
    ],
  },

  howItWorks: {
    title: 'How The Work Stops Being AI Solitaire',
    subtitle:
      'The pattern is simple: make the messy process explicit, automate the repeatable parts, and keep human review where risk lives.',
  },

  engagement: {
    title: 'Engagement Model',
    subtitle:
      'Start with one workflow that hurts. Prove it on real data. Expand only after the review loop works.',
    steps: [
      {
        name: 'Diagnose',
        summary:
          'Map the process, inputs, failure modes, approval points, and the business output that matters.',
        deliverable: 'Workflow map, risk boundary, and first controlled use case.',
      },
      {
        name: 'Build Controlled Workflow',
        summary:
          'Ship the intake, source checks, agent proposal, operator review, and audited output path.',
        deliverable: 'A working workflow connected to the systems it must read or write.',
      },
      {
        name: 'Operate and Improve',
        summary:
          'Measure outcomes, review exceptions, tighten rules, and expand automation only when the proof supports it.',
        deliverable: 'Run logs, exception history, and improvement plan for the next loop.',
      },
    ],
  },

  faq: {
    title: 'Questions Operators Ask',
    subtitle:
      'The point is not to let AI run loose. The point is to stop babysitting fragile demos and make hard work safer, faster, and easier to review.',
  },

  contact: {
    title: 'Bring the messy workflow.',
    subtitle:
      'Send the process you want controlled: the source records, the approval step, the system of record, and what should happen after review.',
    benefits: [
      'No fake form or chatbot intake',
      'A real operator-first workflow discussion',
      'Useful even when the first answer is "do not automate that yet"',
    ],
    email: contactEmail,
    href: workflowMailto,
    cta: 'Email Fulcrum Agentics',
  },

  footer: {
    tagline:
      'Reviewable AI workflows for catalog, search, fulfillment, marketplace, case preparation, and evidence-heavy operations.',
    columns: [
      {
        title: 'Proof',
        links: [
          { name: 'Built Workflows', href: '#proof' },
          { name: 'Trial Workbench', href: '/trialworkbench/' },
          { name: 'Control Surfaces', href: '#control' },
          { name: 'Why Fulcrum', href: '#why-fulcrum' },
          { name: 'Engagement Model', href: '#engagement' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { name: contactEmail, href: workflowMailto },
          { name: 'Discuss a Workflow', href: workflowMailto },
          { name: 'Privacy Policy', href: '/privacy/' },
          { name: 'Terms of Service', href: '/terms/' },
          { name: 'Hermes Installation', href: '/hermes-shipping-provider/installation/' },
          { name: 'Hermes User Guide', href: '/hermes-shipping-provider/user-guide/' },
        ],
      },
    ],
    copyright: `${new Date().getFullYear()} Fulcrum Agentics. All rights reserved.`,
  },
};