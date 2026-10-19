const contactEmail = 'hello@fulcrumagentics.com';
const workflowMailto = `mailto:${contactEmail}?subject=Fulcrum Project Inquiry`;

export const siteConfig = {
  site: {
    name: 'Fulcrum Agentics',
    logo: {
      src: '/assets/fulcrum-mark.svg',
      alt: 'Fulcrum Agentics',
      height: 32,
    },
    title: 'Fulcrum Agentics | Applied AI, R&D & Advanced Manufacturing',
    description:
      'Fulcrum Agentics engineers applied AI systems, reusable software and quantitative decision tools, with an expansion planned into product R&D and small-batch manufacturing.',
    keywords:
      'applied artificial intelligence, AI engineering, agentic workflows, advanced analytics, mathematical optimization, R&D, small batch contract manufacturing, rapid prototyping, injection molding, electronics assembly, CNC tooling, business automation, Arizona',
    email: contactEmail,
    workflowMailto,
    ogTitle: 'Fulcrum Agentics - Applied AI Meets Product Engineering',
    ogDescription:
      'Applied AI engineering, intelligent business systems, advanced analytics and planned small-batch product development.',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fulcrum Agentics',
    twitterDescription:
      'From intelligent business systems to the products they help build.',
  },

  navigation: {
    links: [
      { name: 'Capabilities', href: '#capabilities' },
      { name: 'Manufacturing', href: '#manufacturing' },
      { name: 'Our Work', href: '#proof' },
      { name: 'Services', href: '#ai-office' },
      { name: 'Contact', href: '#contact' },
    ],
    cta: {
      text: 'Discuss a Project',
      href: workflowMailto,
    },
  },

  hero: {
    eyebrow: 'Arizona applied AI engineering · R&D · advanced manufacturing',
    headline: 'Intelligent systems for business. Engineering for what comes next.',
    headlineLines: ['Intelligent systems', 'for business.', 'Engineering for', 'what comes next.'],
    description:
      'We create reusable AI-powered software, mathematical decision systems and controlled automations for real operations. We are expanding that expertise into product R&D and small-batch electronics and plastics manufacturing—bridging digital intelligence with physical production.',
    cta: {
      primary: { text: 'Discuss a Project', href: workflowMailto },
      secondary: { text: 'Explore Capabilities', href: '#capabilities' },
    },
    proofPoints: [
      'Working AI systems supporting Hotels4Humanity operations',
      'Advanced reasoning and quantitative research in development',
      'Micro-manufacturing and product R&D expansion planned',
    ],
    stats: [
      { value: 'AI software', label: 'operational systems and integrations' },
      { value: 'Applied R&D', label: 'reasoning, modeling and engineering' },
      { value: 'Microfactory', label: 'planned small-batch production' },
    ],
    console: {
      title: 'Applied intelligence development cycle',
      rows: [
        { label: 'Discover', value: 'Identify the problem, data, physical constraints and success criteria' },
        { label: 'Model', value: 'Apply advanced logic, mathematical analysis and engineering design' },
        { label: 'Build', value: 'Connect software, records, tools and human review points' },
        { label: 'Validate', value: 'Test on operational evidence or prototypes with measurable criteria' },
        { label: 'Scale deliberately', value: 'Standardize repeatable technology and expand only after proof' },
      ],
    },
  },

  features: {
    title: 'The Control Layer Behind Reliable AI Operations',
    subtitle:
      'AI becomes operational when the role, data, permissions, review path, production boundary, and success measure are explicit.',
  },

  proof: {
    title: 'Software Systems & Demonstrated Work',
    subtitle:
      'Systems developed in real operating environments, alongside research projects that continue to evolve. Individual capabilities and production readiness vary by project.',
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
    title: 'Questions About Our Services And R&D',
    subtitle:
      'From an AI workflow to a complex analytical model or physical product concept, scope and validation come before scale.',
  },

  contact: {
    title: 'Tell us what you want to automate, analyze or build.',
    subtitle:
      'Bring a business process, a difficult analytical problem, or a product-development concept. We will discuss feasibility, controls, success criteria and an appropriate first engagement.',
    benefits: [
      'AI workflow engineering and reusable software',
      'Advanced logic, mathematical modeling and applied research',
      'Product R&D scoping for planned manufacturing capabilities',
    ],
    email: contactEmail,
    href: workflowMailto,
    cta: 'Discuss a Project',
  },

  footer: {
    tagline:
      'Applied AI, intelligent software, quantitative R&D and a path toward advanced micro-manufacturing.',
    columns: [
      {
        title: 'Proof',
        links: [
          { name: 'Built Workflows', href: '#proof' },
          { name: 'Use Case', href: '/use-case/' },
          { name: 'Trial Workbench', href: '/trialworkbench/' },
          { name: 'Control Surfaces', href: '#control' },
          { name: 'AI Services', href: '#ai-office' },
          { name: 'Flagship Case', href: '#flagship' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { name: contactEmail, href: workflowMailto },
          { name: 'Discuss a Project', href: workflowMailto },
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
