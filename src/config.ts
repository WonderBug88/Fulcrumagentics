const contactEmail = 'hello@fulcrumagentics.com';
const workflowMailto = `mailto:${contactEmail}?subject=AI Workflow Diagnostic`;
const projectMailto = `mailto:${contactEmail}?subject=AI%20or%20Hardware%20Project%20Inquiry`;

export const siteConfig = {
  site: {
    name: 'Fulcrum Agentics',
    logo: {
      src: '/assets/fulcrum-mark.svg',
      alt: 'Fulcrum Agentics',
      height: 32,
    },
    title: 'Fulcrum Agentics | AI Workflows & Product R&D',
    description:
      'Fulcrum Agentics builds controlled AI workflows for businesses and is developing product R&D and small-batch contract manufacturing services for outside companies in Arizona.',
    keywords:
      'AI workflow automation, AI agents, business system integration, product research and development, contract manufacturing Arizona, electronics prototyping, injection molding, small batch manufacturing, CNC tooling, PCB assembly, Fulcrum Agentics',
    email: contactEmail,
    workflowMailto,
    ogTitle: 'Fulcrum Agentics - AI Workflows and Product Engineering',
    ogDescription:
      'Controlled AI operations for businesses, plus an emerging Arizona R&D and prototype-to-pilot manufacturing service.',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fulcrum Agentics',
    twitterDescription:
      'From controlled AI business workflows to testable physical-product prototypes.',
  },

  navigation: {
    links: [
      { name: 'Services', href: '#services' },
      { name: 'AI Office', href: '#ai-office' },
      { name: 'R&D + Manufacturing', href: '/manufacturing/' },
      { name: 'Proof', href: '#proof' },
      { name: 'FAQ', href: '#faq' },
    ],
    cta: {
      text: 'Discuss a Project',
      href: projectMailto,
    },
  },

  hero: {
    eyebrow: 'AI business automation • Product R&D • Pilot manufacturing',
    headline: 'Build smarter workflows. Build real products.',
    headlineLines: ['Build smarter', 'workflows.', 'Build real products.'],
    description:
      'Fulcrum Agentics designs controlled AI workflows for businesses and is developing an Arizona-based R&D and small-batch contract manufacturing practice. From back-office automation to electronics prototypes and tooling feasibility, every project starts with defined engineering and review checkpoints.',
    cta: {
      primary: { text: 'Explore Our Services', href: '#services' },
      secondary: { text: 'See Product R&D', href: '/manufacturing/' },
    },
    proofPoints: [
      'Deploy AI workflows with evidence, approvals, and audit trails',
      'Prototype hardware with real CAD, electronics, and manufacturing methods',
      'Serve outside manufacturers alongside affiliated business clients',
    ],
    stats: [
      { value: 'AI systems', label: 'working, review-first automation' },
      { value: 'Hardware R&D', label: 'prototype-to-pilot capability in development' },
      { value: 'Client focused', label: 'independent and affiliated projects' },
    ],
    console: {
      title: 'Fractional AI office operating loop',
      rows: [
        { label: 'Business priority', value: 'Choose the workflow where speed, cost, or risk matters most' },
        { label: 'System map', value: 'Connect the right files, APIs, records, inboxes, and business rules' },
        { label: 'Control design', value: 'Set permissions, source authority, approvals, and escalation paths' },
        { label: 'Working pilot', value: 'Run one workflow on real data with observable acceptance criteria' },
        { label: 'Measured expansion', value: 'Improve from outcomes and expand only when the evidence supports it' },
      ],
    },
  },

  features: {
    title: 'The Control Layer Behind Reliable AI Operations',
    subtitle:
      'AI becomes operational when the role, data, permissions, review path, production boundary, and success measure are explicit.',
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
    title: 'Connect The Business Without Handing It Over',
    subtitle:
      'Map the business, prove one valuable workflow, keep human approval where risk lives, and expand from measured outcomes.',
  },

  engagement: {
    title: 'From First Workflow To An Operating AI Capability',
    subtitle:
      'The goal is not an AI demo. It is a repeatable operating capability your company can understand, govern, and improve.',
    steps: [
      {
        name: 'Diagnose',
        summary:
          'Map the company priorities, workflows, data sources, failure modes, approvals, and value at stake.',
        deliverable: 'Opportunity scorecard, workflow map, risk boundary, and 90-day roadmap.',
      },
      {
        name: 'Build Controlled Workflow',
        summary:
          'Ship the intake, source checks, agent proposal, operator review, production boundary, and audited output path.',
        deliverable: 'A working pilot connected to the systems it must read or write.',
      },
      {
        name: 'Operate and Improve',
        summary:
          'Measure outcomes, review exceptions, tighten rules, and expand automation only when the proof supports it.',
        deliverable: 'Executive reporting, run logs, exception history, training, and the next prioritized workflow.',
      },
    ],
  },

  faq: {
    title: 'Questions Founders And Operators Ask',
    subtitle:
      'The point is not to connect everything overnight. It is to build the AI capability deliberately, prove value, and keep accountability clear.',
  },

  contact: {
    title: 'Start with a process or product worth improving.',
    subtitle:
      'For AI work, tell us which systems and approvals slow you down. For hardware R&D, share a concept, CAD or STEP status, materials, quantities, and target date.',
    benefits: [
      'AI automation and integration projects',
      'Product feasibility, prototypes, and pilot-run planning',
      'A scoped next step with clear technical limitations',
    ],
    email: contactEmail,
    href: projectMailto,
    cta: 'Discuss Your Project',
  },

  footer: {
    tagline:
      'AI workflow engineering and emerging product R&D and small-batch manufacturing services for outside businesses.',
    columns: [
      {
        title: 'Proof',
        links: [
          { name: 'Services', href: '#services' },
          { name: 'Hardware R&D + Manufacturing', href: '/manufacturing/' },
          { name: 'Built Workflows', href: '#proof' },
          { name: 'Use Case', href: '/use-case/' },
          { name: 'Trial Workbench', href: '/trialworkbench/' },
          { name: 'Control Surfaces', href: '#control' },
          { name: 'Fractional AI Office', href: '#ai-office' },
          { name: 'Flagship Case', href: '#flagship' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { name: contactEmail, href: workflowMailto },
          { name: 'Start a Workflow Diagnostic', href: workflowMailto },
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
