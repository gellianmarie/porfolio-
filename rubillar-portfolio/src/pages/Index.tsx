import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { EducationalTourSection } from "@/components/EducationalTourSection";
import { ReflectionsSection } from "@/components/ReflectionsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CertificatesSection />
      <EducationalTourSection />
      <ReflectionsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
