export const faqItems = [
  {
    question: 'What do you mean by “agentic” software?',
    answer:
      'At Fulcrum, agentic software means systems that can take action across multi-step workflows—not just respond to prompts. We design these systems explicitly, with defined states, routing logic, decision boundaries, and failure handling, so behavior is predictable, auditable, and safe to run in production.',
  },
  {
    question: 'How is this different from simple or “autonomous” agents?',
    answer:
      'Many simple agents rely on implicit behavior—long prompts, hidden reasoning, and best-effort execution. That can work for demos, but it breaks under real operational complexity. We use explicit workflows with clear transitions, guardrails, and review points so outcomes are controllable and repeatable.',
  },
  {
    question: 'What happens when the system encounters edge cases or uncertainty?',
    answer:
      'Edge cases are expected. Our workflows are designed to surface uncertainty rather than hide it. When confidence drops or rules conflict, work is routed to human review or escalation paths instead of silently proceeding.',
  },
  {
    question: 'How do you prevent AI from making the wrong decision?',
    answer:
      'We don’t rely on a single model decision. We combine rules, thresholds, scoring, historical context, and human oversight. Risky or high-impact actions require approval, and every decision is logged with supporting evidence.',
  },
  {
    question: 'Is the system a black box?',
    answer:
      'No. All workflows are inspectable. You can see what decision was made, why it was made, what data was used, and what happened next. This is critical for trust, debugging, compliance, and long-term operation.',
  },
  {
    question: 'How does human-in-the-loop actually work?',
    answer:
      'Human review is designed as a first-class part of the system. Review queues, approval paths, rejections, and overrides are built into the workflow—not added afterward. Reviewer feedback is captured and used to improve future behavior.',
  },
  {
    question: 'Can workflows evolve after deployment?',
    answer:
      'Yes—this is expected. Workflows are config-driven and modular, allowing logic, thresholds, and routing to change without rebuilding the system. Ongoing evolution is part of how we operate, not treated as a new project every time.',
  },
  {
    question: 'Who owns the logic and data?',
    answer:
      'You do. The workflows are built around your data, your rules, and your operational context. We don’t abstract that away behind a generic platform, and your data is never used to train external models.',
  },
  {
    question: 'Is this suitable for high-stakes or regulated work?',
    answer:
      'Yes. Our approach is designed specifically for high-stakes environments where auditability, traceability, and control matter—such as pricing, catalog operations, compliance, and evidence-heavy review.',
  },
  {
    question: 'Is Fulcrum a software platform or a services company?',
    answer:
      'We operate as a partner that designs, deploys, and runs agentic workflows. You’re not just buying software—you’re getting an operational system that we help you put into production and improve over time.',
  },
];
