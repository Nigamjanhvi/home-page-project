import CTASection from "./components/CTASection.jsx";
import FAQSection from "./components/FAQSection.jsx";
import FeaturesGrid from "./components/FeaturesGrid.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorksSection from "./components/HowItWorksSection.jsx";
import MetricsSection from "./components/MetricsSection.jsx";
import Nav from "./components/Nav.jsx";
import ProductShowcase from "./components/ProductShowcase.jsx";
import ReliabilitySection from "./components/ReliabilitySection.jsx";
import TrustStrip from "./components/TrustStrip.jsx";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-warm-bg text-charcoal antialiased">
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <HowItWorksSection />
        <ProductShowcase />
        <FeaturesGrid />
        <ReliabilitySection />
        <MetricsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
