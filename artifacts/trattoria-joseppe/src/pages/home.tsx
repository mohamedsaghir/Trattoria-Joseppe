import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BrandSection from "@/components/sections/BrandSection";
import WebsiteSection from "@/components/sections/WebsiteSection";
import SocialSection from "@/components/sections/SocialSection";
import LieferandoSection from "@/components/sections/LieferandoSection";
import InfoSection from "@/components/sections/InfoSection";
import OfferSection from "@/components/sections/OfferSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      <HeroSection />
      <BrandSection />
      <WebsiteSection />
      <SocialSection />
      <LieferandoSection />
      <InfoSection />
      <OfferSection />
      <Footer />
    </div>
  );
}
