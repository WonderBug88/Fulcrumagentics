// ============================================
// SITE CONFIGURATION (FULCRUM AGENTICS POSITIONING)
// ============================================

export const siteConfig = {
  // ============================================
  // SITE METADATA & SEO
  // ============================================
  site: {
    name: 'Fulcrum Agentics',
    title: 'Fulcrum Agentics - Operational AI for Catalog, Pricing, and Evidence Work',
    description:
      'Fulcrum Agentics designs, deploys, and operates AI-powered workflows for real business operations—catalog + pricing sync, back-office automation, and evidence-heavy review. Fast to launch, measurable in production, safe to scale.',
    keywords:
      'operational AI, agentic workflows, business automation, e-commerce automation, BigCommerce automation, catalog operations, pricing automation, sku matching, case pack automation, data workflows, evidence review, operations automation',
    email: 'hello@fulcrumagentics.com',

    // Open Graph / Twitter
    ogTitle: 'Fulcrum Agentics - Operational AI That Ships Outcomes',
    ogDescription:
      'AI-powered workflows for catalog + pricing ops, back-office automation, and evidence-heavy review—integrated into your tools with monitoring, approvals, and measurable performance.',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fulcrum Agentics',
    twitterDescription: 'Operational AI that ships outcomes—not demos.',
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    links: [
      { name: 'Solutions', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Packages', href: '#pricing' },
      { name: 'FAQ', href: '#faq' },
    ],
    cta: {
      text: 'Book a Call',
      href: '#contact',
    },
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    headline: 'Operational AI for Teams That Run the Business',
    subheadline: 'Automate the recurring work that drains time, creates mistakes, and limits scale',
    description:
      'Fulcrum Agentics takes ownership of high-friction workflows—connecting to your tools, enforcing your rules, and delivering measurable results with monitoring, approvals, and audit trails. Start with a Sprint to prove value fast, then run it reliably month to month.',
    cta: {
      primary: {
        text: 'Book a Call',
        href: '#contact',
      },
      secondary: {
        text: 'See How It Works',
        href: '#how-it-works',
      },
    },
    stats: [
      { value: 'Days', label: 'to a working prototype' },
      { value: 'Weeks', label: 'to production-ready deployment' },
      { value: 'Human-in-loop', label: 'approvals + audit trails' },
    ],
  },

  // ============================================
  // FEATURES SECTION (POSITION AS "SOLUTIONS")
  // ============================================
  features: {
    title: 'What We Own End-to-End',
    subtitle:
      'Three proven workflow categories—plus custom builds when your process is unique',
    items: [
      { icon: 'layers', title: 'Catalog Ops Automation' }, // enrichment, metadata, mapping, cleanup
      { icon: 'zap', title: 'Pricing + SKU Reconciliation' }, // vendor sheets, aliasing, case packs, margin rules, exceptions
      { icon: 'chart', title: 'Search + Content Operations' }, // GSC/GA4 routing, internal linking, refresh cycles
      { icon: 'shield', title: 'Approvals, Guardrails, and Audit Trails' }, // permissions + review gates
      { icon: 'clock', title: 'Monitoring + Exception Handling' }, // alerts, retries, run logs, drift detection
      { icon: 'code', title: 'Tool & API Integrations' }, // BigCommerce, Google, DBs, ticketing, CRM
      { icon: 'lightning', title: 'Workflow Automation' }, // intake → decide → act → report
      { icon: 'chat', title: 'Natural-Language Control' }, // “run the sync”, “show exceptions”, “draft evidence summary”
      { icon: 'brush', title: 'Custom Operational Builds' }, // unique processes, regulated flows, special rules
    ],
  },

  // ============================================
  // HOW IT WORKS
  // ============================================
  howItWorks: {
    title: 'How It Works',
    subtitle:
      'We prove value quickly, then take responsibility for reliable production performance',
    // If your UI supports steps, these are useful:
    steps: [
      {
        title: 'Scope the workflow',
        description:
          'We map your tools, inputs/outputs, rules, and failure modes. You get a clear “done” definition and ROI target.',
      },
      {
        title: 'Ship a Sprint',
        description:
          'A working prototype that runs the workflow end-to-end with logging, approvals, and exception reporting.',
      },
      {
        title: 'Harden for production',
        description:
          'We add reliability: evals/tests, permissions, monitoring, retries, and safe rollout to production.',
      },
      {
        title: 'Run + improve monthly',
        description:
          'We stay accountable: tune edge cases, handle drift, expand scope, and report performance.',
      },
    ],
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: {
    title: 'Built for Operators',
    subtitle:
      'Teams use Fulcrum Agentics to reduce manual work, prevent costly mistakes, and scale without adding headcount',
    companyLogos: ['CATALOGOPS', 'FULFILLMENT', 'FINOPS', 'REVOPS', 'COMPLIANCE'],
  },

  // ============================================
  // PRICING (PACKAGES / PRODUCTIZED SERVICES)
  // ============================================
  pricing: {
    title: 'Packages That Ship (and Keep Shipping)',
    subtitle:
      'Start with a Sprint to prove value fast. Then move to a monthly plan where we own reliability, monitoring, and continuous improvement.',
    plans: [
      {
        name: 'Starter Audit',
        price: '$0',
        period: '',
        description: 'We review your workflow and recommend the fastest operational win',
        features: [
          '30-minute discovery call',
          'Workflow + tool map',
          '1–2 recommended automations',
          'Rough scope + timeline',
        ],
        cta: {
          text: 'Book a Call',
          href: '#contact',
        },
        featured: false,
      },
      {
        name: 'Ops Sprint',
        price: '$2,500',
        period: ' one-time',
        description: 'A working prototype for one workflow—built to prove value quickly',
        badge: 'FASTEST PATH',
        features: [
          'One workflow automated end-to-end',
          'Integrations with 1–2 systems',
          'Run logs + basic monitoring',
          'Human-in-loop approvals',
          'Exception report + next-step roadmap',
        ],
        cta: {
          text: 'Start a Sprint',
          href: '#contact',
        },
        featured: true,
      },
      {
        name: 'Foundation',
        price: '$2,000',
        period: '/mo',
        description: 'We own one core workflow in production: monitoring, fixes, and steady improvement',
        features: [
          'Production monitoring + alerts',
          'Monthly performance review',
          'Edge-case tuning + rule updates',
          'Basic cost controls',
          'Run logs + audit trail',
        ],
        cta: {
          text: 'Run in Production',
          href: '#contact',
        },
        featured: false,
      },
      {
        name: 'Growth',
        price: '$5,000',
        period: '/mo',
        description: 'Multiple workflows, KPI tracking, and continuous optimization as volume scales',
        features: [
          '2–4 workflows supported',
          'KPI reporting + exception trends',
          'Human-in-loop queue + approvals',
          'Integrations and enhancements',
          'Priority fixes + faster iterations',
        ],
        cta: {
          text: 'Scale the System',
          href: '#contact',
        },
        featured: false,
      },
      {
        name: 'Scale',
        price: '$10,000+',
        period: '/mo',
        description: 'Mission-critical operations with governance, auditability, and SLA options',
        features: [
          'SLA support options',
          'Permissions + governance model',
          'Evaluation + regression testing',
          'Observability dashboards',
          'Multi-agent / multi-step workflows',
        ],
        cta: {
          text: 'Talk to Us',
          href: '#contact',
        },
        featured: false,
      },
    ],
    // Optional micro-copy that helps buyers:
    note:
      'Most teams start with an Ops Sprint, then move to Foundation or Growth for ongoing ownership and improvement.',
  },

  // ============================================
  // FAQ
  // ============================================
  faq: {
    title: 'Frequently Asked Questions',
    subtitle:
      'What to expect when deploying operational AI into real workflows',
    // If your FAQ component supports items, consider adding:
    items: [
      {
        q: 'Why is there a monthly fee?',
        a: 'Because real operations change: new edge cases, new data, and new constraints. The monthly plan covers monitoring, fixes, and continuous improvement so the workflow stays reliable—and doesn’t fall back on your team.',
      },
      {
        q: 'Do you charge per “agent” or per run?',
        a: 'No. We price around ownership of the workflow and the production outcomes: reliability, accuracy, and measurable performance.',
      },
      {
        q: 'What tools do you integrate with?',
        a: 'Common integrations include BigCommerce, Google (GSC/GA4), databases, spreadsheets, email/ticketing systems, and internal APIs.',
      },
      {
        q: 'Can we start small?',
        a: 'Yes. Start with one workflow in an Ops Sprint, prove ROI, then expand as the system pays for itself.',
      },
    ],
  },

  // ============================================
  // CONTACT
  // ============================================
  contact: {
    title: 'Tell Us the Workflow',
    subtitle:
      'Share the tools you use and the manual process you want off your plate. We’ll recommend a proven package—or design a custom solution that fits your environment.',
    benefits: [
      'No obligation discovery call',
      'Built around your tools and rules',
      'Approvals + audit trails',
      'Clear ROI targets + reporting',
    ],
    email: 'hello@fulcrumagentics.com',
    form: {
      cta: 'Book a Call',
      fields: {
        name: {
          label: 'Full Name',
          placeholder: 'John Doe',
          required: true,
        },
        email: {
          label: 'Work Email',
          placeholder: 'john@company.com',
          required: true,
        },
        company: {
          label: 'Company',
          placeholder: 'Your Company Inc.',
          required: false,
        },
        message: {
          label: 'What workflow should we own?',
          placeholder:
            'Example: “Sync vendor pricing sheets to BigCommerce weekly, reconcile SKUs/case packs, and generate an exceptions queue for review.”',
          required: false,
        },
      },
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline:
      'Operational AI for catalog, pricing, and evidence-heavy workflows—integrated into your tools with monitoring, approvals, and measurable performance.',
    columns: [
      {
        title: 'Solutions',
        links: [
          { name: 'Catalog Ops Automation', href: '#features' },
          { name: 'Pricing + SKU Reconciliation', href: '#features' },
          { name: 'Search + Content Operations', href: '#features' },
          { name: 'Custom Builds', href: '#contact' },
          { name: 'How It Works', href: '#how-it-works' },
        ],
      },
      {
        title: 'Company',
        links: [
          { name: 'About', href: '#' },
          { name: 'Case Studies', href: '#' },
          { name: 'Blog', href: '#' },
          { name: 'Contact', href: '#contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { name: 'Privacy Policy', href: '#' },
          { name: 'Terms of Service', href: '#' },
          { name: 'Security', href: '#' },
        ],
      },
    ],
    social: [
      { name: 'Twitter', href: '#', icon: 'twitter' },
      { name: 'GitHub', href: '#', icon: 'github' },
      { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    ],
    copyright: `${new Date().getFullYear()} Fulcrum Agentics. All rights reserved.`,
  },
};
