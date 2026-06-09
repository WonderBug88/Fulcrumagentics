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
    title: 'Fulcrum Agentics | Operator-Controlled Agentic Workflows',
    description:
      'Fulcrum Agentics turns messy operational and evidence-heavy processes into controlled agentic workflows with approvals, audit trails, and real business outputs.',
    keywords:
      'operator controlled AI workflows, agentic workflow software, operational automation, BigCommerce automation, SKU review, fulfillment automation, legal evidence workflow, trial workbench, GSC GA4 workflows, human in the loop AI',
    email: contactEmail,
    workflowMailto,
    ogTitle: 'Fulcrum Agentics - Operator-Controlled Agentic Workflows',
    ogDescription:
      'Agentic workflow software and services for operations that need approvals, evidence, audit trails, and production outputs.',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fulcrum Agentics',
    twitterDescription:
      'Turn messy operational work into controlled workflows operators can trust.',
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
      'Approval gates before high-impact writes',
      'Evidence panels instead of black-box answers',
      'Run logs, review queues, and audit artifacts',
    ],
    stats: [
      { value: 'Review-first', label: 'operators approve the risky step' },
      { value: 'Evidence-led', label: 'source data is visible before action' },
      { value: 'Production-shaped', label: 'built around real APIs and queues' },
    ],
    console: {
      title: 'Controlled workflow run',
      rows: [
        { label: 'Source evidence', value: 'Vendor, catalog, analytics, order data' },
        { label: 'Deterministic checks', value: 'Rules, contracts, thresholds, freshness' },
        { label: 'Agent proposal', value: 'Recommended action with reasons' },
        { label: 'Operator decision', value: 'Approve, reject, fix, or hold' },
        { label: 'Audited output', value: 'Publish, stage, label, report, or sync' },
      ],
    },
  },

  features: {
    title: 'Control Surfaces, Not Prompt Demos',
    subtitle:
      'Every workflow is designed around how operators actually decide, approve, and prove work.',
  },

  proof: {
    title: 'Proof From Built Workflows',
    subtitle:
      'These are the kinds of operating loops Fulcrum has already built: review-first, evidence-backed, and connected to real business systems or record sets.',
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
    title: 'How The Work Is Controlled',
    subtitle:
      'The pattern is simple: make the messy process explicit, automate the repeatable parts, and keep approval where risk lives.',
  },

  engagement: {
    title: 'Engagement Model',
    subtitle:
      'Start with one workflow that hurts. Prove it on real data. Expand only after the control loop works.',
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
          'Ship the intake, evidence checks, agent proposal, operator review, and audited output path.',
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
      'The point is not to let AI run loose. The point is to make hard operational work safer, faster, and easier to review.',
  },

  contact: {
    title: 'Bring the messy workflow.',
    subtitle:
      'Send the process you want controlled: the source files, the approval step, the system of record, and what should happen after review.',
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
      'Operator-controlled agentic workflows for catalog, search, fulfillment, marketplace, legal evidence, and evidence-heavy operations.',
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
