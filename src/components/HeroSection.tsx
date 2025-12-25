"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Floating particles configuration
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpeg"
          alt="IPNU IPPNU Youth Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-green-700/80" />
      </div>

      {/* Animated Particles Background */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden z-10">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-white/20"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-10">
        <Image
          src="/pattern.svg"
          alt="Pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content - Centered */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
          className="text-white text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className="text-yellow-100">Selamat Datang di Website</span>
            <br />
            <span className="text-yellow-300">PR IPNU-IPPNU</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-yellow-100 font-semibold">
              SUWAWAL TIMUR
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl text-yellow-50 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Wadah pengembangan generasi muda Islam yang berfokus pada
            pendidikan, keorganisasian, dan pengabdian masyarakat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/pendaftaran"
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-300 text-base font-semibold rounded-full text-yellow-300 bg-yellow-300/10 backdrop-blur-sm hover:bg-yellow-300 hover:text-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(253,224,71,0.5)]"
            >
              <span>Daftar Sekarang</span>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="#kegiatan"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-semibold rounded-full text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Lihat Kegiatan
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}