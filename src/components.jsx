import React, { useState, useEffect, useRef } from "react";
import SvgIcon from "./icons.jsx";
import { useReveal } from "./hooks.jsx";
import {
  businessConfig,
  createWhatsAppUrl,
  navLinks,
  launchStatusChips,
  serviceStack,
  quickActions,
  services,
  packages,
  packageExamples,
  processSteps,
  revisionPolicies,
  paymentRules,
  notionColumns,
  notionPreviewCards,
  timelineEstimates,
  whyChooseItems,
  founderPrinciples,
  faqs,
  footerLinks,
  packageMultipliers,
  paymentConfirmationChecklist,
  tallyIntakeChecklist,
  quoteCalculatorServices,
  demoWorkItems
} from "./data.js";

/* ─── Floating Particle Canvas ───────────────────────────────── */
const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.r = Math.random() * 2.5 + 0.5;
        this.alpha = Math.random() * 0.45 + 0.15;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.color = Math.random() > 0.5 ? "201,162,39" : "0,119,255"; // Gold or Blue
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
        ctx.fill();
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle());

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56,189,248,${0.09 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(loop);
    };
    loop();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

/* ─── Typewriter Hook ─────────────────────────────────────────── */
function useTypewriter(words, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx % words.length];
    let timeout;
    if (!deleting && charIdx <= word.length) {
      timeout = setTimeout(() => {
        setDisplay(word.slice(0, charIdx));
        setCharIdx(c => c + 1);
      }, speed);
    } else if (!deleting && charIdx > word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplay(word.slice(0, charIdx));
        setCharIdx(c => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(w => (w + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

/* ─── Animated Counter ────────────────────────────────────────── */
function useCounter(target, duration = 1800, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (now) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setVal(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return val;
}

const StatCounter = ({ value, label, suffix = "+" }) => {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const count = useCounter(value, 1600, started);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="stat-counter-block">
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

/* ─── Shared Primitives ───────────────────────────────────────── */
const SectionHeader = ({ eyebrow, title, subtitle, centered = false, light = true }) => (
  <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
    <p className={`section-eyebrow ${light ? "text-brandGold" : "text-brandGold-deep"}`}>
      {eyebrow}
    </p>
    <h2 className={`section-title ${light ? "text-white" : "text-brandNavy"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`section-subtitle ${light ? "text-white/70" : "text-brandMuted"}`}>
        {subtitle}
      </p>
    )}
  </div>
);

const Reveal = ({ children, className = "" }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal-ready min-w-0 ${className}`}>
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

/* ─── DEMO WORKS PREVIEWS (High fidelity distinct visual outputs) ── */
const DemoWorkVisual = ({ type }) => {
  if (type === "videoMock") {
    return (
      <div className="demo-preview-canvas video-canvas">
        <div className="video-timeline-frame">
          <div className="video-play-head" />
          <div className="video-frame-indicator">0:14 / 1:00</div>
        </div>
        <div className="video-subtitle-bar">
          <div className="subtitle-word highlight">Engineering</div>
          <div className="subtitle-word">Your</div>
          <div className="subtitle-word highlight">Digital</div>
          <div className="subtitle-word">Vision</div>
        </div>
        <div className="video-timeline-tracks">
          <div className="video-track track-video"><span /><span /><span /></div>
          <div className="video-track track-audio"><span /></div>
        </div>
      </div>
    );
  }

  if (type === "photoMock") {
    return (
      <div className="demo-preview-canvas photo-canvas">
        <div className="photo-split-layout">
          <div className="photo-side photo-before">
            <span className="photo-badge">BEFORE</span>
            <div className="photo-pattern raw" />
          </div>
          <div className="photo-split-divider">
            <span className="split-handle" />
          </div>
          <div className="photo-side photo-after">
            <span className="photo-badge text-white">AFTER</span>
            <div className="photo-pattern polished" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "dashboardMock") {
    return (
      <div className="demo-preview-canvas dashboard-canvas">
        <div className="dashboard-grid-widgets">
          <div className="dashboard-widget kpi-card">
            <span>Revenues</span>
            <strong>₹84,500</strong>
          </div>
          <div className="dashboard-widget kpi-card">
            <span>Conversion</span>
            <strong>12.4%</strong>
          </div>
          <div className="dashboard-widget kpi-card">
            <span>Projects</span>
            <strong>42</strong>
          </div>
        </div>
        <div className="dashboard-chart-preview">
          <div className="chart-bar-col h-1/3" />
          <div className="chart-bar-col h-2/3" />
          <div className="chart-bar-col h-1/2" />
          <div className="chart-bar-col h-5/6" />
          <div className="chart-bar-col h-3/4" />
        </div>
      </div>
    );
  }

  if (type === "websiteMock") {
    return (
      <div className="demo-preview-canvas browser-canvas">
        <div className="browser-header-strip">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
          <div className="browser-url-bar">sanzzdream.com</div>
        </div>
        <div className="browser-hero-section">
          <div className="browser-mock-nav"><span /><span /></div>
          <div className="browser-hero-text">
            <div className="mock-title-line" />
            <div className="mock-sub-line" />
          </div>
          <div className="browser-mock-cta" />
        </div>
      </div>
    );
  }

  if (type === "pptMock") {
    return (
      <div className="demo-preview-canvas ppt-canvas">
        <div className="ppt-slide-stack">
          <div className="ppt-slide slide-bg-back" />
          <div className="ppt-slide slide-bg-mid" />
          <div className="ppt-slide slide-bg-front">
            <div className="ppt-slide-header">
              <span className="ppt-logo">SDS</span>
              <span className="ppt-title text-[#ffffff]">MARKET GROWTH</span>
            </div>
            <div className="ppt-slide-content">
              <div className="ppt-text-box"><span /><span /><span /></div>
              <div className="ppt-circle-diagram"><span /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "excelMock") {
    return (
      <div className="demo-preview-canvas excel-canvas">
        <div className="excel-formula-strip">
          <div className="formula-cell text-white/50">fx</div>
          <div className="formula-text text-white">=SUM(C2:C10) * multiplier</div>
        </div>
        <div className="excel-table-grid">
          <div className="excel-row header"><span /><span /><span /></div>
          <div className="excel-row"><span /><span className="bg-white/10" /><span /></div>
          <div className="excel-row"><span /><span /><span /></div>
          <div className="excel-row highlight"><span /><span>TOTAL</span><span className="font-bold text-white">₹1,49,00</span></div>
        </div>
      </div>
    );
  }

  if (type === "wordMock") {
    return (
      <div className="demo-preview-canvas word-canvas">
        <div className="word-paper-page">
          <div className="word-heading-1 text-white">1. Executive Summary</div>
          <div className="word-body-paragraph"><span /><span /><span /></div>
          <div className="word-heading-2 text-white/70">1.1 Project Objectives</div>
          <div className="word-body-paragraph"><span /><span /></div>
          <div className="word-footer text-white/30">Page 1 of 12</div>
        </div>
      </div>
    );
  }

  if (type === "socialMock") {
    return (
      <div className="demo-preview-canvas social-canvas">
        <div className="social-post-card">
          <div className="social-post-graphic">
            <div className="graphic-badge">50% OFF</div>
            <div className="graphic-title">CREATIVE<br />STUDIO</div>
          </div>
          <div className="social-post-footer">
            <div className="social-action-dots"><span /><span /><span /></div>
            <div className="social-text-placeholder" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="demo-preview-canvas default-canvas">
      <span className="h-2 w-2 rounded-full bg-brandBlue" />
    </div>
  );
};

/* ─── LAUNCH SCREEN (PREMIUM CINEMATIC DARK MODE) ─────────────── */
export const LaunchScreen = ({ onEnter, exiting }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={`launch-screen ${exiting ? "is-exiting" : ""} ${loaded ? "is-loaded" : ""}`} aria-label="SDS launch screen">
      <ParticleCanvas />

      {/* Deep glowing color drifts */}
      <div className="launch-orb launch-orb-1" />
      <div className="launch-orb launch-orb-2" />
      <div className="launch-orb launch-orb-3" />

      <div className="launch-grid" />

      {/* Drifting glassy panels */}
      <div className="launch-geo launch-geo-1" />
      <div className="launch-geo launch-geo-2" />
      <div className="launch-geo launch-geo-3" />

      <div className="launch-shell justify-center text-center">
        <div className="launch-copy mx-auto flex flex-col items-center">
          <div className="launch-badge mx-auto">
            <span className="launch-badge-dot" />
            <span>SDS Execution Studio — Est. 2026</span>
          </div>

          <h1 className="launch-headline text-center">
            <span className="launch-headline-line1 text-center block">SanzzDream</span>
            <span className="launch-headline-line2 text-center block">Solutions</span>
          </h1>

          <p className="launch-tagline text-center text-white/70">
            Engineering Your Digital Vision.
          </p>

          <div className="launch-pill-row justify-center">
            {serviceStack.map((s, i) => (
              <span key={s} className="launch-pill" style={{ animationDelay: `${600 + i * 80}ms` }}>
                {s}
              </span>
            ))}
          </div>

          <div className="launch-actions justify-center">
            <button
              type="button"
              onClick={onEnter}
              className="launch-btn-primary"
            >
              <span>Enter SDS</span>
              <span className="launch-btn-icon">
                <SvgIcon name="arrow" className="h-5 w-5" />
              </span>
            </button>
            <ProjectLink className="launch-btn-secondary">
              Start a Project
              <SvgIcon name="spark" className="h-4 w-4 text-brandGold" />
            </ProjectLink>
          </div>

          <p className="launch-microtrust text-center text-white/40">
            Clear quote · 50% advance · Tracked delivery · Preview before handoff
          </p>
        </div>
      </div>
    </section>
  );
};

export const Navbar = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="navbar-inner">
        <a href="#home" className="navbar-brand" aria-label="SanzzDream Solutions home">
          <span className="navbar-logo">S</span>
          <span className="navbar-brand-name">SanzzDream Solutions</span>
        </a>

        <div className="navbar-links">
          {navLinks.map(([label, href]) => (
            <a key={label} href={href} className="navbar-link">{label}</a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <SvgIcon name={theme === "dark" ? "sun" : "moon"} className="h-5 w-5" />
          </button>

          <ProjectLink className="navbar-cta">
            Start Project
          </ProjectLink>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="navbar-hamburger"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <SvgIcon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <div className={`navbar-mobile ${open ? "is-open" : ""}`}>
        {navLinks.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)} className="navbar-mobile-link">{label}</a>
        ))}
        <div className="flex items-center justify-between px-4 py-3 border-t border-white/5 mt-2">
          <span className="font-syne text-xs font-bold uppercase tracking-wider navbar-theme-mobile-label">Theme</span>
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <SvgIcon name={theme === "dark" ? "sun" : "moon"} className="h-5 w-5" />
          </button>
        </div>
        <ProjectLink className="navbar-mobile-cta">Start Project</ProjectLink>
      </div>
    </header>
  );
};

/* ─── HERO ───────────────────────────────────────────────────── */
export const Hero = () => {
  const typeText = useTypewriter(["Real Delivery.", "Fast Execution.", "Clear Quotes.", "Zero Guesswork."]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid" />
      <div className="hero-orb hero-orb-blue" />
      <div className="hero-orb hero-orb-gold" />

      <div className="section-shell relative z-10">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            SDS Execution Studio
          </div>

          <h1 className="hero-headline text-white">
            Creative, Data &amp; Website<br />
            Services for{" "}
            <span className="hero-typewriter">
              {typeText}
              <span className="hero-cursor" />
            </span>
          </h1>

          <p className="hero-sub text-white/60">
            SDS turns raw requirements into polished videos, visuals, dashboards, presentations, documents, and websites — through a clear quote, 50% advance workflow, and tracked delivery.
          </p>

          {/* Stat counters */}
          <div className="hero-stats">
            <StatCounter value={7} label="Services" suffix="" />
            <div className="hero-stat-divider" />
            <StatCounter value={3} label="Packages" suffix="" />
            <div className="hero-stat-divider" />
            <StatCounter value={50} label="% Advance" suffix="%" />
            <div className="hero-stat-divider" />
            <StatCounter value={7} label="Day Max Delivery" suffix="" />
          </div>

          <div className="hero-actions">
            <ProjectLink className="btn-primary">
              Start a Project
              <SvgIcon name="arrow" className="h-4 w-4" />
            </ProjectLink>
            <WhatsAppLink message="Hi SDS, I want to start a project. My requirement is:" className="btn-secondary">
              <SvgIcon name="chat" className="h-4 w-4" />
              WhatsApp SDS
            </WhatsAppLink>
            <a href="#work" className="btn-ghost">
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── QUICK CONTACT STRIP ─────────────────────────────────────── */
export const QuickActionStrip = () => (
  <section className="quick-strip border-t border-white/5">
    <div className="section-shell">
      <div className="quick-strip-inner border-white/10">
        <div>
          <p className="quick-strip-title text-white">Clear quote. Manual payment. Tracked delivery.</p>
          <p className="quick-strip-sub text-white/50">Final price depends on scope, deadline, complexity, and revisions.</p>
        </div>
        <div className="quick-strip-actions">
          {quickActions.map((action) => (
            <ActionLink key={action.title} href={action.href} external={action.external} className="btn-outline-sm">
              {action.title}
            </ActionLink>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── SELECTED DEMO WORK SHOWCASE (FEATURE 3) ─────────────────── */
export const DemoWorkShowcase = () => (
  <section id="work" className="bg-brandNavy py-28 relative border-t border-white/5">
    <div className="section-shell">
      <Reveal>
        <SectionHeader
          eyebrow="Work Preview"
          title="Selected Demo Work"
          subtitle="Real client case studies will be added after completed projects. These mock demos show the type of output SDS can deliver."
          light={true}
        />
      </Reveal>
      <div className="portfolio-grid mt-16">
        {demoWorkItems.map((item, index) => (
          <Reveal key={item.id} className={index === 0 ? "portfolio-featured" : ""}>
            <article className="work-card">
              <DemoWorkVisual type={item.visual} />
              <div className="work-card-copy">
                <div className="flex flex-wrap gap-2 items-center justify-between">
                  <span className="badge-demo">{item.type}</span>
                  <span className="badge-category text-white/60">{item.category}</span>
                </div>
                <h3 className="mt-3 font-syne text-xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2 font-dmsans text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <WhatsAppLink
                    message={`Hi SDS, I saw your ${item.title}. I would like to request similar work. My requirement details are:`}
                    className="inline-flex items-center gap-2 font-syne text-xs font-bold uppercase tracking-wider text-[#38bdf8] hover:text-white"
                  >
                    Request Similar Work
                    <SvgIcon name="arrow" className="h-3 w-3" />
                  </WhatsAppLink>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SERVICES ───────────────────────────────────────────────── */
export const Services = () => {
  const [openId, setOpenId] = useState(services[0].id);
  const active = services.find((service) => service.id === openId) || services[0];

  return (
    <section id="services" className="bg-brandNavy py-28 relative border-t border-white/5">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <div className="sticky top-28">
              <SectionHeader
                eyebrow="Services"
                title="Services Built for Fast Digital Execution"
                subtitle="Seven practical services, clear starting prices, and a workflow designed for students, creators, founders, and local businesses."
                light={true}
              />
              <ProjectLink className="btn-primary mt-8 inline-flex">
                Start a Project
              </ProjectLink>
            </div>
          </Reveal>

          <Reveal>
            <div className="service-accordion">
              {services.map((service) => {
                const isOpen = service.id === active.id;
                return (
                  <article key={service.id} className={`service-row ${isOpen ? "is-open" : ""}`}>
                    <button type="button" onClick={() => setOpenId(service.id)} aria-expanded={isOpen}>
                      <span className="service-icon-wrap">
                        <SvgIcon name={service.icon} className="h-5 w-5" />
                      </span>
                      <span className="flex-1 text-white">{service.title}</span>
                      <span className="service-price text-white/50">{service.startingPrice}</span>
                      <span className="service-plus text-white">{isOpen ? "−" : "+"}</span>
                    </button>
                    <div className="service-detail">
                      <p className="font-dmsans text-base leading-8 text-white/60">{service.gets}</p>
                      <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="info-block">
                          <p className="info-block-label">Who it is for</p>
                          <p className="info-block-text">{service.who}</p>
                        </div>
                        <div className="info-block">
                          <p className="info-block-label">Delivery estimate</p>
                          <p className="info-block-text">{service.delivery}</p>
                        </div>
                      </div>
                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        <div className="info-block">
                          <p className="info-block-label">Revision limit</p>
                          <ul className="mt-3 grid gap-2">
                            {service.revisions.map((rev) => (
                              <li key={rev} className="flex gap-2 font-dmsans text-sm font-medium leading-6 text-white/55">
                                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brandBlue" />
                                {rev}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="info-block">
                          <p className="info-block-label">Example use cases</p>
                          <ul className="mt-3 grid gap-2">
                            {service.useCases.map((uc) => (
                              <li key={uc} className="flex gap-2 font-dmsans text-sm font-medium leading-6 text-white/55">
                                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brandBlue" />
                                {uc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <ProjectLink className="btn-primary-sm">Start Project</ProjectLink>
                        <WhatsAppLink message={service.whatsapp} className="btn-outline-sm">WhatsApp Quote</WhatsAppLink>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ─── ESTIMATE YOUR PROJECT COST (FEATURE 1 & 2) ──────────────── */
export const QuoteCalculator = () => {
  const [selectedServiceId, setSelectedServiceId] = useState("video");
  const [selectedPkg, setSelectedPkg] = useState("Standard");
  const [isExpress, setIsExpress] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});

  const activeService = quoteCalculatorServices.find(s => s.id === selectedServiceId) || quoteCalculatorServices[0];

  useEffect(() => {
    const defaultOpts = {};
    activeService.options.forEach(opt => {
      if (opt.type === "select") {
        defaultOpts[opt.id] = opt.choices[0].value;
      } else if (opt.type === "toggle") {
        defaultOpts[opt.id] = false;
      }
    });
    setSelectedOptions(defaultOpts);
  }, [selectedServiceId]);

  const handleSelectChange = (optId, value) => {
    setSelectedOptions(prev => ({ ...prev, [optId]: value }));
  };

  const handleToggleChange = (optId, checked) => {
    setSelectedOptions(prev => ({ ...prev, [optId]: checked }));
  };

  let baseMin = activeService.baseRange[0];
  let baseMax = activeService.baseRange[1];

  let addMin = 0;
  let addMax = 0;

  activeService.options.forEach(opt => {
    const val = selectedOptions[opt.id];
    if (opt.type === "select") {
      const choice = opt.choices.find(c => c.value === val);
      if (choice) {
        addMin += choice.add[0];
        addMax += choice.add[1];
      }
    } else if (opt.type === "toggle") {
      if (val === true) {
        addMin += opt.add[0];
        addMax += opt.add[1];
      }
    }
  });

  let totalMin = baseMin + addMin;
  let totalMax = baseMax + addMax;

  const multiplier = packageMultipliers[selectedPkg] || 1.0;
  totalMin *= multiplier;
  totalMax *= multiplier;

  if (isExpress) {
    totalMin *= 1.3;
    totalMax *= 1.3;
  }

  const roundPrice = (num) => {
    if (num < 1000) return Math.round(num / 50) * 50;
    return Math.round(num / 100) * 100;
  };

  const finalMin = roundPrice(totalMin);
  const finalMax = roundPrice(totalMax);

  const buildQuoteMessage = () => {
    let optionsText = "";
    activeService.options.forEach(opt => {
      const val = selectedOptions[opt.id];
      if (opt.type === "select") {
        const choice = opt.choices.find(c => c.value === val);
        if (choice) {
          optionsText += `\n- ${opt.label}: ${choice.label}`;
        }
      } else if (opt.type === "toggle" && val === true) {
        optionsText += `\n- ${opt.label}: Yes`;
      }
    });

    const msg = `Hi SDS, I need a project quote.

Service: ${activeService.name}
Package: ${selectedPkg}
Selected Options:${optionsText || "\n- None"}
Timeline: ${isExpress ? "Express Delivery (30% priority surcharge)" : "Normal Timeline"}
Estimated Price Range: ₹${finalMin} – ₹${finalMax}
Estimated Delivery: ${activeService.delivery}
Revision Expectation: ${activeService.revisions}

My requirement:
[Please type your file details and references here]

Please confirm the final quote.`;
    return msg;
  };

  const whatsappMessage = buildQuoteMessage();

  return (
    <section id="quote-calculator" className="bg-brandNavy py-28 border-t border-white/5">
      <div className="section-shell">
        <Reveal>
          <SectionHeader
            eyebrow="Quote Estimate"
            title="Estimate Your Project Cost"
            subtitle="Choose your service and requirements to get an instant estimated price range. Final quote is confirmed after SDS reviews your requirement."
            centered={true}
            light={true}
          />
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          {/* Controls Box */}
          <Reveal className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 shadow-2xl backdrop-blur-md">
            <h3 className="font-syne text-xl font-bold text-white mb-6">1. Configure Requirements</h3>
            <div className="grid gap-6">
              {/* Service Select */}
              <div>
                <label htmlFor="calc-service" className="block font-syne text-xs font-bold uppercase tracking-wider text-white/50 mb-2">
                  Select Service
                </label>
                <select
                  id="calc-service"
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full bg-[#161922] border border-white/10 rounded-xl px-4 py-3 font-dmsans text-sm text-white focus:outline-none focus:border-[#0077ff]"
                >
                  {quoteCalculatorServices.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>

              {/* Dynamic Service Options */}
              <div className="border-t border-white/10 pt-6 grid gap-5">
                {activeService.options.map(opt => (
                  <div key={opt.id}>
                    {opt.type === "select" ? (
                      <div>
                        <label htmlFor={`calc-opt-${opt.id}`} className="block font-syne text-xs font-bold uppercase tracking-wider text-white/50 mb-2">
                          {opt.label}
                        </label>
                        <select
                          id={`calc-opt-${opt.id}`}
                          value={selectedOptions[opt.id] || ""}
                          onChange={(e) => handleSelectChange(opt.id, e.target.value)}
                          className="w-full bg-[#161922] border border-white/10 rounded-xl px-4 py-3 font-dmsans text-sm text-white focus:outline-none focus:border-[#0077ff]"
                        >
                          {opt.choices.map(c => (
                            <option key={c.value} value={c.value}>{c.label}</option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      <label className="flex items-center gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={selectedOptions[opt.id] || false}
                          onChange={(e) => handleToggleChange(opt.id, e.target.checked)}
                          className="h-5 w-5 rounded border-white/10 bg-[#161922] text-[#0077ff] focus:ring-0 cursor-pointer"
                        />
                        <span className="font-dmsans text-sm font-semibold text-white">{opt.label}</span>
                      </label>
                    )}
                  </div>
                ))}
              </div>

              {/* Package Selector */}
              <div className="border-t border-white/10 pt-6">
                <label className="block font-syne text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
                  Select Package Tier
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Basic", "Standard", "Premium"].map(tier => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setSelectedPkg(tier)}
                      className={`py-3 px-4 rounded-xl border text-center font-syne text-xs font-bold uppercase tracking-wider transition-all ${selectedPkg === tier ? "bg-[#0077ff] border-[#0077ff] text-white" : "bg-[#161922] border-white/10 text-white/60 hover:border-white"}`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Toggle */}
              <div className="border-t border-white/10 pt-6">
                <label className="flex items-center justify-between gap-3 cursor-pointer select-none bg-[#161922] border border-white/10 rounded-xl p-4">
                  <div>
                    <span className="block font-syne text-xs font-bold uppercase tracking-wider text-white">Express Delivery</span>
                    <span className="block font-dmsans text-xs text-white/50 mt-1">Priority planning (+30% surcharge)</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={isExpress}
                    onChange={(e) => setIsExpress(e.target.checked)}
                    className="h-5 w-5 rounded border-white/10 bg-[#161922] text-[#0077ff] focus:ring-0 cursor-pointer"
                  />
                </label>
              </div>
            </div>
          </Reveal>

          {/* Estimates Card */}
          <Reveal className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 shadow-2xl backdrop-blur-md lg:sticky lg:top-28">
            <h3 className="font-syne text-xl font-bold text-white mb-6">2. Quote Summary</h3>

            {/* Price Output */}
            <div className="bg-[#161922] rounded-2xl p-6 text-center border border-white/10 mb-6">
              <span className="block font-syne text-xs font-bold uppercase tracking-widest text-white/50">Estimated Cost</span>
              <strong className="block font-syne text-4xl text-white tracking-tight mt-2">
                ₹{finalMin} – ₹{finalMax}
              </strong>
            </div>

            <div className="grid gap-4 mb-8">
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="font-dmsans text-sm text-white/50">Service</span>
                <span className="font-syne text-sm font-bold text-white">{activeService.name}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="font-dmsans text-sm text-white/50">Tier</span>
                <span className="font-syne text-sm font-bold text-[#38bdf8]">{selectedPkg}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="font-dmsans text-sm text-white/50">Est. Timeline</span>
                <span className="font-syne text-sm font-bold text-white">{isExpress ? "Priority (Express)" : activeService.delivery}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="font-dmsans text-sm text-white/50">Revisions limit</span>
                <span className="font-syne text-sm font-bold text-brandGold">{activeService.revisions}</span>
              </div>
            </div>

            <p className="font-dmsans text-[11px] text-white/40 leading-relaxed mb-6">
              * This is an estimate. Final quote depends on scope, deadline, file quality, complexity, and revision count.
            </p>

            <div className="grid gap-3">
              <WhatsAppLink message={whatsappMessage} className="btn-primary flex items-center justify-center gap-2">
                <SvgIcon name="chat" className="h-4 w-4" />
                Send Estimate on WhatsApp
              </WhatsAppLink>
              <ProjectLink className="btn-secondary flex items-center justify-center gap-2 text-white border-white/20">
                Start Project Form
              </ProjectLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ─── PACKAGES ───────────────────────────────────────────────── */
export const Packages = () => (
  <section id="packages" className="bg-brandNavy py-28 border-t border-white/5 relative">
    <div className="section-shell">
      <Reveal>
        <SectionHeader
          eyebrow="Packages"
          title="Choose a Package or Request a Custom Quote"
          subtitle="Simple tiers keep scope, revisions, and delivery expectations clear. Final quote still depends on actual requirements."
          centered
          light={true}
        />
      </Reveal>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {packages.map((plan) => (
          <Reveal key={plan.tier}>
            <article className={`pricing-card bg-white/5 border-white/10 text-white ${plan.highlighted ? "is-featured" : ""}`}>
              {plan.highlighted && <div className="pricing-glow-border" />}
              <p className="pricing-tier">{plan.tier}</p>
              <h3 className="pricing-title text-white">{plan.title}</h3>
              <ul className="mt-8 grid gap-4">
                {plan.included.map((item) => (
                  <li key={item} className="flex gap-3 font-dmsans text-sm font-medium text-white/60">
                    <SvgIcon name="check" className="h-4 w-4 flex-none text-successGreen" />
                    {item}
                  </li>
                ))}
              </ul>
              <ProjectLink className={`pricing-cta ${plan.highlighted ? "pricing-cta-featured" : "pricing-cta-normal text-white border-white/20 hover:border-white"}`}>
                {plan.cta}
              </ProjectLink>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {packageExamples.map(([title, basic, standard, premium]) => (
          <Reveal key={title}>
            <article className="pkg-example-card bg-white/5 border-white/10">
              <h3 className="font-syne text-lg font-bold tracking-[-0.03em] text-white">{title}</h3>
              <div className="mt-4 grid gap-2">
                {[basic, standard, premium].map((line) => (
                  <p key={line} className="rounded-full bg-white/5 border border-white/10 px-4 py-2 font-dmsans text-xs font-semibold text-white/60">{line}</p>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── PROCESS ────────────────────────────────────────────────── */
export const Process = () => (
  <section id="process" className="bg-brandNavy py-28 border-t border-white/5 relative">
    <div className="section-shell">
      <Reveal>
        <SectionHeader
          eyebrow="Process"
          title="From Requirement to Final Delivery"
          subtitle="A straightforward operating rhythm for quotes, payment, previews, revisions, and final handoff."
          light={true}
        />
      </Reveal>
      <div className="mt-16 grid gap-1">
        {processSteps.map(([title, description], index) => (
          <Reveal key={title}>
            <article className="process-step border-white/10">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-white">{title}</h3>
              <p className="text-white/60">{description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── REVISION POLICY ────────────────────────────────────────── */
export const RevisionPolicy = () => (
  <section className="bg-brandNavy py-24 border-t border-white/5 relative">
    <div className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <Reveal>
          <SectionHeader
            eyebrow="Revisions"
            title="Clear Revision Policy"
            subtitle="Each tier includes a defined revision count. Scope changes are quoted separately so expectations stay clean."
            light={true}
          />
        </Reveal>
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {revisionPolicies.map(([title, description]) => (
              <article key={title} className="revision-card bg-white/5 border-white/10">
                <h3 className="font-syne text-2xl font-bold tracking-[-0.04em] text-white">{title}</h3>
                <p className="mt-3 font-dmsans text-sm font-medium leading-7 text-white/60">{description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ─── PAYMENT & PAYMENT CONFIRMATION CTA (FEATURE 4) ─────────── */
export const PaymentSection = () => {
  const isUrlReal = businessConfig.paymentConfirmationUrl && businessConfig.paymentConfirmationUrl !== "#";

  return (
    <section className="bg-brandNavy py-28 border-t border-white/5 relative">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-start">
          <Reveal>
            <div>
              <p className="section-eyebrow text-brandGold">Payment</p>
              <h2 className="mt-4 font-syne text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.98] tracking-[-0.05em] text-white">
                50% Advance to Start. Balance Before Final Files.
              </h2>
              <p className="mt-6 max-w-2xl font-dmsans text-lg leading-8 text-white/60">
                Manual payment keeps the MVP simple: advance confirms commitment, balance unlocks final delivery, and UPI/bank details are shared after quote confirmation.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <aside className="payment-card bg-white/5 border-white/10 text-white">
              <p className="font-syne text-[11px] font-bold uppercase tracking-[0.24em] text-brandGold">Payment rules</p>
              <div className="mt-7 grid gap-3">
                {paymentRules.map(([label, value]) => (
                  <div key={label} className="payment-row border-white/5 bg-white/[0.03]">
                    <span className="payment-row-label text-white/50">{label}</span>
                    <span className="payment-row-value text-white">{value}</span>
                  </div>
                ))}
              </div>
              <p className="payment-note text-white/70">
                No online checkout or payment gateway is active in this MVP.
              </p>
            </aside>
          </Reveal>
        </div>

        {/* Payment Confirmation Widget */}
        <Reveal className="mt-16 bg-white/5 border border-white/10 rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-12 shadow-2xl backdrop-blur-md">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] items-center">
            <div>
              <h3 className="font-syne text-2xl font-bold text-white">Submit Payment Confirmation</h3>
              <p className="font-dmsans text-sm text-white/60 leading-relaxed mt-3">
                After making your UPI or bank transfer payment, please share your confirmation details. This allows us to manually verify your transaction and update your Notion tracking card to "Advance Paid" instantly.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {isUrlReal ? (
                  <ActionLink href={businessConfig.paymentConfirmationUrl} external={true} className="btn-primary inline-flex justify-center">
                    Submit Payment Confirmation Form
                  </ActionLink>
                ) : (
                  <button type="button" disabled={true} className="inline-flex justify-center rounded-full bg-white/5 border border-white/10 px-6 py-3 font-syne text-xs font-bold uppercase tracking-wider text-white/30 cursor-not-allowed">
                    Payment confirmation form coming soon
                  </button>
                )}
                <WhatsAppLink message="Hi SDS, I have completed the transfer. Here is my payment info:" className="btn-outline inline-flex justify-center text-white border-white/20 hover:border-white">
                  Share Confirmation via WhatsApp
                </WhatsAppLink>
              </div>
            </div>

            <div className="bg-[#161922] border border-white/10 rounded-2xl p-6">
              <span className="block font-syne text-xs font-bold uppercase tracking-wider text-brandGold mb-4">
                Recommended Confirmation Checklist
              </span>
              <ul className="grid gap-2 text-sm text-white/60">
                {paymentConfirmationChecklist.map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#0077ff] flex-shrink-0" />
                    <span className="font-dmsans font-semibold text-white">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 pt-3 border-t border-white/10 font-dmsans text-[11px] text-white/40 leading-relaxed">
                Note: Screenshot attachments can be uploaded in the confirmation form or sent directly to our WhatsApp thread.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ─── NOTION TRACKING (READ ONLY VISUALS ONLY) ────────────────── */
export const NotionTracking = () => (
  <section className="bg-brandNavy py-28 border-t border-white/5 relative">
    <div className="section-shell">
      <Reveal>
        <SectionHeader
          eyebrow="Tracking"
          title="Tracked Internally, Delivered Clearly."
          subtitle="SDS uses a structured operating board to track work from lead to delivery. Preview data only, no private client information."
          centered
          light={true}
        />
      </Reveal>
      <Reveal className="mt-16">
        <div className="notion-board bg-white/5 border border-white/10">
          {notionColumns.map((column, index) => (
            <div key={column} className="notion-column bg-white/5 border border-white/10">
              <p className="text-white/50">{column}</p>
              {notionPreviewCards[index % notionPreviewCards.length] && index < 3 && (
                <article className="border border-brandGold/35 bg-white/5">
                  <strong className="text-white">{notionPreviewCards[index][0]}</strong>
                  <span className="text-white/60">{notionPreviewCards[index][1]}</span>
                </article>
              )}
            </div>
          ))}
        </div>
        <p className="mt-5 text-center font-dmsans text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
          Workflow preview only. No private client data shown.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ─── TIMELINE ESTIMATES ──────────────────────────────────────── */
export const TimelineEstimates = () => (
  <section className="bg-brandNavy py-24 border-t border-white/5 relative">
    <div className="section-shell">
      <Reveal>
        <SectionHeader eyebrow="Timelines" title="Estimated Delivery Timelines" centered light={true} />
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {timelineEstimates.map(([title, text]) => (
          <Reveal key={title}>
            <article className="timeline-card bg-white/5 border-white/10 text-white">
              <h3 className="font-syne text-xl font-bold tracking-[-0.03em] text-white">{title}</h3>
              <p className="mt-3 font-dmsans text-sm font-medium leading-7 text-white/60">{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── WHY CHOOSE SDS ──────────────────────────────────────────── */
export const WhyChoose = () => (
  <section className="bg-brandNavy py-28 border-t border-white/5 relative">
    <div className="section-shell">
      <Reveal>
        <SectionHeader eyebrow="Trust" title="Why Clients Choose SDS" light={true} />
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {whyChooseItems.map(([title, description]) => (
          <Reveal key={title}>
            <article className="trust-card bg-white/5 border-white/10">
              <h3 className="text-white">{title}</h3>
              <p className="text-white/60">{description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── EARLY FEEDBACK PLACEHOLDER ──────────────────────────────── */
export const EarlyFeedback = () => (
  <section className="bg-brandNavy py-16 border-t border-white/5 relative">
    <div className="section-shell">
      <Reveal>
        <div className="feedback-box bg-white/5 border-white/10">
          <p className="section-eyebrow text-brandGold">Feedback Coming Soon</p>
          <h2 className="mt-3 font-syne text-3xl font-bold tracking-[-0.04em] text-white">No fake testimonials here.</h2>
          <p className="mx-auto mt-4 max-w-2xl font-dmsans text-sm leading-7 text-white/60">
            Real feedback will be added after completed projects.
          </p>
          <ActionLink href={businessConfig.emailUrl} className="btn-primary mt-6 inline-flex">
            Worked with SDS? Share Feedback
          </ActionLink>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ─── FOUNDER & TALLY INTAKE GUIDE (FEATURE 5) ────────────────── */
export const Founder = () => (
  <section className="bg-brandNavy py-24 border-t border-white/5 relative">
    <div className="section-shell">
      <Reveal>
        <div className="founder-card bg-white/5 border-white/10">
          <div>
            <p className="section-eyebrow text-brandGold">Founder</p>
            <h2 className="mt-4 font-syne text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-none tracking-[-0.05em] text-white">Built by a<br />Technical Founder</h2>
          </div>
          <div>
            <p className="font-dmsans text-lg leading-8 text-white/80">
              SanzzDream Solutions is founded by Sanjay K, an Electronics and Communication Engineering student building at the intersection of technology, design, data, and execution.
            </p>
            <p className="mt-5 font-dmsans text-lg leading-8 text-white/60">
              SDS helps students, creators, founders, and local businesses move from idea to polished digital output without messy communication, unclear pricing, or unreliable delivery.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {founderPrinciples.map((principle) => (
                <span key={principle} className="principle-tag text-white/60 border-white/20 hover:border-white">{principle}</span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Tally Intake Improvement Notes */}
      <Reveal className="mt-16 bg-white/5 border border-white/10 rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-12 shadow-2xl backdrop-blur-md">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <h3 className="font-syne text-2xl font-bold text-white">For a Faster Quote, Include These Details</h3>
            <p className="font-dmsans text-sm text-white/60 leading-relaxed mt-3">
              Providing clear inputs during submission saves time and allows us to send an accurate quote within hours. Before launching the project intake form, make sure you have compiled the checklist details.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ProjectLink className="btn-primary inline-flex">
                Start Project Form
              </ProjectLink>
              <WhatsAppLink message="Hi SDS, I want to submit a requirement. Can you guide me?" className="btn-outline inline-flex text-white border-white/20 hover:border-white">
                Ask Questions on WhatsApp
              </WhatsAppLink>
            </div>
          </div>

          <div className="bg-[#161922] border border-white/10 rounded-2xl p-6">
            <span className="block font-syne text-xs font-bold uppercase tracking-wider text-brandGold mb-4">
              Submission Checklist
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-white/65">
              {tallyIntakeChecklist.map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#16a34a] flex-shrink-0" />
                  <span className="font-dmsans font-semibold text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ─── FAQ ────────────────────────────────────────────────────── */
export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#111318] py-28 text-white relative border-t border-white/5">
      <div className="section-shell">
        <Reveal>
          <SectionHeader eyebrow="FAQ" title="Questions before you start?" subtitle="Clear answers before SDS starts execution." light />
        </Reveal>
        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {faqs.map(([question, answer], index) => {
            const isOpen = openIndex === index;
            return (
              <div key={question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="faq-btn"
                  aria-expanded={isOpen}
                >
                  <span className="text-white">{question}</span>
                  <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-56 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="max-w-3xl font-dmsans leading-8 text-white/65">{answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── FINAL CTA ──────────────────────────────────────────────── */
export const FinalCTA = () => (
  <section id="contact" className="bg-brandNavy py-28 border-t border-white/5 relative">
    <div className="section-shell">
      <Reveal>
        <div className="cta-box bg-white/5 border-white/10 text-white">
          <p className="section-eyebrow text-brandGold">Contact</p>
          <h2 className="mt-5 max-w-4xl font-syne text-[clamp(2.8rem,7vw,6rem)] font-bold leading-[0.92] tracking-[-0.06em] text-white">
            Let&#39;s Build Your Next Output.
          </h2>
          <p className="mt-6 max-w-2xl font-dmsans text-lg leading-8 text-white/60">
            Share your requirement, get a clear quote, pay 50% advance, and let SDS handle the execution.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ProjectLink className="btn-primary">
              Start a Project
              <SvgIcon name="arrow" className="h-4 w-4" />
            </ProjectLink>
            <WhatsAppLink message="Hi SDS, I want to start a project. My requirement is:" className="btn-secondary">
              WhatsApp SDS
            </WhatsAppLink>
            <ActionLink href={businessConfig.emailUrl} className="btn-outline text-white border-white/20 hover:border-white">
              Email SDS
            </ActionLink>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ─── STICKY WHATSAPP ────────────────────────────────────────── */
export const StickyWhatsApp = () => {
  if (!businessConfig.whatsappNumber || businessConfig.whatsappNumber === "#") return null;
  return (
    <WhatsAppLink message="Hi SDS, I want to start a project. My requirement is:" className="sticky-wa">
      <SvgIcon name="chat" className="h-4 w-4" />
      WhatsApp SDS
    </WhatsAppLink>
  );
};

/* ─── FOOTER ─────────────────────────────────────────────────── */
export const Footer = () => (
  <footer className="footer border-t border-white/5 bg-[#06080c]">
    <div className="section-shell">
      <div className="footer-grid">
        <div>
          <p className="footer-brand text-white">SanzzDream Solutions</p>
          <p className="footer-tagline text-white/70">{businessConfig.tagline}</p>
          <p className="footer-desc text-white/40">
            Creative, data, office, and frontend execution studio for students, creators, startups, and local businesses.
          </p>
        </div>
        <div>
          <p className="footer-col-title text-brandGold">Links</p>
          <div className="footer-col-links">
            {footerLinks.map(([label, href]) => (
              <a key={label} href={href} className="footer-link text-white/50 hover:text-white">{label}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-col-title text-brandGold">Contact</p>
          <div className="footer-col-links">
            <a href={businessConfig.emailUrl} className="footer-link text-white/50 hover:text-white">{businessConfig.email}</a>
            <WhatsAppLink className="footer-link text-white/50 hover:text-white">{businessConfig.whatsappDisplay}</WhatsAppLink>
            <ProjectLink className="footer-link text-white/50 hover:text-white">Start Project</ProjectLink>
          </div>
        </div>
      </div>
      <div className="footer-bottom border-white/5">
        <p className="text-white/30">&copy; 2026 SanzzDream Solutions. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
