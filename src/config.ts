const contactEmail = 'hello@fulcrumagentics.com';
const workflowMailto = `mailto:${contactEmail}?subject=AI Workflow Diagnostic`;

export const siteConfig = {
  site: {
    name: 'Fulcrum Agentics',
    logo: {
      src: '/assets/fulcrum-mark.svg',
      alt: 'Fulcrum Agentics',
      height: 32,
    },
    title: 'Fulcrum Agentics | Fractional AI Office for Commerce Operations',
    description:
      'Fulcrum Agentics gives owner-led commerce companies an accountable AI office: strategy, controlled workflow implementation, governance, and ongoing operation.',
    keywords:
      'fractional chief AI officer, fractional AI office, commerce AI operations, ecommerce AI automation, AI workflow diagnostic, controlled AI workflows, BigCommerce automation, catalog automation, fulfillment automation, human in the loop AI, AI governance',
    email: contactEmail,
    workflowMailto,
    ogTitle: 'Fulcrum Agentics - Your Fractional AI Office',
    ogDescription:
      'AI strategy, implementation, governance, and ongoing operation for owner-led commerce companies.',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fulcrum Agentics',
    twitterDescription:
      'Turn the work that keeps landing on the founder into controlled AI workflows.',
  },

  navigation: {
    links: [
      { name: 'Flagship Case', href: '#flagship' },
      { name: 'AI Office', href: '#ai-office' },
      { name: 'Proof', href: '#proof' },
      { name: 'Use Case', href: '/use-case/' },
      { name: 'FAQ', href: '#faq' },
    ],
    cta: {
      text: 'Start a Workflow Diagnostic',
      href: workflowMailto,
    },
  },

  hero: {
    eyebrow: 'Fractional AI office for owner-led commerce companies',
    headline: 'Turn the work that keeps landing on your desk into controlled AI workflows.',
    headlineLines: ['Turn the work', 'that keeps landing', 'on your desk into', 'controlled AI workflows.'],
    description:
      'Your company is successful. The problem is that competitors are responding faster while catalog decisions, fulfillment exceptions, analytics, and approvals still route through you. Fulcrum provides the AI leadership and implementation team to change that—one proven operating loop at a time.',
    cta: {
      primary: { text: 'Start a Workflow Diagnostic', href: workflowMailto },
      secondary: { text: 'See the Flagship Story', href: '#flagship' },
    },
    proofPoints: [
      'Prioritize AI investments around measurable business value',
      'Connect existing systems without surrendering human control',
      'Build capacity while your people stay focused on customers',
    ],
    stats: [
      { value: 'Strategy to system', label: 'one accountable AI office' },
      { value: 'One workflow first', label: 'prove value before expanding' },
      { value: 'Human controlled', label: 'approval stays where risk lives' },
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
    title: 'Start with the workflow that keeps coming back to you.',
    subtitle:
      'Send the process, the systems it touches, the decision you still make personally, and what faster execution would change for the business.',
    benefits: [
      'A focused workflow and risk discussion',
      'A clear recommendation on what should remain human',
      'A paid diagnostic only when there is a credible path to value',
    ],
    email: contactEmail,
    href: workflowMailto,
    cta: 'Start a Workflow Diagnostic',
  },

  footer: {
    tagline:
      'The fractional AI office for owner-led commerce companies: strategy, controlled implementation, governance, and ongoing operation.',
    columns: [
      {
        title: 'Proof',
        links: [
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
