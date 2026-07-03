const businessConfig = {
  tallyUrl: "https://tally.so/r/pbyL18",
  email: "sanjaykaruppusamy1908@gmail.com",
  emailUrl: "mailto:sanjaykaruppusamy1908@gmail.com",
  whatsappNumber: "918939921908",
  whatsappDisplay: "+91 89399 21908",
  whatsappUrl: "https://wa.me/918939921908",
  upiId: "ksanjay0012006@okhdfcbank",
  showUpiId: false,
  advancePercentage: "50%",
  balancePercentage: "50%",
  brandName: "SanzzDream Solutions",
  shortName: "SDS",
  tagline: "Engineering Your Digital Vision.",
  experienceLine:
    "Built by a technical founder and supported by a growing execution network across creative, data, office, and frontend delivery."
};

function createWhatsAppUrl(message) {
  if (!businessConfig.whatsappNumber || businessConfig.whatsappNumber.includes("YOUR")) {
    return "#";
  }

  return `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const navLinks = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["Packages", "#packages"],
  ["Process", "#process"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"]
];

const heroTrustSignals = [
  "Fast quote",
  "50% advance",
  "Clear revision policy",
  "Delivery tracking",
  "Preview before final handoff"
];

const launchStatusChips = [
  "Tally Intake",
  "WhatsApp Contact",
  "50% Advance",
  "Notion Tracking",
  "Final Delivery"
];

const serviceStack = ["Video", "Photo", "Data", "Frontend", "PPT", "Excel", "Word"];

const heroShowcaseItems = [
  ["Video timeline", "videoMock"],
  ["PPT deck", "pptMock"],
  ["Excel dashboard", "excelMock"],
  ["Frontend website", "websiteMock"],
  ["Word report", "wordMock"],
  ["Photo before/after", "photoMock"]
];

const launchFlowSteps = ["Requirement", "Quote", "Advance", "Work", "Review", "Delivery"];

const consoleModules = [
  ["Intake", "Tally Form", "brandBlue"],
  ["Payment", "50% Advance", "successGreen"],
  ["Tracking", "Notion Board", "brandBlue"],
  ["Review", "Internal Check", "brandGold"],
  ["Delivery", "Final Files", "brandBlue"]
];

const quickActions = [
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

const services = [
  {
    id: "video",
    icon: "video",
    title: "Video Editing",
    startingPrice: "\u20B9499+",
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
    whatsapp: "Hi SDS, I need a video edit. My requirement is:"
  },
  {
    id: "photo",
    icon: "photo",
    title: "Photo Editing",
    startingPrice: "\u20B9199+",
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
    whatsapp: "Hi SDS, I need a photo edit. My requirement is:"
  },
  {
    id: "analytics",
    icon: "data",
    title: "Data Analytics",
    startingPrice: "\u20B9999+",
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
    whatsapp: "Hi SDS, I need a data analytics/dashboard project. My requirement is:"
  },
  {
    id: "frontend",
    icon: "frontend",
    title: "Frontend Development",
    startingPrice: "\u20B91499+",
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
    startingPrice: "\u20B9299+",
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
    startingPrice: "\u20B9299+",
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
    startingPrice: "\u20B9199+",
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
  }
];

const packages = [
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

const packageExamples = [
  ["Video Editing", "Basic: 1 short reel", "Standard: reel with captions + transitions", "Premium: reel package with hook, captions, effects, thumbnail"],
  ["Photo Editing", "Basic: 1 simple image edit", "Standard: poster/thumbnail/product edit", "Premium: multi-image or brand-ready visual pack"],
  ["Data Analytics", "Basic: simple Excel cleanup/report", "Standard: Excel or Power BI dashboard", "Premium: dashboard + insights + documentation"],
  ["Frontend Development", "Basic: one-section/one-page static page", "Standard: portfolio or landing page", "Premium: multi-section responsive business website"],
  ["PowerPoint", "Basic: simple 5-7 slide deck", "Standard: clean 10-15 slide presentation", "Premium: pitch-ready deck with visuals and infographics"],
  ["Excel", "Basic: formatting or simple sheet cleanup", "Standard: formulas, charts, and organized report", "Premium: dashboard with insights and documentation"],
  ["Word", "Basic: document formatting", "Standard: project report or resume formatting", "Premium: full structured report with clean layout and PDF export"]
];

const processSteps = [
  ["Submit Requirement", "Client shares service need, deadline, budget range, files, and reference links."],
  ["Receive Quote", "SDS reviews scope and sends price, delivery time, and revision limit."],
  ["Pay 50% Advance", "Work begins after manual UPI/bank confirmation."],
  ["Work Begins", "Editing, design, analytics, office, or frontend execution starts with tracked scope."],
  ["Preview & Revisions", "Client receives a draft and included revisions are handled based on package."],
  ["Pay Balance", "Client pays the remaining 50% after approval."],
  ["Final Delivery", "Final files/source/editable assets are delivered based on agreement."]
];

const revisionPolicies = [
  ["Basic", "1 revision included."],
  ["Standard", "2 revisions included."],
  ["Premium", "3 revisions included."],
  ["Extra revisions", "Chargeable based on effort and scope."]
];

const revisionNotes = [
  "Major scope changes are not counted as normal revisions.",
  "New requirements after quote may require extra cost.",
  "Revision timeline depends on project complexity."
];

const paymentRules = [
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

const notionColumns = [
  "New Lead",
  "Quoted",
  "Advance Paid",
  "Assigned",
  "In Progress",
  "Review",
  "Delivered"
];

const notionFields = [
  "Project Code",
  "Client Name",
  "Service Type",
  "Quoted Amount",
  "Advance Status",
  "Assigned Person",
  "Internal Deadline",
  "Client Deadline",
  "Revision Count",
  "File Links",
  "Final Status"
];

const notionPreviewCards = [
  ["SDS-26-001", "Video Edit", "In Progress"],
  ["SDS-26-002", "Excel Dashboard", "Review"],
  ["SDS-26-003", "Landing Page", "Quoted"]
];

const portfolioDemos = [
  {
    title: "Video Editing Demo",
    category: "Video Editing",
    type: "Mock / Demo",
    visual: "videoMock",
    description: "Reel-style timeline preview with hook frame, caption blocks, and export-ready pacing."
  },
  {
    title: "PowerPoint Pitch Deck Demo",
    category: "PowerPoint Presentations",
    type: "Mock / Demo",
    visual: "pptMock",
    description: "Clean presentation system for college, business, and startup decks."
  },
  {
    title: "Excel Dashboard Demo",
    category: "Excel Work",
    type: "Mock / Demo",
    visual: "excelMock",
    description: "Dashboard preview for reports, data cleaning, and business insights."
  },
  {
    title: "Frontend Landing Page Demo",
    category: "Frontend Development",
    type: "Mock / Demo",
    visual: "websiteMock",
    description: "Responsive landing page preview for startups and local businesses."
  },
  {
    title: "Photo Editing Demo",
    category: "Photo Editing",
    type: "Mock / Demo",
    visual: "photoMock",
    description: "Product/photo cleanup, poster, thumbnail, and social visuals."
  },
  {
    title: "Word Report Formatting Demo",
    category: "Word Documents",
    type: "Mock / Demo",
    visual: "wordMock",
    description: "Structured report, assignment, resume, and documentation formatting."
  },
  {
    title: "Social Media Post Demo",
    category: "Photo Editing",
    type: "Mock / Demo",
    visual: "socialMock",
    description: "Content visual for creators, events, and announcements."
  }
];

const timelineEstimates = [
  ["Photo Editing", "1-2 days for simple edits."],
  ["Video Editing", "1-3 days for reels, shorts, and basic promos."],
  ["Data Analytics", "2-5 days depending on data size and dashboard complexity."],
  ["Frontend Development", "3-7 days depending on page count and design complexity."],
  ["PowerPoint Presentations", "1-3 days depending on slide count and visual polish."],
  ["Excel Work", "1-3 days depending on formulas, cleanup, and report complexity."],
  ["Word Documents", "1-2 days for formatting and standard documents."]
];

const whyChooseItems = [
  ["Clear Communication", "No vague scope, no ghosting, no confusing freelancer chaos."],
  ["Affordable Starting Prices", "Built for students, creators, startups, and local businesses."],
  ["Tracked Delivery", "Projects are organized internally through Notion."],
  ["Preview Before Final Files", "Clients can review draft output before final delivery."],
  ["Clear Revision Policy", "Each package has defined revision limits."],
  ["Founder-Led Quality Check", "Work is reviewed before client handoff."],
  ["Manual MVP Now, Automation Later", "Simple workflow today, full client portal planned for future."],
  ["Creative + Technical Mix", "Video, photo, data, office, and frontend services under one execution brand."]
];

const feedbackPlaceholders = [
  "Client feedback will be added after completed projects.",
  "Demo project feedback can be added here.",
  "Early collaborators and users can share feedback here."
];

const founderPrinciples = [
  "Start simple",
  "Communicate clearly",
  "Keep scope clean",
  "Track execution",
  "Review before delivery",
  "Build trust before automation"
];

const quoteChecklist = [
  "Name",
  "WhatsApp number",
  "Service needed",
  "Deadline",
  "Budget range",
  "Reference links/files",
  "Required output format"
];

const faqs = [
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

const footerLinks = [
  ["Services", "#services"],
  ["Work", "#work"],
  ["Packages", "#packages"],
  ["Process", "#process"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"]
];
