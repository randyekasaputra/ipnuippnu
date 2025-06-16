"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navbar({ logoSrc }: { logoSrc?: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center h-full">
              {logoSrc ? (
                <Image
                  src={logoSrc}
                  alt="Organization Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              ) : (
                <span className={`text-2xl font-bold bg-clip-text text-transparent ${
                  isScrolled ? "bg-gradient-to-r from-green-700 to-yellow-600" : "bg-gradient-to-r from-green-200 to-yellow-200"
                }`}>
                  IPNU IPPNU
                </span>
              )}
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${
                isScrolled ? "text-gray-900 focus:ring-green-600" : "text-white focus:ring-yellow-300"
              }`}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Tentang", "Kegiatan", "Gabung"].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item === "Gabung" ? "#cta" : `#${item.toLowerCase()}`}
                  className={`text-sm font-medium ${
                    isScrolled ? "text-gray-900" : "text-white"
                  } hover:text-green-600 transition-colors`}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <Link href="/pendaftaran">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
              >
                Daftar Sekarang
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0, display: "block" },
          closed: { opacity: 0, y: -20, transitionEnd: { display: "none" } },
        }}
        transition={{ duration: 0.3 }}
        className={`md:hidden ${isScrolled ? "bg-white" : "bg-green-700"} pb-4`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {["Tentang", "Kegiatan", "Gabung"].map((item) => (
            <Link
              key={item}
              href={item === "Gabung" ? "#cta" : `#${item.toLowerCase()}`}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-white hover:bg-green-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/pendaftaran"
            className={`block w-full text-center px-4 py-2 rounded-full text-base font-medium mt-4 ${
              isScrolled ? "bg-green-600 text-white hover:bg-green-700" : "bg-yellow-400 text-green-900 hover:bg-yellow-500"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Daftar Sekarang
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
} 