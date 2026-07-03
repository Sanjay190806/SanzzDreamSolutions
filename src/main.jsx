import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  LaunchScreen,
  Navbar,
  Hero,
  QuickActionStrip,
  DemoWorkShowcase,
  Services,
  QuoteCalculator,
  Packages,
  Process,
  RevisionPolicy,
  PaymentSection,
  NotionTracking,
  TimelineEstimates,
  WhyChoose,
  EarlyFeedback,
  Founder,
  FAQ,
  FinalCTA,
  StickyWhatsApp,
  Footer
} from "./components.jsx";

const App = () => {
  const [entered, setEntered] = useState(() => sessionStorage.getItem("sds_entered") === "true");
  const [exitingLaunch, setExitingLaunch] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("sds_theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("sds_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  const enterSite = () => {
    setExitingLaunch(true);
    window.setTimeout(() => {
      sessionStorage.setItem("sds_entered", "true");
      setEntered(true);
      window.scrollTo(0, 0);
    }, 520);
  };

  return (
    <>
      {!entered && <LaunchScreen onEnter={enterSite} exiting={exitingLaunch} />}
      <div className={`site-shell ${entered ? "site-visible" : "site-hidden"}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <QuickActionStrip />
          <DemoWorkShowcase />
          <Services />
          <QuoteCalculator />
          <Packages />
          <Process />
          <RevisionPolicy />
          <PaymentSection />
          <NotionTracking />
          <TimelineEstimates />
          <WhyChoose />
          <EarlyFeedback />
          <Founder />
          <FAQ />
          <FinalCTA />
        </main>
        <StickyWhatsApp />
        <Footer />
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
