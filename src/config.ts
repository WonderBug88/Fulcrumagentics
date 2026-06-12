const contactEmail = 'hello@fulcrumagentics.com';
const workflowMailto = `mailto:${contactEmail}?subject=AI employee workflow discussion`;

export const siteConfig = {
  site: {
    name: 'Fulcrum Agentics',
    logo: {
      src: '/assets/fulcrum-mark.svg',
      alt: 'Fulcrum Agentics',
      height: 32,
    },
    title: 'Fulcrum Agentics | AI Employees, Not Brittle Demos',
    description:
      'Fulcrum Agentics turns brittle AI demos into dependable digital employees with source context, approval gates, escalation rules, audit trails, and production boundaries.',
    keywords:
      'AI employees, digital employees, agentic workflows, AI operations, AI implementation, reviewable AI workflows, human in the loop AI, AI automation, operational automation, botsitting, AI solitaire, audit trails, BigCommerce automation, SKU review, fulfillment automation, trial workbench, semantic case workspace',
    email: contactEmail,
    workflowMailto,
    ogTitle: 'Fulcrum Agentics - AI Employees, Not Brittle Demos',
    ogDescription:
      'Anyone can buy AI. Fulcrum makes AI employable by turning brittle demos, approval loops, and context drift into dependable digital employees.',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fulcrum Agentics',
    twitterDescription:
      'Stop playing AI solitaire. Build dependable digital employees that do real work with review, evidence, and accountability.',
  },

  navigation: {
    links: [
      { name: 'Proof', href: '#proof' },
      { name: 'Trial Workbench', href: '/trialworkbench/' },
      { name: 'Control', href: '#control' },
      { name: 'Why Fulcrum', href: '#why-fulcrum' },
      { name: 'Personas', href: '#personas' },
      { name: 'Engagement', href: '#engagement' },
      { name: 'FAQ', href: '#faq' },
    ],
    cta: {
      text: 'Discuss an AI Employee',
      href: workflowMailto,
    },
  },

  hero: {
    eyebrow: 'Stop playing AI solitaire',
    headline: 'Hire the team that already knows how AI breaks.',
    headlineLines: ['Hire the team', 'that already', 'knows how', 'AI breaks.'],
    description:
      'Anyone can buy AI for a few hundred dollars a month and build a good demo. Then the real work shows up: brittle apps, approve loops, context overload, edge cases, product drift, and another rebuild. Fulcrum turns that lonely AI loop into a trained digital employee with process, evidence, approvals, and accountability.',
    cta: {
      primary: { text: 'Discuss an AI Employee', href: workflowMailto },
      secondary: { text: 'See Who It Helps', href: '#personas' },
    },
    proofPoints: [
      'Replace brittle demos with role-based digital employees',
      'Cut botsitting with review queues, escalation rules, and audit trails',
      'Keep people focused on the human work customers appreciate',
    ],
    stats: [
      { value: 'Demo-ready', label: 'easy to build in a day' },
      { value: 'Employee-grade', label: 'hard to trust every day' },
      { value: 'Human-first', label: 'people stay on customers, not approve loops' },
    ],
    console: {
      title: 'AI employee operating loop',
      rows: [
        { label: 'Role definition', value: 'What job this digital employee owns and when it must escalate' },
        { label: 'Source context', value: 'Files, records, APIs, emails, orders, analytics, and business rules' },
        { label: 'Trust checks', value: 'Deterministic validation, freshness, permissions, and risk boundaries' },
        { label: 'Human handoff', value: 'Approve, reject, hold, fix source, or route the exception' },
        { label: 'Measured output', value: 'Publish, sync, export, report, label, or handoff with audit proof' },
      ],
    },
  },

  features: {
    title: 'The Control Layer Behind AI Employees',
    subtitle:
      'A digital employee is not a prompt. It is a role, a workflow, a review path, a memory pattern, and a production boundary.',
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
    title: 'From Solitaire Loop To Winning Deck',
    subtitle:
      'The pattern is simple: define the job, stack the context correctly, automate the repeatable work, and keep human review where risk lives.',
  },

  engagement: {
    title: 'Engagement Model',
    subtitle:
      'Start with one AI employee that owns a painful workflow. Prove it on real data. Expand only after the review loop works.',
    steps: [
      {
        name: 'Diagnose',
        summary:
          'Map the job, inputs, failure modes, approval points, escalation rules, and the business output that matters.',
        deliverable: 'Role definition, workflow map, risk boundary, and first controlled use case.',
      },
      {
        name: 'Build Controlled Workflow',
        summary:
          'Ship the intake, source checks, agent proposal, operator review, production boundary, and audited output path.',
        deliverable: 'A working digital employee connected to the systems it must read or write.',
      },
      {
        name: 'Operate and Improve',
        summary:
          'Measure outcomes, review exceptions, tighten rules, and expand automation only when the proof supports it.',
        deliverable: 'Run logs, exception history, accountability records, and the improvement plan for the next loop.',
      },
    ],
  },

  faq: {
    title: 'Questions Operators Ask',
    subtitle:
      'The point is not to let AI run loose. The point is to stop babysitting fragile demos and make hard work safer, faster, and easier to review.',
  },

  contact: {
    title: 'Tell us which employee you need.',
    subtitle:
      'Send the process you want handled: the source records, the approval step, the system of record, what should happen after review, and what your human team should be free to do instead.',
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
      'AI employees for catalog, search, fulfillment, marketplace, case preparation, evidence-heavy operations, and the repetitive work your humans should not have to babysit.',
    columns: [
      {
        title: 'Proof',
        links: [
          { name: 'Built Workflows', href: '#proof' },
          { name: 'Trial Workbench', href: '/trialworkbench/' },
          { name: 'Control Surfaces', href: '#control' },
          { name: 'Why Fulcrum', href: '#why-fulcrum' },
          { name: 'Personas', href: '#personas' },
          { name: 'Engagement Model', href: '#engagement' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { name: contactEmail, href: workflowMailto },
          { name: 'Discuss an AI Employee', href: workflowMailto },
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
