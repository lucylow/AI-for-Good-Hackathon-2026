import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechShowcase from "@/components/TechShowcase";
import ImpactSection from "@/components/ImpactSection";
import DemoChat from "@/components/DemoChat";
import DemoScenarios from "@/components/DemoScenarios";
import TrustSafetySection from "@/components/TrustSafetySection";
import SocialProofSection from "@/components/SocialProofSection";
import AudienceCTAs from "@/components/AudienceCTAs";
import FAQSection from "@/components/FAQSection";
import BountySection from "@/components/BountySection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <TechShowcase />
    <ImpactSection />
    <DemoChat />
    <DemoScenarios />
    <TrustSafetySection />
    <SocialProofSection />
    <AudienceCTAs />
    <FAQSection />
    <BountySection />
    <Footer />
  </div>
);

export default Index;
