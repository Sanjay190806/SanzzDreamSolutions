export const businessConfig = {
  brandName: "SanzzDream Solutions",
  shortName: "SDS",
  tagline: "Engineering Your Digital Vision.",
  tallyUrl: "https://tally.so/r/ZjEalB",
  paymentConfirmationUrl: "#",
  email: "sanjaykaruppusamy1908@gmail.com",
  emailUrl: "mailto:sanjaykaruppusamy1908@gmail.com",
  whatsappNumber: "918939921908",
  whatsappUrl: "https://wa.me/918939921908",
  whatsappDisplay: "+91 89399 21908",
  upiId: "ksanjay0012006@okhdfcbank",
  showUpiId: false,
  advancePercentage: "50%",
  balancePercentage: "50%",
  experienceLine:
    "Built by a technical founder and supported by a growing execution network across creative, data, office, and frontend delivery."
};

export function createWhatsAppUrl(message) {
  if (!businessConfig.whatsappNumber || businessConfig.whatsappNumber.includes("YOUR")) {
    return "#";
  }
  return `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["Estimate Cost", "#quote-calculator"],
  ["Packages", "#packages"],
  ["Process", "#process"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"]
];

export const serviceStack = ["Video", "Photo", "Data", "Frontend", "PPT", "Excel", "Word"];

export const launchStatusChips = [
  "Tally Intake",
  "WhatsApp Contact",
  "50% Advance",
  "Notion Tracking",
  "Final Delivery"
];

export const quickActions = [
  {
    title: "Start Project",
    description: "Submit requirement through Tally for a clear quote.",
    icon: "arrow",
    href: businessConfig.tallyUrl,
    external: true
  },
  {
    title: "WhatsApp SDS",
    description: "Send your requirement directly for quick discussion.",
    icon: "chat",
    href: createWhatsAppUrl("Hi SDS, I want to start a project. My requirement is:"),
    external: true
  },
  {
    title: "Email SDS",
    description: "Share detailed files, links, and project notes by email.",
    icon: "mail",
    href: businessConfig.emailUrl
  }
];

export const services = [
  {
    id: "video",
    icon: "video",
    title: "Video Editing",
    startingPrice: "₹499+",
    delivery: "1-3 days for simple reels or short edits.",
    who: "Creators, students, college teams, small businesses, and startup founders.",
    gets:
      "Clean edited videos for social media, YouTube, college events, startup promos, and product demos.",
    revisions: ["Basic: 1 revision", "Standard: 2 revisions", "Premium: 3 revisions"],
    useCases: [
      "Instagram reels",
      "YouTube shorts",
      "College event promos",
      "Startup demo videos",
      "Product explainers",
      "Captioned reels"
    ],
    cta: "Request Video Edit",
    whatsapp: "Hi SDS, I need a video editing service. My requirement is:"
  },
  {
    id: "photo",
    icon: "photo",
    title: "Photo Editing",
    startingPrice: "₹199+",
    delivery: "1-2 days for simple edits.",
    who: "Students, creators, local sellers, small businesses, and personal brands.",
    gets:
      "Clean edited images for posters, thumbnails, social media, products, and profile or brand visuals.",
    revisions: ["Basic: 1 revision", "Standard: 2 revisions", "Premium: 3 revisions"],
    useCases: [
      "Background removal",
      "Thumbnail design",
      "Poster design",
      "Product photo cleanup",
      "Social media posts",
      "Color correction"
    ],
    cta: "Request Photo Edit",
    whatsapp: "Hi SDS, I need a photo editing service. My requirement is:"
  },
  {
    id: "analytics",
    icon: "data",
    title: "Data Analytics",
    startingPrice: "₹999+",
    delivery: "2-5 days depending on data size and dashboard complexity.",
    who: "Students, small businesses, project teams, founders, and academic/report users.",
    gets:
      "Clean dashboards, reports, insights, and organized data using Excel, Power BI, SQL, or Python.",
    revisions: ["Basic: 1 revision", "Standard: 2 revisions", "Premium: 3 revisions"],
    useCases: [
      "Excel dashboards",
      "Power BI dashboards",
      "SQL reports",
      "Data cleaning",
      "Business insights",
      "Academic project reports"
    ],
    cta: "Request Dashboard",
    whatsapp: "Hi SDS, I need a data analytics/dashboard service. My requirement is:"
  },
  {
    id: "frontend",
    icon: "frontend",
    title: "Frontend Development",
    startingPrice: "₹1499+",
    delivery: "3-7 days depending on page count and design complexity.",
    who: "Students, creators, startups, local businesses, and personal brands.",
    gets:
      "Responsive frontend pages, portfolios, landing pages, and simple business websites.",
    revisions: ["Basic: 1 revision", "Standard: 2 revisions", "Premium: 3 revisions"],
    useCases: [
      "Student portfolio website",
      "Startup landing page",
      "Business website",
      "React UI screen",
      "Product page",
      "Website redesign"
    ],
    cta: "Request Website",
    whatsapp: "Hi SDS, I need a frontend website/page. My requirement is:"
  },
  {
    id: "powerpoint",
    icon: "presentation",
    title: "PowerPoint Presentations",
    startingPrice: "₹299+",
    delivery: "1-3 days for simple to standard presentation decks.",
    who: "Students, seminar teams, founders, small businesses, and project/report users.",
    gets:
      "Professional PPT decks for college projects, business pitches, seminars, reports, and startup presentations.",
    revisions: ["Basic: 1 revision", "Standard: 2 revisions", "Premium: 3 revisions"],
    useCases: [
      "College project PPT",
      "Business pitch deck",
      "Seminar presentation",
      "Clean slide redesign",
      "Infographic slides"
    ],
    cta: "Request PPT Deck",
    whatsapp: "Hi SDS, I need a PowerPoint presentation. My requirement is:"
  },
  {
    id: "excel",
    icon: "spreadsheet",
    title: "Excel Work",
    startingPrice: "₹299+",
    delivery: "1-3 days depending on formulas, cleanup, and dashboard complexity.",
    who: "Students, small businesses, academic users, founders, and reporting teams.",
    gets:
      "Excel sheets, dashboards, reports, formulas, formatting, and data organization.",
    revisions: ["Basic: 1 revision", "Standard: 2 revisions", "Premium: 3 revisions"],
    useCases: [
      "Excel dashboards",
      "Data cleaning",
      "Formulas",
      "Charts",
      "Reports",
      "Formatting"
    ],
    cta: "Request Excel Work",
    whatsapp: "Hi SDS, I need Excel work. My requirement is:"
  },
  {
    id: "word",
    icon: "document",
    title: "Word Documents",
    startingPrice: "₹199+",
    delivery: "1-2 days for formatting and standard documents.",
    who: "Students, job seekers, project teams, academic users, and small businesses.",
    gets:
      "Professional Word documents for reports, resumes, project documentation, assignments, and formatted submissions.",
    revisions: ["Basic: 1 revision", "Standard: 2 revisions", "Premium: 3 revisions"],
    useCases: [
      "Project reports",
      "Resume formatting",
      "Assignment formatting",
      "Documentation",
      "PDF export-ready files"
    ],
    cta: "Request Document",
    whatsapp: "Hi SDS, I need Word document formatting. My requirement is:"
  },
  {
    id: "graphic",
    icon: "photo",
    title: "Graphic Design",
    startingPrice: "₹299+",
    delivery: "1-3 days depending on design complexity.",
    who: "Startups, local businesses, creators, personal brands, and college clubs.",
    gets: "Polished logos, posters, flyers, banners, social media creatives, and brand kits.",
    revisions: ["Basic: 1 revision", "Standard: 2 revisions", "Premium: 3 revisions"],
    useCases: [
      "Logo design",
      "Poster & flyer design",
      "Social media posts",
      "Brand identity kits",
      "Business cards",
      "Banner design"
    ],
    cta: "Request Graphic Design",
    whatsapp: "Hi SDS, I need a graphic design service. My requirement is:"
  },
  {
    id: "writing",
    icon: "document",
    title: "Content Writing",
    startingPrice: "₹199+",
    delivery: "1-3 days for articles, copy, and reviews.",
    who: "Bloggers, small businesses, startups, job seekers, and creators.",
    gets: "SEO-friendly blog posts, website copywriting, social media captions, ad copy, and resumes.",
    revisions: ["Basic: 1 revision", "Standard: 2 revisions", "Premium: 3 revisions"],
    useCases: [
      "SEO articles & blogs",
      "Website copy",
      "Resume writing",
      "Social media captions",
      "Ad copywriting",
      "Technical reviews"
    ],
    cta: "Request Content Writing",
    whatsapp: "Hi SDS, I need a content writing service. My requirement is:"
  }
];

export const packages = [
  {
    tier: "Basic",
    title: "Best for small, simple tasks.",
    included: [
      "Simple requirement",
      "Basic polish",
      "1 revision",
      "Standard delivery",
      "Final output file"
    ],
    cta: "Start Basic Project"
  },
  {
    tier: "Standard",
    title: "Best for most students, creators, and small businesses.",
    highlighted: true,
    included: [
      "Better polish",
      "Captions/design cleanup where relevant",
      "2 revisions",
      "Priority review",
      "Final output files"
    ],
    cta: "Start Standard Project"
  },
  {
    tier: "Premium",
    title: "Best for launch-ready work.",
    included: [
      "Stronger creative/technical polish",
      "Multiple output formats where relevant",
      "3 revisions",
      "Priority delivery planning",
      "Final files plus editable/source files if agreed"
    ],
    cta: "Start Premium Project"
  }
];

export const packageExamples = [
  ["Video Editing", "Basic: 1 short reel", "Standard: reel with captions + transitions", "Premium: reel package with hook, captions, effects, thumbnail"],
  ["Photo Editing", "Basic: 1 simple image edit", "Standard: poster/thumbnail/product edit", "Premium: multi-image or brand-ready visual pack"],
  ["Data Analytics", "Basic: simple Excel cleanup/report", "Standard: Excel or Power BI dashboard", "Premium: dashboard + insights + documentation"],
  ["Frontend Development", "Basic: one-section/one-page static page", "Standard: portfolio or landing page", "Premium: multi-section responsive business website"],
  ["PowerPoint", "Basic: simple 5-7 slide deck", "Standard: clean 10-15 slide presentation", "Premium: pitch-ready deck with visuals and infographics"],
  ["Excel", "Basic: formatting or simple sheet cleanup", "Standard: formulas, charts, and organized report", "Premium: dashboard with insights and documentation"],
  ["Word", "Basic: document formatting", "Standard: project report or resume formatting", "Premium: full structured report with clean layout and PDF export"]
];

export const processSteps = [
  ["Submit Requirement", "Client shares service need, deadline, budget range, files, and reference links."],
  ["Receive Quote", "SDS reviews scope and sends price, delivery time, and revision limit."],
  ["Pay 50% Advance", "Work begins after manual UPI/bank confirmation."],
  ["Work Begins", "Editing, design, analytics, office, or frontend execution starts with tracked scope."],
  ["Preview & Revisions", "Client receives a draft and included revisions are handled based on package."],
  ["Pay Balance", "Client pays the remaining 50% after approval."],
  ["Final Delivery", "Final files/source/editable assets are delivered based on agreement."]
];

export const revisionPolicies = [
  ["Basic", "1 revision included."],
  ["Standard", "2 revisions included."],
  ["Premium", "3 revisions included."],
  ["Extra revisions", "Chargeable based on effort and scope."]
];

export const paymentRules = [
  ["Mode", "UPI / Bank Transfer"],
  ["Advance", businessConfig.advancePercentage],
  ["Balance", businessConfig.balancePercentage],
  ["Status", "Manual confirmation"],
  [
    "UPI",
    businessConfig.showUpiId
      ? businessConfig.upiId
      : "UPI details will be shared after quote confirmation."
  ]
];

export const notionColumns = [
  "New Lead",
  "Quoted",
  "Advance Paid",
  "Assigned",
  "In Progress",
  "Review",
  "Delivered"
];

export const notionPreviewCards = [
  ["SDS-26-001", "Video Edit", "In Progress"],
  ["SDS-26-002", "Excel Dashboard", "Review"],
  ["SDS-26-003", "Landing Page", "Quoted"]
];

export const timelineEstimates = [
  ["Photo Editing", "1-2 days for simple edits."],
  ["Video Editing", "1-3 days for reels, shorts, and basic promos."],
  ["Data Analytics", "2-5 days depending on data size and dashboard complexity."],
  ["Frontend Development", "3-7 days depending on page count and design complexity."],
  ["PowerPoint Presentations", "1-3 days depending on slide count and visual polish."],
  ["Excel Work", "1-3 days depending on formulas, cleanup, and report complexity."],
  ["Word Documents", "1-2 days for formatting and standard documents."]
];

export const whyChooseItems = [
  ["Clear Communication", "No vague scope, no ghosting, no confusing freelancer chaos."],
  ["Affordable Starting Prices", "Built for students, creators, startups, and local businesses."],
  ["Tracked Delivery", "Projects are organized internally through Notion."],
  ["Preview Before Final Files", "Clients can review draft output before final delivery."],
  ["Clear Revision Policy", "Each package has defined revision limits."],
  ["Founder-Led Quality Check", "Work is reviewed before client handoff."],
  ["Manual MVP Now, Automation Later", "Simple workflow today, full client portal planned for future."],
  ["Creative + Technical Mix", "Video, photo, data, office, and frontend services under one execution brand."]
];

export const founderPrinciples = [
  "Start simple",
  "Communicate clearly",
  "Keep scope clean",
  "Track execution",
  "Review before delivery",
  "Build trust before automation"
];

export const faqs = [
  ["What services does SDS currently offer?", "SDS currently offers video editing, photo editing, data analytics, frontend development, PowerPoint presentations, Excel work, and Word documents."],
  ["How do I start a project?", "Click Start a Project, fill the Tally form, and share your requirement. SDS will review it and send a quote."],
  ["Can I contact through WhatsApp?", "Yes. Use the WhatsApp button to send your requirement directly."],
  ["Do I need to pay advance?", "Yes. SDS starts work after 50% advance confirmation."],
  ["How do I pay?", "Payment is currently accepted manually through UPI or bank transfer. UPI details are shared after quote confirmation when needed."],
  ["Why 50% advance?", "Advance confirms commitment, protects execution time, and allows SDS to assign and track the work properly."],
  ["How many revisions are included?", "Basic includes 1 revision, Standard includes 2 revisions, and Premium includes 3 revisions. Extra revisions may cost more."],
  ["Can you deliver urgently?", "Urgent delivery may be possible depending on workload and project complexity. Extra charges may apply."],
  ["What file formats do you provide?", "File formats depend on the service. Examples include MP4, PNG, JPG, PDF, XLSX, PBIX, ZIP, HTML/CSS/React files, or other agreed formats."],
  ["Do you provide editable/source files?", "Editable or source files can be provided if agreed before the project starts."],
  ["Can I see a preview before final payment?", "Yes. SDS can share a draft or preview before final files are delivered."],
  ["What happens if I cancel?", "Cancellation terms depend on how much work has already been completed. Advance may not be fully refundable once work begins."],
  ["How is my project tracked?", "SDS tracks projects internally through a Notion workflow from lead to delivery."],
  ["Is there a client portal?", "Not yet. The MVP uses Tally, WhatsApp, UPI, and Notion. A client portal can be added later."]
];

export const footerLinks = [
  ["Services", "#services"],
  ["Work", "#work"],
  ["Packages", "#packages"],
  ["Process", "#process"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"]
];

/* ═══════════════════════════════════════════════════════════
   PHASE 1 SPECIFIC DATA STRUCTURES
═══════════════════════════════════════════════════════════ */

export const packageMultipliers = {
  Basic: 1.0,
  Standard: 1.4,
  Premium: 2.0
};

export const paymentConfirmationChecklist = [
  "Client Name",
  "Project Code",
  "Amount Paid",
  "UPI Transaction Reference / UTR",
  "Payment Screenshot",
  "WhatsApp Number"
];

export const tallyIntakeChecklist = [
  "Name",
  "WhatsApp number",
  "Service needed",
  "Deadline",
  "Budget range",
  "Reference links/files",
  "Required output format",
  "Any special instructions"
];

export const quoteCalculatorServices = [
  {
    id: "video",
    name: "Video Editing",
    baseRange: [499, 999],
    delivery: "1–3 days",
    revisions: "1–3 revisions based on package",
    options: [
      {
        id: "length",
        label: "Video length",
        type: "select",
        choices: [
          { label: "Under 30 seconds", value: "short", add: [0, 0] },
          { label: "30–60 seconds", value: "medium", add: [300, 600] },
          { label: "1–3 minutes", value: "long", add: [800, 1500] }
        ]
      },
      {
        id: "captions",
        label: "Captions/Subtitles",
        type: "toggle",
        add: [200, 500]
      },
      {
        id: "motion",
        label: "Basic motion graphics",
        type: "toggle",
        add: [300, 800]
      },
      {
        id: "thumbnail",
        label: "Thumbnail needed",
        type: "toggle",
        add: [199, 399]
      }
    ]
  },
  {
    id: "photo",
    name: "Photo Editing",
    baseRange: [199, 499],
    delivery: "1–2 days",
    revisions: "1–3 revisions based on package",
    options: [
      {
        id: "images",
        label: "Number of images",
        type: "select",
        choices: [
          { label: "1 image", value: "one", add: [0, 0] },
          { label: "2–5 images", value: "few", add: [300, 800] },
          { label: "6–10 images", value: "many", add: [800, 1500] }
        ]
      },
      {
        id: "bgremove",
        label: "Background removal",
        type: "toggle",
        add: [100, 300]
      },
      {
        id: "poster",
        label: "Poster/thumbnail design",
        type: "toggle",
        add: [299, 699]
      },
      {
        id: "cleanup",
        label: "Product cleanup",
        type: "toggle",
        add: [199, 499]
      }
    ]
  },
  {
    id: "analytics",
    name: "Data Analytics",
    baseRange: [999, 1999],
    delivery: "2–5 days",
    revisions: "1–3 revisions based on package",
    options: [
      {
        id: "tool",
        label: "Analytics Tool",
        type: "select",
        choices: [
          { label: "Excel", value: "excel", add: [0, 0] },
          { label: "Power BI", value: "powerbi", add: [800, 2000] },
          { label: "SQL Report", value: "sql", add: [500, 1500] },
          { label: "Python/Pandas", value: "python", add: [800, 2500] }
        ]
      },
      {
        id: "datasize",
        label: "Data size",
        type: "select",
        choices: [
          { label: "Small", value: "small", add: [0, 0] },
          { label: "Medium", value: "medium", add: [500, 1500] },
          { label: "Large", value: "large", add: [1500, 4000] }
        ]
      },
      {
        id: "dashboard",
        label: "Dashboard required",
        type: "toggle",
        add: [1000, 3000]
      },
      {
        id: "documentation",
        label: "Documentation required",
        type: "toggle",
        add: [500, 1200]
      }
    ]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    baseRange: [1499, 2999],
    delivery: "3–7 days",
    revisions: "1–3 revisions based on package",
    options: [
      {
        id: "pagetype",
        label: "Page type",
        type: "select",
        choices: [
          { label: "Single section/page", value: "single", add: [0, 0] },
          { label: "Portfolio website", value: "portfolio", add: [1500, 3500] },
          { label: "Business landing page", value: "landing", add: [2500, 6000] },
          { label: "Multi-section website", value: "multi", add: [4000, 10000] }
        ]
      },
      {
        id: "contactform",
        label: "Contact form UI",
        type: "toggle",
        add: [500, 1500]
      },
      {
        id: "responsive",
        label: "Responsive polish",
        type: "toggle",
        add: [500, 1500]
      },
      {
        id: "deployment",
        label: "Deployment help",
        type: "toggle",
        add: [500, 1200]
      }
    ]
  },
  {
    id: "powerpoint",
    name: "PowerPoint Presentations",
    baseRange: [299, 799],
    delivery: "1–3 days",
    revisions: "1–3 revisions based on package",
    options: [
      {
        id: "slides",
        label: "Slide count",
        type: "select",
        choices: [
          { label: "5–7 slides", value: "small", add: [0, 0] },
          { label: "8–15 slides", value: "medium", add: [500, 1200] },
          { label: "16–25 slides", value: "large", add: [1200, 2500] }
        ]
      },
      {
        id: "infographic",
        label: "Infographic slides",
        type: "toggle",
        add: [300, 1000]
      },
      {
        id: "pitchdeck",
        label: "Pitch deck polish",
        type: "toggle",
        add: [800, 2000]
      },
      {
        id: "speakernotes",
        label: "Speaker notes",
        type: "toggle",
        add: [300, 800]
      }
    ]
  },
  {
    id: "excel",
    name: "Excel Work",
    baseRange: [299, 799],
    delivery: "1–3 days",
    revisions: "1–3 revisions based on package",
    options: [
      {
        id: "worktype",
        label: "Work type",
        type: "select",
        choices: [
          { label: "Formatting/cleanup", value: "cleanup", add: [0, 0] },
          { label: "Formulas", value: "formulas", add: [300, 1000] },
          { label: "Charts", value: "charts", add: [300, 1000] },
          { label: "Dashboard", value: "dashboard", add: [1000, 3000] }
        ]
      },
      {
        id: "datasize",
        label: "Data size",
        type: "select",
        choices: [
          { label: "Small", value: "small", add: [0, 0] },
          { label: "Medium", value: "medium", add: [500, 1000] },
          { label: "Large", value: "large", add: [1000, 3000] }
        ]
      },
      {
        id: "documentation",
        label: "Documentation required",
        type: "toggle",
        add: [300, 800]
      }
    ]
  },
  {
    id: "word",
    name: "Word Documents",
    baseRange: [199, 599],
    delivery: "1–2 days",
    revisions: "1–3 revisions based on package",
    options: [
      {
        id: "doctype",
        label: "Document type",
        type: "select",
        choices: [
          { label: "Simple formatting", value: "simple", add: [0, 0] },
          { label: "Assignment formatting", value: "assignment", add: [200, 600] },
          { label: "Project report", value: "report", add: [500, 1500] },
          { label: "Resume formatting", value: "resume", add: [300, 1000] }
        ]
      },
      {
        id: "pages",
        label: "Page count",
        type: "select",
        choices: [
          { label: "1–5 pages", value: "small", add: [0, 0] },
          { label: "6–15 pages", value: "medium", add: [300, 800] },
          { label: "16–30 pages", value: "large", add: [800, 1800] }
        ]
      },
      {
        id: "pdfready",
        label: "PDF export-ready formatting",
        type: "toggle",
        add: [199, 499]
      }
    ]
  },
  {
    id: "graphic",
    name: "Graphic Design",
    baseRange: [299, 799],
    delivery: "1–3 days",
    revisions: "1–3 revisions based on package",
    options: [
      {
        id: "type",
        label: "Design Type",
        type: "select",
        choices: [
          { label: "Poster / Banner Design", value: "poster", add: [0, 0] },
          { label: "Social Media Post Creator", value: "social", add: [100, 300] },
          { label: "Official Logo Design", value: "logo", add: [500, 1500] },
          { label: "Brand Identity Kit", value: "kit", add: [1500, 4000] }
        ]
      },
      {
        id: "source",
        label: "Editable vector files needed (.ai/.psd)",
        type: "toggle",
        add: [200, 500]
      }
    ]
  },
  {
    id: "writing",
    name: "Content Writing",
    baseRange: [199, 499],
    delivery: "1–3 days",
    revisions: "1–3 revisions based on package",
    options: [
      {
        id: "words",
        label: "Expected word count",
        type: "select",
        choices: [
          { label: "Under 500 words", value: "short", add: [0, 0] },
          { label: "500–1000 words", value: "medium", add: [200, 500] },
          { label: "1000–2000 words", value: "long", add: [500, 1200] }
        ]
      },
      {
        id: "contenttype",
        label: "Content Type",
        type: "select",
        choices: [
          { label: "Blog / SEO Article", value: "blog", add: [0, 0] },
          { label: "Ad Copy / Copywriting", value: "ad", add: [200, 400] },
          { label: "Technical Review / Academic", value: "technical", add: [300, 800] }
        ]
      },
      {
        id: "seo",
        label: "Keyword search & SEO optimization",
        type: "toggle",
        add: [150, 400]
      }
    ]
  }
];

export const demoWorkItems = [
  {
    id: "video-edit",
    title: "Video Editing Demo",
    category: "Video Editing",
    type: "Mock / Demo",
    visual: "videoMock",
    description: "Reel editing preview with a clip timeline frame, caption overlay blocks, and audio track guides."
  },
  {
    id: "photo-edit",
    title: "Photo Editing Demo",
    category: "Photo Editing",
    type: "Mock / Demo",
    visual: "photoMock",
    description: "Product photography touchup preview displaying an active before/after slider split layout."
  },
  {
    id: "data-analytics",
    title: "Data Analytics Demo",
    category: "Data Analytics",
    type: "Mock / Demo",
    visual: "dashboardMock",
    description: "Interactive data analytics preview showcasing visual KPI card grids and database charts."
  },
  {
    id: "frontend-landing",
    title: "Frontend Landing Page Demo",
    category: "Frontend Development",
    type: "Mock / Demo",
    visual: "websiteMock",
    description: "Web browser mockup preview showcasing responsive layouts, menu tags, and interactive CTA buttons."
  },
  {
    id: "ppt-deck",
    title: "PowerPoint Pitch Deck Demo",
    category: "PowerPoint Presentations",
    type: "Mock / Demo",
    visual: "pptMock",
    description: "Multi-slide presentation deck layout showing structured text cards, charts, and diagrams."
  },
  {
    id: "excel-dashboard",
    title: "Excel Dashboard Demo",
    category: "Excel Work",
    type: "Mock / Demo",
    visual: "excelMock",
    description: "Spreadsheet calculation dashboard preview with highlighted rows and formula sheets."
  },
  {
    id: "word-report",
    title: "Word Report Formatting Demo",
    category: "Word Documents",
    type: "Mock / Demo",
    visual: "wordMock",
    description: "Project documentation formatting with structured heading styles and page numbering layout."
  },
  {
    id: "social-post",
    title: "Social Media Post Demo",
    category: "Photo Editing",
    type: "Mock / Demo",
    visual: "socialMock",
    description: "Instagram square canvas template showcasing background graphics and layout guides."
  }
];
