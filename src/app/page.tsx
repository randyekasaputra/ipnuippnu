import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TentangSection from "@/components/TentangSection";
import KegiatanSection from "@/components/KegiatanSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  // Ganti '/logo.png' dengan path ke logo Anda di folder public
  const logoPath = '/logo.png'; 

  return (
    <main>
      <Navbar logoSrc={logoPath} />
      <HeroSection />
      <TentangSection />
      <KegiatanSection />
      <CTASection />
      <Footer />
    </main>
  );
}
