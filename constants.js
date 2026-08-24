export const METADATA = {
  author: "Uke Cosmas",
  title: "Portfolio | Uke Cosmas",
  description:
    "Uke Cosmas is a QA Engineer with a full-stack development background, focused on testing reliable, user-centred web platforms with sharp attention to detail.",
  siteUrl: "#", // TODO: add your live portfolio URL once deployed
  twitterHandle: "#", // TODO: add your Twitter/X handle if you have one
  keywords: [
    "Uke Cosmas",
    "QA Engineer",
    "QA Automation Engineer",
    "Software Quality Assurance",
    "Full Stack Developer",
    "React Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png", // TODO: replace with your own social preview image
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic QA Engineer",
  "I break things so users don't have to",
  "First a developer, now quality-obsessed",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:#", // TODO: add your real email, e.g. mailto:you@example.com
  },
  {
    name: "linkedin",
    url: "#", // TODO: add your LinkedIn URL
  },
  {
    name: "github",
    url: "#", // TODO: add your GitHub URL
  },
  {
    name: "instagram",
    url: "#",
  },
  {
    name: "twitter",
    url: "#",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "vscode",
    "javascript",
    "typescript",
    "nodejs",
    "postman",
    "swagger",
    "jira",
    "github-actions",
    "figma",
  ],
  librariesAndFrameworks: [
    "react",
    "nextjs",
    "tailwindcss",
    "jest",
    "testing-library",
    "tanstack",
    "playwright",
    "appium",
    "selenium",
  ],
  databases: ["postgresql", "mysql", "mongodb", "supabase"],
  other: ["git", "prisma", "github", "linux", "docker"],
};

export const PROJECTS = [
  {
    name: "Occupy Admin Dashboard",
    logoKey: "occupy", // TODO: add a square/circular logo asset with this key
    techStack: ["typescript", "nextjs", "tailwindcss", "postman", "jira"],
    description:
      "Designed and executed functional and regression test suites for customer, rider, and supermarket dashboards, identifying defects across cart grouping, order assignment, and inventory synchronization workflows before public launch. Validated location-based product discovery and delivery routing, simulating estate-level traffic and delivery delays to ensure accurate ETAs and successful last-mile delivery.",
    link: "https://occupyestate.com",
  },
  {
    name: "TRX",
    logoKey: "trx", // TODO: add a square/circular logo asset with this key
    techStack: ["postman", "typescript", "nextjs", "tailwindcss"],
    description:
      "Currently serving as QA on TRX, a multi-role fintech platform spanning buyer, seller, financier, and admin workflows — running UAT and bug-fixing cycles, while also contributing frontend code to the same modules I now help verify. Actively in progress, so no public metrics yet.",
    link: "https://trx-platform-two.vercel.app/login",
  },
  {
    name: "QampusPlus",
    logoKey: "qampusplus", // TODO: add a square/circular logo asset with this key
    techStack: ["jest", "testing-library", "jira", "typescript", "nextjs"],
    description:
      "On QampusPlus, a school management platform automating results, fees, attendance, and communication for schools, I wrote and maintained unit and integration tests (Jest, React Testing Library) across core modules, verified API integrations between academic, finance, and administrative systems, and manually tested dashboards and academic summary views used live by schools and parents. Adoption figures aren't publicly disclosed, but the platform supports full school setup in under 5 minutes.",
    link: "https://www.qampusplus.com/",
  },
  {
    name: "QampusPay",
    logoKey: "qampuspay", // TODO: add a square/circular logo asset with this key
    techStack: ["jest", "testing-library", "postman", "jira", "typescript"],
    description:
      "On QampusPay, the fee-collection layer of the same school management suite, I manually tested payment-tracking and invoicing flows — verifying tuition, hostel, and fee calculations against expected values before release — alongside writing integration tests for the underlying API layer. QampusPay operates as private infrastructure, so transaction-volume figures aren't publicly available.",
    link: "https://qampuspay.com/",
  },
  {
    name: "Moverse Portfolio",
    logoKey: "moverse-portfolio", // TODO: add a square/circular logo asset with this key
    techStack: ["nextjs", "sanity", "tailwindcss", "git"],
    description:
      "Built and shipped solo for Moverse Technologies — a Next.js + Sanity CMS site deployed via cPanel with a CI/CD pipeline that auto-builds and deploys on every push to main. Since launching in April, it's brought in 7 real clients across app development, graphic design, and WordPress services.",
    link: "https://moverse-portfolio.vercel.app/",
  },
  {
    name: "Moverse Agent",
    logoKey: "moverse-agent", // TODO: add a square/circular logo asset with this key
    techStack: ["nextjs", "supabase", "typescript"],
    description:
      "A shared WhatsApp inbox for Moverse's support team, built with the WhatsApp Business API — multiple agents can respond to customers from one shared number, with Supabase powering real-time message sync across the console.",
    link: "https://moverse-agent.vercel.app/",
  },
];

export const WORK_CONTENTS = {
  TECHVIBES: [
    {
      title: "Techvibes",
      description:
        "Techvibes Limited is a technology solutions and transaction services company building digital platforms for identity management, revenue systems, and process automation for governments and enterprises.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Solving problems for governments and enterprises
        </div>
      ),
    },
    {
      title: "Quality-First Development",
      description:
        "Wrote and maintained unit and integration tests (Jest, React Testing Library) as a routine part of feature delivery across a multi-module school management ecosystem, verified API integrations across academic, finance, and administrative modules, and manually tested dashboards, invoicing, and payment-tracking features used live by schools and parents.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Software Developer, QA Automation Focus
        </div>
      ),
    },
  ],
  OCCUPY: [
    {
      title: "Occupy",
      description:
        "Occupy is an estate-based e-commerce platform enabling residents to order groceries and household items for doorstep delivery, live across two estates serving 2,000+ residents.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Groceries, delivered to your gate
        </div>
      ),
    },
    {
      title: "Building It",
      description:
        "Built the platform's full administrative dashboard as its developer — real-time visibility into orders, users, and operational data across both estate deployments, with responsive UI for a non-technical resident user base.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Software Developer
        </div>
      ),
    },
    {
      title: "Testing It",
      description:
        "Transitioned into QA on the same platform, running manual and API testing (Postman) across order placement, payment, and delivery workflows — using firsthand knowledge of the codebase to catch edge cases and integration risks other testers would miss.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          QA Engineer
        </div>
      ),
    },
  ],
};

export const GTAG = "#"; // TODO: add your own Google Analytics tag if you use one