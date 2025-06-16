"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-green-600 via-green-500 to-yellow-400">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/pattern.svg"
          alt="Pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            className="text-white relative z-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            >
              <br/>
              <span className="text-yellow-300">IPNU</span>{" "}
              <span className="text-white">IPPNU</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl text-yellow-200">
                Ranting Suwawal Timur
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 text-lg text-yellow-50"
            >
              Wadah pengembangan generasi muda Islam yang berfokus pada
              pendidikan, keorganisasian, dan pengabdian masyarakat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/pendaftaran"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-yellow-300 text-base font-medium rounded-full text-yellow-300 hover:bg-yellow-300 hover:text-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Daftar Sekarang
              </Link>
              <Link
                href="#kegiatan"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Lihat Kegiatan
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{
              opacity: 0, scale: 0.8, rotate: 0,
              borderRadius: "40% 60% 40% 60% / 60% 40% 60% 40%"
            }}
            animate={{
              opacity: 1,
              scale: [1, 1.03, 1],
              rotate: 360,
              borderRadius: [
                "40% 60% 40% 60% / 60% 40% 60% 40%",
                "70% 30% 70% 30% / 30% 70% 30% 70%",
                "50% 50% 50% 50% / 50% 50% 50% 50%",
                "30% 70% 30% 70% / 70% 30% 70% 30%",
                "40% 60% 40% 60% / 60% 40% 60% 40%",
              ],
            }}
            transition={{
              duration: 1,
              ease: [0.6, -0.05, 0.01, 0.99],
              scale: { duration: 4, repeat: Infinity, repeatType: "mirror" },
              rotate: { duration: 25, ease: "linear", repeat: Infinity },
              borderRadius: { duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            }}
            className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] overflow-hidden rounded-full mx-auto"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-green-500/20 backdrop-blur-sm"
            />
            <Image
              src="/hero-images.jpg"
              alt="IPNU IPPNU Youth"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-6 h-10 border-2 border-yellow-300 rounded-full flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-1 h-2 bg-yellow-300 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 