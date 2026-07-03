const SectionHeader = ({ eyebrow, title, subtitle, centered = true }) => (
  <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
    <p className="font-syne text-[11px] font-bold uppercase tracking-[0.24em] text-brandGold">
      {eyebrow}
    </p>
    <h2 className="mt-3 font-syne text-3xl font-extrabold leading-tight text-brandNavy sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 font-dmsans text-base leading-7 text-brandMuted sm:text-lg">
        {subtitle}
      </p>
    )}
  </div>
);

const Reveal = ({ children, className = "" }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal-ready ${className}`}>
      {children}
    </div>
  );
};

const ActionLink = ({ href, children, className = "", external = false, label }) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    aria-label={label}
    className={className}
  >
    {children}
  </a>
);

const ProjectLink = ({ children, className = "" }) => (
  <ActionLink href={businessConfig.tallyUrl} external className={className}>
    {children}
  </ActionLink>
);

const WhatsAppLink = ({ message, children, className = "" }) => (
  <ActionLink href={message ? createWhatsAppUrl(message) : businessConfig.whatsappUrl} external className={className}>
    {children}
  </ActionLink>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-[1.35rem] border border-white/80 bg-white/85 px-4 py-3 shadow-soft backdrop-blur-md sm:px-6">
        <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="SanzzDream Solutions home">
          <span className="grid h-10 w-10 flex-none place-items-center rounded-2xl bg-brandBlue text-white shadow-blueGlow">
            <span className="font-syne text-lg font-extrabold">S</span>
          </span>
          <span className="truncate font-syne text-base font-extrabold tracking-tight text-brandNavy sm:text-xl">
            SanzzDream <span className="text-brandGold">Solutions</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map(([label, href]) => (
            <a key={label} href={href} className="font-dmsans text-sm font-semibold text-brandMuted transition-colors hover:text-brandBlue">
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <WhatsAppLink className="inline-flex items-center gap-2 rounded-full border border-brandBorder bg-white px-4 py-3 font-syne text-xs font-bold uppercase tracking-wider text-brandNavy transition-all hover:border-brandGold hover:text-brandGold-deep">
            <SvgIcon name="chat" className="h-4 w-4" />
            WhatsApp
          </WhatsAppLink>
          <ProjectLink className="inline-flex rounded-full bg-brandBlue px-5 py-3 font-syne text-xs font-bold uppercase tracking-wider text-white shadow-blueGlow transition-all duration-300 hover:-translate-y-0.5 hover:bg-brandBlue-deep">
            Start a Project
          </ProjectLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center rounded-full border border-brandBorder bg-white text-brandNavy lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <SvgIcon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </nav>

      <div className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.25rem] border border-brandBorder bg-white shadow-soft transition-all duration-300 lg:hidden ${open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="grid gap-1 p-3">
          {navLinks.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-dmsans text-sm font-semibold text-brandMuted hover:bg-brandSection hover:text-brandNavy">
              {label}
            </a>
          ))}
          <div className="grid gap-2 pt-2 sm:grid-cols-2">
            <WhatsAppLink className="rounded-full border border-brandBorder bg-white px-5 py-3 text-center font-syne text-xs font-bold uppercase tracking-wider text-brandNavy">
              WhatsApp
            </WhatsAppLink>
            <ProjectLink className="rounded-full bg-brandBlue px-5 py-3 text-center font-syne text-xs font-bold uppercase tracking-wider text-white shadow-blueGlow">
              Start a Project
            </ProjectLink>
          </div>
        </div>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="home" className="soft-blue-gradient relative min-h-screen overflow-hidden pb-16 pt-36 sm:pt-40 lg:pb-24 lg:pt-44">
    <div className="luxury-grid pointer-events-none absolute inset-0 opacity-75" />
    <div className="section-shell relative grid min-h-[calc(100vh-9rem)] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
      <Reveal>
        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-brandGold/35 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-brandGold" />
          <span className="font-syne text-[10px] font-bold uppercase tracking-[0.18em] text-brandMuted sm:tracking-[0.22em]">
            SDS Launch Studio . Creative . Data . Frontend
          </span>
        </div>

        <h1 className="mt-8 max-w-5xl font-syne text-4xl font-extrabold leading-[1.03] text-brandNavy sm:text-5xl md:text-6xl xl:text-7xl">
          Affordable Creative, Data & Website Services Built for Real Delivery.
        </h1>

        <p className="mt-7 max-w-3xl font-dmsans text-lg leading-8 text-brandMuted sm:text-xl">
          SanzzDream Solutions helps students, creators, startups, and local businesses get polished videos, visuals, dashboards, and frontend websites through a clear quote, 50% advance workflow, revision policy, and tracked delivery.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <ProjectLink className="inline-flex items-center justify-center gap-3 rounded-full bg-brandBlue px-7 py-4 font-syne text-sm font-bold uppercase tracking-wider text-white shadow-blueGlow transition-all duration-300 hover:-translate-y-1 hover:bg-brandBlue-deep hover:shadow-lift">
            Start a Project
            <SvgIcon name="arrow" className="h-4 w-4" />
          </ProjectLink>
          <WhatsAppLink message="Hi SDS, I want to start a project. My requirement is:" className="inline-flex items-center justify-center gap-3 rounded-full border border-brandGold/50 bg-white px-7 py-4 font-syne text-sm font-bold uppercase tracking-wider text-brandNavy shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brandGold hover:shadow-goldGlow">
            <SvgIcon name="chat" className="h-4 w-4 text-brandGold" />
            Chat on WhatsApp
          </WhatsAppLink>
        </div>

        <a href="#packages" className="mt-5 inline-flex font-dmsans text-sm font-extrabold text-brandBlue">
          View Packages
        </a>

        <div className="mt-8 flex flex-wrap gap-3">
          {heroTrustSignals.map((signal) => (
            <span key={signal} className="inline-flex items-center gap-2 rounded-full border border-brandBorder bg-white px-4 py-2 font-dmsans text-sm font-semibold text-brandMuted shadow-sm">
              <SvgIcon name="check" className="h-4 w-4 text-brandBlue" />
              {signal}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal className="lg:justify-self-end">
        <div className="console-float relative mx-auto w-full max-w-xl rounded-[2rem] border border-white bg-white/90 p-4 shadow-lift backdrop-blur sm:p-6">
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brandBlue/10 blur-2xl" />
          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-brandGold/15 blur-2xl" />
          <div className="relative">
            <div className="flex items-start justify-between gap-4 border-b border-brandBorder pb-5">
              <div>
                <p className="font-syne text-[11px] font-bold uppercase tracking-[0.22em] text-brandGold">SDS Execution Console</p>
                <h2 className="mt-1 font-syne text-2xl font-extrabold text-brandNavy">Manual MVP, serious delivery</h2>
                <p className="mt-1 font-dmsans text-sm font-semibold text-brandMuted">Website + Tally + WhatsApp + UPI + Notion.</p>
              </div>
              <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-brandBlue-soft text-brandBlue">
                <SvgIcon name="spark" className="h-6 w-6" />
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {consoleModules.map(([title, status, color], index) => (
                <div key={title} className="stagger-reveal rounded-2xl border border-brandBorder bg-white p-4 shadow-sm" style={{ transitionDelay: `${index * 60}ms` }}>
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${color === "successGreen" ? "bg-successGreen" : color === "brandGold" ? "bg-brandGold" : "bg-brandBlue"}`} />
                    <h3 className="font-syne text-sm font-extrabold text-brandNavy">{title}</h3>
                  </div>
                  <p className="mt-2 font-dmsans text-xs font-bold leading-5 text-brandMuted">{status}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-brandBorder bg-brandSection p-4">
              <p className="font-syne text-[10px] font-bold uppercase tracking-[0.2em] text-brandGold">Mini flow</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {launchFlowSteps.map((step, index) => (
                  <span key={step} className="rounded-full border border-brandBorder bg-white px-3 py-2 font-dmsans text-xs font-extrabold text-brandNavy shadow-sm">
                    {index + 1}. {step}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-brandBorder bg-white p-4">
                <p className="font-syne text-sm font-extrabold text-brandNavy">Quote checklist</p>
                <div className="mt-3 grid gap-2">
                  {quoteChecklist.slice(0, 5).map((item) => (
                    <span key={item} className="rounded-xl bg-brandSection px-3 py-2 font-dmsans text-[11px] font-bold text-brandMuted">{item}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-brandBorder bg-white p-4">
                <p className="font-syne text-sm font-extrabold text-brandNavy">Payment rule</p>
                <p className="mt-2 font-dmsans text-xs font-bold leading-5 text-brandMuted">50% advance to start. Balance before final files.</p>
                <p className="mt-3 rounded-xl border border-brandGold/30 bg-brandGold/10 px-3 py-2 font-dmsans text-[11px] font-bold text-brandGold-deep">
                  Manual confirmation
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const QuickActionStrip = () => (
  <section className="border-y border-brandBorder bg-white py-8">
    <div className="section-shell">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="font-syne text-lg font-extrabold text-brandNavy">Fast quote after requirement review.</p>
          <p className="mt-1 font-dmsans text-sm font-semibold text-brandMuted">Manual UPI or bank transfer after quote. Final price depends on scope, deadline, complexity, and revisions.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {quickActions.map((action) => (
            <ActionLink key={action.title} href={action.href} external={action.external} className="rounded-2xl border border-brandBorder bg-brandSection px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-brandBlue hover:bg-white hover:shadow-soft">
              <span className="flex items-center gap-2 font-syne text-sm font-extrabold text-brandNavy">
                <SvgIcon name={action.icon} className="h-4 w-4 text-brandBlue" />
                {action.title}
              </span>
              <span className="mt-1 block font-dmsans text-xs font-semibold leading-5 text-brandMuted">{action.description}</span>
            </ActionLink>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const [openId, setOpenId] = useState(services[0].id);

  return (
    <section id="services" className="bg-white py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeader
            eyebrow="Services"
            title="Practical Services Clients Can Buy Quickly"
            subtitle="Each service has a clear use case, starting price, timeline estimate, revision expectation, and direct WhatsApp path."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const isOpen = openId === service.id;

            return (
              <Reveal key={service.id}>
                <article className="h-full rounded-[1.75rem] border border-brandBorder bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex items-start gap-4">
                    <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-brandBlue-soft text-brandBlue">
                      <SvgIcon name={service.icon} className="h-7 w-7" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-syne text-2xl font-extrabold text-brandNavy">{service.title}</h3>
                      <p className="mt-2 font-dmsans text-sm font-bold text-brandBlue">Starting from {service.startingPrice}</p>
                    </div>
                  </div>
                  <p className="mt-5 font-dmsans text-sm leading-7 text-brandMuted">{service.gets}</p>

                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? "" : service.id)}
                    className="mt-6 flex w-full items-center justify-between rounded-2xl border border-brandBorder bg-brandSection px-4 py-3 text-left font-syne text-sm font-extrabold text-brandNavy"
                    aria-expanded={isOpen}
                  >
                    Service details
                    <span className={`grid h-8 w-8 place-items-center rounded-full bg-white text-brandBlue transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[52rem] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="grid gap-4 pt-5 sm:grid-cols-2">
                      <InfoBlock title="Who it is for" text={service.who} />
                      <InfoBlock title="Delivery estimate" text={service.delivery} />
                    </div>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <ListBlock title="Revision limit" items={service.revisions} />
                      <ListBlock title="Example use cases" items={service.useCases} />
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <ProjectLink className="inline-flex flex-1 justify-center rounded-full bg-brandBlue px-5 py-3 font-syne text-xs font-bold uppercase tracking-wider text-white shadow-blueGlow transition-all hover:-translate-y-0.5 hover:bg-brandBlue-deep">
                      {service.cta}
                    </ProjectLink>
                    <WhatsAppLink message={service.whatsapp} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-brandGold/50 bg-white px-5 py-3 font-syne text-xs font-bold uppercase tracking-wider text-brandNavy transition-all hover:-translate-y-0.5 hover:shadow-goldGlow">
                      <SvgIcon name="chat" className="h-4 w-4 text-brandGold" />
                      WhatsApp
                    </WhatsAppLink>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const InfoBlock = ({ title, text }) => (
  <div className="rounded-2xl border border-brandBorder bg-brandSection p-4">
    <p className="font-syne text-xs font-extrabold uppercase tracking-wider text-brandGold">{title}</p>
    <p className="mt-2 font-dmsans text-sm font-semibold leading-6 text-brandMuted">{text}</p>
  </div>
);

const ListBlock = ({ title, items }) => (
  <div className="rounded-2xl border border-brandBorder bg-brandSection p-4">
    <p className="font-syne text-xs font-extrabold uppercase tracking-wider text-brandGold">{title}</p>
    <ul className="mt-3 grid gap-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 font-dmsans text-sm font-semibold leading-6 text-brandMuted">
          <SvgIcon name="check" className="mt-1 h-4 w-4 flex-none text-successGreen" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Packages = () => (
  <section id="packages" className="bg-brandSection py-24">
    <div className="section-shell">
      <Reveal>
        <SectionHeader
          eyebrow="Packages"
          title="Choose a Package or Request a Custom Quote"
          subtitle="Packages give a simple starting point. Final quote depends on scope, deadline, complexity, and revisions."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {packages.map((plan) => (
          <Reveal key={plan.tier}>
            <article className={`flex h-full flex-col rounded-[1.75rem] border p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lift ${plan.highlighted ? "border-brandBlue bg-white" : "border-brandBorder bg-white"}`}>
              <p className="font-syne text-[11px] font-bold uppercase tracking-[0.22em] text-brandGold">{plan.tier}</p>
              <h3 className="mt-3 font-syne text-2xl font-extrabold text-brandNavy">{plan.title}</h3>
              <ul className="mt-6 grid gap-3">
                {plan.included.map((item) => (
                  <li key={item} className="flex gap-2 font-dmsans text-sm font-semibold text-brandMuted">
                    <SvgIcon name="check" className="h-4 w-4 flex-none text-successGreen" />
                    {item}
                  </li>
                ))}
              </ul>
              <ProjectLink className={`mt-8 inline-flex justify-center rounded-full px-5 py-3 font-syne text-xs font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 ${plan.highlighted ? "bg-brandBlue text-white shadow-blueGlow" : "border border-brandBorder bg-white text-brandNavy hover:border-brandBlue"}`}>
                {plan.cta}
              </ProjectLink>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {packageExamples.map(([title, basic, standard, premium]) => (
          <Reveal key={title}>
            <article className="rounded-[1.5rem] border border-brandBorder bg-white p-5 shadow-sm">
              <h3 className="font-syne text-lg font-extrabold text-brandNavy">{title}</h3>
              <div className="mt-4 grid gap-2">
                {[basic, standard, premium].map((line) => (
                  <p key={line} className="rounded-xl bg-brandSection px-3 py-2 font-dmsans text-sm font-semibold text-brandMuted">{line}</p>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="bg-white py-24">
    <div className="section-shell">
      <Reveal>
        <SectionHeader
          eyebrow="Process"
          title="How Your Project Moves From Idea to Delivery"
          subtitle="A simple client-friendly workflow keeps expectations, payment, revisions, and final delivery clear."
        />
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-7">
        {processSteps.map(([title, description], index) => (
          <Reveal key={title}>
            <article className="h-full rounded-[1.5rem] border border-brandBorder bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft">
              <span className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl text-white ${index === 2 || index === 5 ? "bg-successGreen" : "bg-brandBlue"}`}>
                <span className="font-syne text-base font-extrabold">{index + 1}</span>
              </span>
              <h3 className="font-syne text-lg font-extrabold leading-tight text-brandNavy">{title}</h3>
              <p className="mt-3 font-dmsans text-sm leading-6 text-brandMuted">{description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const RevisionPolicy = () => (
  <section className="bg-brandSection py-24">
    <div className="section-shell">
      <Reveal>
        <SectionHeader
          eyebrow="Revisions"
          title="Clear Revision Policy"
          subtitle="To protect both client expectations and delivery time, each package includes a fixed revision count."
        />
      </Reveal>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {revisionPolicies.map(([title, description]) => (
          <Reveal key={title}>
            <article className="h-full rounded-[1.5rem] border border-brandBorder bg-white p-6 shadow-sm">
              <h3 className="font-syne text-xl font-extrabold text-brandNavy">{title}</h3>
              <p className="mt-3 font-dmsans text-sm font-semibold leading-7 text-brandMuted">{description}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mx-auto mt-8 grid max-w-4xl gap-3">
        {revisionNotes.map((note) => (
          <p key={note} className="rounded-2xl border border-brandGold/30 bg-white px-4 py-3 font-dmsans text-sm font-bold text-brandMuted">{note}</p>
        ))}
      </div>
    </div>
  </section>
);

const PaymentSection = () => (
  <section className="bg-white py-24">
    <div className="section-shell">
      <Reveal>
        <SectionHeader
          eyebrow="Payment"
          title="50% Advance to Start. 50% Before Final Delivery."
          subtitle="SDS starts work after advance confirmation and delivers final editable, source, or high-resolution files after balance payment."
        />
      </Reveal>
      <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Work starts after 50% advance confirmation.",
              "Payment is currently manual through UPI or bank transfer.",
              "Final files are delivered after balance payment.",
              "Payment confirmation can be shared through WhatsApp or email."
            ].map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-brandBorder bg-white p-6 shadow-sm">
                <SvgIcon name="check" className="h-6 w-6 text-successGreen" />
                <p className="mt-4 font-dmsans text-sm font-bold leading-7 text-brandMuted">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <aside className="rounded-[1.75rem] border border-brandBorder bg-brandSection p-7 shadow-soft">
            <p className="font-syne text-[11px] font-bold uppercase tracking-[0.24em] text-brandGold">Payment info</p>
            <div className="mt-6 grid gap-3">
              {paymentRules.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 rounded-2xl border border-brandBorder bg-white px-4 py-3">
                  <span className="font-dmsans text-sm font-bold text-brandMuted">{label}</span>
                  <span className="max-w-[13rem] text-right font-dmsans text-sm font-extrabold text-brandNavy break-words">{value}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-2xl border border-brandGold/30 bg-brandGold/10 p-4 font-dmsans text-sm leading-6 text-brandMuted">
              No checkout page or live payment gateway is active in this MVP.
            </p>
          </aside>
        </Reveal>
      </div>
    </div>
  </section>
);

const NotionTracking = () => (
  <section className="bg-brandSection py-24">
    <div className="section-shell">
      <Reveal>
        <SectionHeader
          eyebrow="Tracking"
          title="Tracked Internally Through Notion"
          subtitle="SDS uses a structured Notion board to track each project from lead to delivery before building a full client portal."
        />
      </Reveal>
      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <div className="rounded-[1.75rem] border border-brandBorder bg-white p-6 shadow-soft">
            <div className="flex flex-wrap gap-3">
              {notionColumns.map((status) => (
                <span key={status} className="rounded-2xl border border-brandBorder bg-brandSection px-4 py-3 text-center font-dmsans text-sm font-bold text-brandNavy">
                  {status}
                </span>
              ))}
            </div>
            <div className="mt-6 grid gap-3">
              {notionPreviewCards.map(([code, type, status]) => (
                <div key={code} className="flex flex-col gap-2 rounded-2xl border border-brandBorder bg-brandSection p-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-syne text-sm font-extrabold text-brandNavy">{code} . {type}</span>
                  <span className="w-fit rounded-full bg-brandBlue-soft px-3 py-1 font-dmsans text-xs font-bold text-brandBlue">{status}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 font-dmsans text-xs font-semibold text-brandMuted">Workflow preview placeholders only. No private client data is shown.</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="rounded-[1.75rem] border border-brandBorder bg-white p-6 shadow-soft">
            <p className="font-syne text-[11px] font-bold uppercase tracking-[0.24em] text-brandGold">Project card fields</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {notionFields.map((field) => (
                <div key={field} className="flex items-center gap-3 rounded-2xl border border-brandBorder bg-white px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-brandBlue" />
                  <span className="font-dmsans text-sm font-bold text-brandMuted">{field}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const DemoVisual = ({ type }) => (
  <div className={`demo-visual ${type}`}>
    <span />
    <span />
    <span />
    <span />
  </div>
);

const Portfolio = () => (
  <section id="work" className="bg-white py-24">
    <div className="section-shell">
      <Reveal>
        <SectionHeader
          eyebrow="Demo Work"
          title="Demo Work & Sample Categories"
          subtitle="Client case studies will be added as SDS completes real projects. For now, these demo cards show the type of output available."
        />
      </Reveal>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioDemos.map((item) => (
          <Reveal key={item.title}>
            <article className="group h-full overflow-hidden rounded-[1.75rem] border border-brandBorder bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lift">
              <DemoVisual type={item.visual} />
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-brandBlue-soft px-3 py-1 font-dmsans text-[11px] font-bold text-brandBlue">{item.category}</span>
                  <span className="rounded-full border border-brandGold/40 bg-brandGold/10 px-3 py-1 font-dmsans text-[11px] font-bold text-brandGold-deep">{item.type}</span>
                </div>
                <h3 className="mt-4 font-syne text-xl font-extrabold text-brandNavy">{item.title}</h3>
                <p className="mt-3 font-dmsans text-sm leading-7 text-brandMuted">{item.description}</p>
                <ProjectLink className="mt-5 inline-flex rounded-full border border-brandBorder px-4 py-2 font-syne text-xs font-bold uppercase tracking-wider text-brandNavy transition-all hover:border-brandBlue hover:text-brandBlue">
                  Request Similar Work
                </ProjectLink>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const TimelineEstimates = () => (
  <section className="bg-brandSection py-24">
    <div className="section-shell">
      <Reveal>
        <SectionHeader eyebrow="Timelines" title="Estimated Delivery Timelines" />
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {timelineEstimates.map(([title, text]) => (
          <Reveal key={title}>
            <article className="h-full rounded-[1.5rem] border border-brandBorder bg-white p-6 shadow-sm">
              <h3 className="font-syne text-xl font-extrabold text-brandNavy">{title}</h3>
              <p className="mt-3 font-dmsans text-sm font-semibold leading-7 text-brandMuted">{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-brandGold/30 bg-white p-4 text-center font-dmsans text-sm font-bold text-brandMuted">
        Urgent delivery may be possible depending on workload and may cost extra.
      </p>
    </div>
  </section>
);

const WhyChoose = () => (
  <section className="bg-white py-24">
    <div className="section-shell">
      <Reveal>
        <SectionHeader eyebrow="Why SDS" title="Why Clients Choose SDS" />
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {whyChooseItems.map(([title, description]) => (
          <Reveal key={title}>
            <article className="h-full rounded-[1.5rem] border border-brandBorder bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft">
              <span className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-brandGold/15 text-brandGold-deep">
                <SvgIcon name="check" className="h-5 w-5" />
              </span>
              <h3 className="font-syne text-xl font-extrabold text-brandNavy">{title}</h3>
              <p className="mt-3 font-dmsans text-sm leading-7 text-brandMuted">{description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const EarlyFeedback = () => (
  <section className="bg-brandSection py-24">
    <div className="section-shell">
      <Reveal>
        <SectionHeader
          eyebrow="Early Feedback"
          title="Feedback Coming Soon"
          subtitle="No fake testimonials here. This section is ready for real feedback after completed projects."
        />
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {feedbackPlaceholders.map((text) => (
          <Reveal key={text}>
            <article className="h-full rounded-[1.5rem] border border-brandBorder bg-white p-6 shadow-sm">
              <SvgIcon name="spark" className="h-6 w-6 text-brandGold" />
              <p className="mt-4 font-dmsans text-sm font-bold leading-7 text-brandMuted">{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 text-center">
        <ActionLink href={businessConfig.emailUrl} className="inline-flex rounded-full bg-brandNavy px-6 py-3 font-syne text-xs font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-brandBlue">
          Worked with SDS? Share feedback
        </ActionLink>
      </div>
    </div>
  </section>
);

const Founder = () => (
  <section className="bg-white py-24">
    <div className="section-shell">
      <Reveal>
        <div className="grid min-w-0 items-center gap-8 rounded-[2rem] border border-brandBorder bg-white p-5 shadow-soft sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
          <div className="min-w-0 rounded-[1.75rem] bg-gradient-to-br from-brandBlue-soft via-white to-brandGold/20 p-5 sm:p-8">
            <p className="font-syne text-[11px] font-bold uppercase tracking-[0.24em] text-brandGold">Founder</p>
            <h2 className="mt-4 font-syne text-4xl font-extrabold text-brandNavy">Built by a Technical Founder</h2>
          </div>
          <div className="min-w-0">
            <p className="font-dmsans text-lg leading-8 text-brandMuted">
              SanzzDream Solutions is founded by Sanjay K, an Electronics and Communication Engineering student building at the intersection of technology, design, data, and execution.
            </p>
            <p className="mt-5 font-dmsans text-lg leading-8 text-brandMuted">
              SDS was created to help students, creators, founders, and local businesses move from idea to polished digital output without messy communication, unclear pricing, or unreliable delivery.
            </p>
            <p className="mt-5 rounded-2xl border border-brandGold/30 bg-brandGold/10 p-4 font-dmsans text-sm font-bold leading-6 text-brandMuted">
              {businessConfig.experienceLine}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {founderPrinciples.map((principle) => (
                <span key={principle} className="rounded-full border border-brandBorder bg-brandSection px-4 py-2 font-dmsans text-sm font-bold text-brandMuted">
                  {principle}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-brandSection py-24">
      <div className="section-shell max-w-5xl">
        <Reveal>
          <SectionHeader eyebrow="FAQ" title="Questions before you start?" />
        </Reveal>
        <div className="mt-12 divide-y divide-brandBorder rounded-[1.75rem] border border-brandBorder bg-white shadow-sm">
          {faqs.map(([question, answer], index) => {
            const isOpen = openIndex === index;

            return (
              <div key={question} className={isOpen ? "bg-brandSection/70" : "bg-white"}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 p-6 text-left font-syne text-base font-bold text-brandNavy sm:text-lg"
                  aria-expanded={isOpen}
                >
                  {question}
                  <span className={`grid h-8 w-8 flex-none place-items-center rounded-full bg-brandBlue-soft text-brandBlue transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`overflow-hidden px-6 transition-all duration-300 ${isOpen ? "max-h-56 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="font-dmsans leading-7 text-brandMuted">{answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section id="contact" className="relative overflow-hidden bg-white py-24">
    <div className="section-shell">
      <Reveal>
        <div className="soft-blue-gradient relative overflow-hidden rounded-[2rem] border border-white bg-white/90 p-8 text-center shadow-lift backdrop-blur sm:p-12">
          <div className="luxury-grid pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative">
            <p className="font-syne text-[11px] font-bold uppercase tracking-[0.24em] text-brandGold">Contact</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-syne text-4xl font-extrabold leading-tight text-brandNavy sm:text-5xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-dmsans text-lg leading-8 text-brandMuted">
              Share your requirement, get a clear quote, pay 50% advance, and let SDS handle the execution.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {heroTrustSignals.slice(0, 4).map((badge) => (
                <span key={badge} className="rounded-full border border-brandBorder bg-white px-4 py-2 font-dmsans text-sm font-bold text-brandMuted">{badge}</span>
              ))}
            </div>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <ProjectLink className="inline-flex items-center justify-center gap-3 rounded-full bg-brandBlue px-7 py-4 font-syne text-sm font-bold uppercase tracking-wider text-white shadow-blueGlow transition-all duration-300 hover:-translate-y-1 hover:bg-brandBlue-deep">
                Start a Project
                <SvgIcon name="arrow" className="h-4 w-4" />
              </ProjectLink>
              <WhatsAppLink message="Hi SDS, I want to start a project. My requirement is:" className="inline-flex items-center justify-center gap-3 rounded-full border border-brandGold/50 bg-white px-7 py-4 font-syne text-sm font-bold uppercase tracking-wider text-brandNavy transition-all duration-300 hover:-translate-y-1 hover:border-brandGold hover:shadow-goldGlow">
                <SvgIcon name="chat" className="h-4 w-4 text-brandGold" />
                Chat on WhatsApp
              </WhatsAppLink>
              <ActionLink href={businessConfig.emailUrl} className="inline-flex items-center justify-center gap-3 rounded-full border border-brandBorder bg-white px-7 py-4 font-syne text-sm font-bold uppercase tracking-wider text-brandNavy transition-all duration-300 hover:-translate-y-1 hover:border-brandBlue hover:text-brandBlue">
                <SvgIcon name="mail" className="h-4 w-4" />
                Email SDS
              </ActionLink>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const StickyWhatsApp = () => {
  if (!businessConfig.whatsappUrl || businessConfig.whatsappUrl === "#") return null;

  return (
    <WhatsAppLink message="Hi SDS, I want to start a project. My requirement is:" className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-successGreen px-4 py-3 font-syne text-xs font-bold uppercase tracking-wider text-white shadow-lift lg:hidden">
      <SvgIcon name="chat" className="h-4 w-4" />
      WhatsApp SDS
    </WhatsAppLink>
  );
};

const Footer = () => (
  <footer className="border-t border-brandBorder bg-white pb-24 pt-10 lg:pb-10">
    <div className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.8fr_0.8fr]">
        <div>
          <a href="#home" className="font-syne text-2xl font-extrabold text-brandNavy">
            SanzzDream <span className="text-brandGold">Solutions</span>
          </a>
          <p className="mt-2 font-dmsans text-sm font-semibold text-brandMuted">{businessConfig.tagline}</p>
          <p className="mt-3 max-w-xl font-dmsans text-sm leading-6 text-brandMuted">
            Creative, data, and frontend execution studio for students, creators, startups, and local businesses.
          </p>
          <p className="mt-3 font-dmsans text-sm font-bold text-successGreen">
            Tally intake . WhatsApp contact . 50% UPI advance . Notion tracking . Final delivery
          </p>
        </div>

        <div>
          <p className="font-syne text-sm font-extrabold uppercase tracking-wider text-brandGold">Quick links</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map(([label, href]) => (
              <a key={label} href={href} className="font-dmsans text-sm font-bold text-brandMuted transition-colors hover:text-brandBlue">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-syne text-sm font-extrabold uppercase tracking-wider text-brandGold">Contact</p>
          <div className="mt-4 grid gap-2">
            <a href={businessConfig.emailUrl} className="font-dmsans text-sm font-bold text-brandBlue">{businessConfig.email}</a>
            <WhatsAppLink className="font-dmsans text-sm font-bold text-brandMuted hover:text-brandBlue">{businessConfig.whatsappDisplay}</WhatsAppLink>
            <ProjectLink className="font-dmsans text-sm font-bold text-brandMuted hover:text-brandBlue">Start Project</ProjectLink>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-brandBorder pt-6">
        <p className="font-dmsans text-sm text-brandMuted">
          &copy; 2026 SanzzDream Solutions. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
