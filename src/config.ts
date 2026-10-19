const contactEmail = 'hello@fulcrumagentics.com';
const contactLink = `mailto:${contactEmail}?subject=Fulcrum%20Agentics%20Inquiry`;

export const siteConfig = {
  site: {
    name: 'Fulcrum Agentics',
    logo: {
      src: '/assets/fulcrum-mark.svg',
      alt: 'Fulcrum Agentics',
      height: 32,
    },
    title: 'Fulcrum Agentics | Applied AI for Real Operations',
    description:
      'Fulcrum Agentics builds practical AI workflows and software for complex business operations. Explore work developed for Hotels4Humanity.',
    keywords:
      'Fulcrum Agentics, applied AI, AI workflow engineering, commerce automation, supplier data ETL, order orchestration, shipping modeling, operational software, Arizona technology',
    email: contactEmail,
    workflowMailto: contactLink,
    ogTitle: 'Fulcrum Agentics — AI That Works in the Real World',
    ogDescription:
      'Practical AI and operational software. See Hermes, PAM ETL, shipping intelligence and more.',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fulcrum Agentics',
    twitterDescription: 'Applied AI systems built around real business operations.',
  },

  navigation: {
    links: [
      { name: 'Our Work', href: '#work' },
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#contact' },
    ],
    cta: { text: 'Get in Touch', href: contactLink },
  },

  hero: {
    eyebrow: 'Applied AI · Built in Arizona',
    headline: 'AI software built for real operations.',
    description:
      'We build practical automation and decision tools for the complex work behind a business—from supplier data and fulfillment to shipping and publishing. Our systems are being developed and tested in real operations.',
    cta: {
      primary: { text: 'See Our Work', href: '#work' },
      secondary: { text: 'Get in Touch', href: contactLink },
    },
  },

  contact: {
    title: 'Have a problem worth solving?',
    subtitle:
      'We are building and refining software around real operational challenges. For introductions, collaboration or a project conversation, get in touch.',
    email: contactEmail,
    href: contactLink,
    cta: 'Email Fulcrum',
  },

  footer: {
    tagline: 'Practical AI and software engineering. Built around real work.',
    columns: [
      {
        title: 'Explore',
        links: [
          { name: 'Our Work', href: '#work' },
          { name: 'About', href: '#about' },
          { name: 'Contact', href: '#contact' },
        ],
      },
      {
        title: 'More',
        links: [
          { name: 'Contact Us', href: contactLink },
          { name: 'Privacy', href: '/privacy/' },
          { name: 'Terms', href: '/terms/' },
        ],
      },
    ],
    copyright: `${new Date().getFullYear()} Fulcrum Agentics. All rights reserved.`,
  },
};
