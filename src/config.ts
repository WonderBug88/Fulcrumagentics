// ============================================
// SITE CONFIGURATION (FULCRUM AGENTICS POSITIONING)
// ============================================

export const siteConfig = {
  // ============================================
  // SITE METADATA & SEO
  // ============================================
  site: {
  name: "Fulcrum Agentics",
  logo: {
    src: "/assets/fulcrum-logo.png", // or "/fulcrum-logo.png" if you put it in /public root
    alt: "Fulcrum Agentics",
    height: 32,
  },
  title: 'Fulcrum Agentics – AI-Powered Operational Workflows',
    description:
      'Fulcrum Agentics designs and operates AI-powered workflows for real business operations. We combine automation, human oversight, and continuous improvement to run catalog, pricing, and evidence-heavy processes reliably at scale.',
    keywords:
      'AI workflows, operational automation, AI for operations, catalog operations, pricing operations, e-commerce automation, BigCommerce workflows, evidence review systems, human-in-the-loop AI, decision automation',
    email: 'hello@fulcrumagentics.com',

    // Open Graph / Twitter (keep consistent + literal)
    ogTitle: 'Fulcrum Agentics - AI Workflows for Real Operations',
    ogDescription:
      'Production-ready AI workflows for catalog + pricing ops and evidence-heavy review—built to integrate with your systems, include approvals, and track results.',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fulcrum Agentics',
    twitterDescription: 'Operational workflows that reduce manual work—safely and measurably.',
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
    headline: 'AI Workflows for Real Operations',
    subheadline: 'Automate repeatable work with oversight and measurable results',
    description:
      'Fulcrum Agentics designs and runs operational workflows that connect to your tools, follow your rules, and produce auditable outputs. We start small, deploy safely, and improve performance over time.',
    cta: {
      primary: { text: 'Book a Call', href: '#contact' },
      secondary: { text: 'See How It Works', href: '#how-it-works' },
    },
    stats: [
      { value: 'Days', label: 'to a working prototype' },
      { value: 'Weeks', label: 'to a production rollout' },
      { value: 'Approvals + audit trails', label: 'built in' },
    ],
  },

  // ============================================
  // FEATURES SECTION (POSITION AS "SOLUTIONS")
  // ============================================
  features: {
    title: 'What We Build',
    subtitle:
      'Operational workflows you can run repeatedly—with guardrails, approvals, and reporting',
    items: [
      { icon: 'layers', title: 'Catalog Operations Workflows' }, // titles/SEO, product metadata, enrichment
      { icon: 'zap', title: 'Pricing + SKU Sync Workflows' }, // vendor sheets, aliasing, case packs, margin rules
      { icon: 'chart', title: 'Search + SEO Content Workflows' }, // GSC/GA4 routing, internal linking, content refresh
      { icon: 'code', title: 'Tool & API Integrations' }, // BigCommerce, Google, DBs, ticketing, CRM
      { icon: 'clock', title: 'Monitoring + Run Logs' }, // alerts, retries, run history
      { icon: 'shield', title: 'Guardrails & Approvals' }, // human-in-the-loop, permissions
      { icon: 'chat', title: 'Operator-Friendly Controls' }, // clear inputs, safe defaults, review queues
      { icon: 'lightning', title: 'Workflow Automation' }, // intake → decide → act → report
      { icon: 'brush', title: 'Custom Workflow Builds' }, // your unique process
    ],
  },

  // ============================================
  // HOW IT WORKS
  // ============================================
  howItWorks: {
    title: 'How It Works',
    subtitle:
      'We define the outcome, design the workflow, deploy safely, then improve it continuously',
  },

  // ============================================
  // TESTIMONIALS (PLACEHOLDERS, MATCH VOICE)
  // ============================================
  testimonials: {
    title: 'Built for Operators',
    subtitle:
      'Teams use Fulcrum Agentics to reduce manual work, prevent mistakes, and run workflows with confidence.',
    companyLogos: ['CATALOGOPS', 'FULFILLMENT', 'FINOPS', 'REVOPS', 'COMPLIANCE'],
  },

  // ============================================
  // PRICING (PACKAGES / PRODUCTIZED SERVICES)
  // ============================================
  pricing: {
    title: 'Packages That Ship',
    subtitle:
      'Start with a focused workflow. Expand scope once it’s working reliably in production.',
    plans: [
      {
        name: 'Starter Audit',
        price: '$0',
        period: '',
        description: 'We review your process and recommend the fastest, safest workflow win',
        features: [
          '30-minute discovery call',
          'Workflow + tool map',
          '1–2 workflow recommendations',
          'Rough scope + rollout approach',
        ],
        cta: { text: 'Book a Call', href: '#contact' },
        featured: false,
      },
      {
        name: 'Ops Workflow Sprint',
        price: '$2,500',
        period: ' one-time',
        description: 'A working prototype for one operational workflow',
        badge: 'FASTEST PATH',
        features: [
          'One workflow from intake → output',
          'Integrations to 1–2 systems',
          'Run logs + basic monitoring',
          'Approval / exception queue',
          'Handoff + next-step roadmap',
        ],
        cta: { text: 'Start a Sprint', href: '#contact' },
        featured: true,
      },
      {
        name: 'Production Deployment',
        price: 'Custom',
        period: '',
        description: 'Harden, secure, and scale workflows into production',
        features: [
          'Permissions + access controls',
          'Evaluation + regression checks',
          'Observability dashboards',
          'Retries + failure handling',
          'Support/SLA options',
          'Multi-step workflows',
        ],
        cta: { text: 'Talk to Us', href: '#contact' },
        featured: false,
      },
    ],
  },

  // ============================================
  // FAQ
  // ============================================
  faq: {
    title: 'Frequently Asked Questions',
    subtitle:
      'What to expect when deploying AI into real business workflows',
  },

  // ============================================
  // CONTACT
  // ============================================
  contact: {
    title: 'Tell Us the Workflow',
    subtitle:
      'Share your tools and the manual process you want to reduce. We’ll recommend a proven package—or design a custom workflow that fits your environment.',
    benefits: [
      'No obligation discovery call',
      'Built around your tools and rules',
      'Approval steps when needed',
      'Clear success metrics + reporting',
    ],
    email: 'hello@fulcrumagentics.com',
    form: {
      cta: 'Book a Call',
      fields: {
        name: { label: 'Full Name', placeholder: 'John Doe', required: true },
        email: { label: 'Work Email', placeholder: 'john@company.com', required: true },
        company: { label: 'Company', placeholder: 'Your Company Inc.', required: false },
        message: {
          label: 'What workflow should we improve?',
          placeholder:
            'Example: “Sync vendor pricing sheets to BigCommerce weekly, reconcile SKUs/case packs, and route exceptions for review.”',
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
      'AI-powered operational workflows for catalog, pricing, and evidence-heavy review—built to integrate, approve, measure, and scale.',
    columns: [
      {
        title: 'Solutions',
        links: [
          { name: 'Catalog Operations', href: '#features' },
          { name: 'Pricing + SKU Sync', href: '#features' },
          { name: 'SEO + Content Ops', href: '#features' },
          { name: 'Custom Workflows', href: '#contact' },
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
