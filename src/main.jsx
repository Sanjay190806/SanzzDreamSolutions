const App = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <QuickActionStrip />
      <Services />
      <Packages />
      <Process />
      <RevisionPolicy />
      <PaymentSection />
      <NotionTracking />
      <Portfolio />
      <TimelineEstimates />
      <WhyChoose />
      <EarlyFeedback />
      <Founder />
      <FAQ />
      <FinalCTA />
    </main>
    <StickyWhatsApp />
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
