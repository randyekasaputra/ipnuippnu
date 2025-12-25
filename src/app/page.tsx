"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TentangSection from "@/components/TentangSection";
import KegiatanSection from "@/components/KegiatanSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  // Ganti '/logo.png' dengan path ke logo Anda di folder public
  const logoPath = '/logo.png';

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

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
