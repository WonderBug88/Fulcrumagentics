// ============================================
// SITE CONFIGURATION (FULCRUM AGENTICS POSITIONING)
// ============================================

export const siteConfig = {
  // ============================================
  // SITE METADATA & SEO
  // ============================================
  site: {
    name: 'Fulcrum Agentics',
    title: 'Fulcrum Agentics - AI Agents for Ops, Catalog, and Evidence Work',
    description:
      'Fulcrum Agentics builds production-ready AI agents that automate operations: e-commerce catalog + pricing, back-office workflows, and evidence-heavy review. Fast to launch, measurable to run, safe to scale.',
    keywords:
      'agentic AI, AI agents, business automation, e-commerce automation, BigCommerce automation, catalog ops, pricing automation, data workflows, evidence analysis, operations automation',
    email: 'hello@fulcrumagentics.com',

    // Open Graph / Twitter
    ogTitle: 'Fulcrum Agentics - AI Agents for Real Operations',
    ogDescription:
      'Production-ready AI agents for catalog + pricing ops, back-office workflows, and evidence-heavy review—built to integrate, measure, and scale.',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fulcrum Agentics',
    twitterDescription: 'AI agents that ship outcomes—not demos.',
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
    headline: 'AI Agents for Real Operations',
    subheadline: 'Automate the work that keeps your business running',
    description:
      'Fulcrum Agentics designs and deploys production-ready AI agents that connect to your tools, follow your rules, and deliver measurable results. Start with a proven package—or commission a custom agent built for your workflow.',
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
      { value: 'Weeks', label: 'to production deployment' },
      { value: 'Human-in-loop', label: 'controls + audit trails' },
    ],
  },

  // ============================================
  // FEATURES SECTION (POSITION AS "SOLUTIONS")
  // ============================================
  features: {
    title: 'What We Build',
    subtitle:
      'Three proven agent categories—plus custom builds when your workflow is unique',
    items: [
      { icon: 'layers', title: 'E-commerce Catalog Agents' }, // title/SEO, product metadata, enrichment
      { icon: 'zap', title: 'Pricing + SKU Sync Agents' }, // vendor sheets, aliasing, case packs, margin rules
      { icon: 'chart', title: 'Search + SEO Content Agents' }, // GSC/GA4 routing, internal linking, content refresh
      { icon: 'code', title: 'Tool & API Integrations' }, // BigCommerce, Google, DBs, ticketing, CRM
      { icon: 'clock', title: 'Always-On Monitoring' }, // alerts, retries, run logs
      { icon: 'shield', title: 'Guardrails & Approvals' }, // human-in-loop, permissions
      { icon: 'chat', title: 'Natural Language Control' }, // “do this job” interface
      { icon: 'lightning', title: 'Workflow Automation' }, // intake → decide → act → report
      { icon: 'brush', title: 'Custom Agent Builds' }, // your unique process
    ],
  },

  // ============================================
  // HOW IT WORKS
  // ============================================
  howItWorks: {
    title: 'How It Works',
    subtitle:
      'We scope the workflow, ship an agent fast, then harden it for reliable production use',
  },

  // ============================================
  // TESTIMONIALS (HOLD PLACEHOLDERS BUT MATCH VOICE)
  // ============================================
  testimonials: {
    title: 'Built for Operators',
    subtitle:
      'Teams use Fulcrum Agentics to reduce manual work, prevent mistakes, and move faster with confidence',
    companyLogos: ['CATALOGOPS', 'FULFILLMENT', 'FINOPS', 'REVOPS', 'COMPLIANCE'],
  },

  // ============================================
  // PRICING (REPOSITION AS PACKAGES / PRODUCTIZED SERVICES)
  // ============================================
  pricing: {
    title: 'Packages That Ship',
    subtitle:
      'Start with a proven package. Add custom integrations and enhancements as needed.',
    plans: [
      {
        name: 'Starter Audit',
        price: '$0',
        period: '',
        description: 'We review your workflow and recommend the fastest agent win',
        features: [
          '30-minute discovery call',
          'Workflow + tool map',
          '1–2 agent recommendations',
          'Rough scope + timeline',
        ],
        cta: {
          text: 'Book a Call',
          href: '#contact',
        },
        featured: false,
      },
      {
        name: 'Ops Agent Sprint',
        price: '$2,500',
        period: ' one-time',
        description: 'A working agent prototype built for one workflow',
        badge: 'FASTEST PATH',
        features: [
          'One workflow automated end-to-end',
          'Tool/API integration (1–2 systems)',
          'Run logs + basic monitoring',
          'Human-in-loop approvals',
          'Handoff + next-step roadmap',
        ],
        cta: {
          text: 'Start a Sprint',
          href: '#contact',
        },
        featured: true,
      },
      {
        name: 'Production Deployment',
        price: 'Custom',
        period: '',
        description: 'Harden, secure, and scale agents into production',
        features: [
          'Security + permissions model',
          'Evaluation + regression tests',
          'Observability dashboards',
          'Retries + failure handling',
          'SLA support options',
          'Multi-agent workflows',
        ],
        cta: {
          text: 'Talk to Us',
          href: '#contact',
        },
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
      'What to expect when deploying AI agents into real business workflows',
  },

  // ============================================
  // CONTACT
  // ============================================
  contact: {
    title: 'Tell Us the Workflow',
    subtitle:
      'Share your tools and the manual process you want to eliminate. We’ll recommend a proven package—or design a custom agent that fits your environment.',
    benefits: [
      'No obligation discovery call',
      'Built around your tools and rules',
      'Human-in-the-loop approvals',
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
          label: 'What workflow should we automate?',
          placeholder:
            'Example: “Sync vendor pricing sheets to BigCommerce weekly, reconcile SKUs/case packs, and generate exceptions for review.”',
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
      'Production-ready AI agents for ops, catalog, and evidence-heavy workflows—built to integrate, measure, and scale.',
    columns: [
      {
        title: 'Solutions',
        links: [
          { name: 'Catalog Agents', href: '#features' },
          { name: 'Pricing + SKU Sync', href: '#features' },
          { name: 'SEO + Content Ops', href: '#features' },
          { name: 'Custom Agents', href: '#contact' },
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
