"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section id="cta" className="py-20 relative overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-yellow-600">
      {/* Background with morphing effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <motion.div
          initial={{ scale: 1.2, opacity: 0.1 }}
          animate={{
            scale: [1.2, 1.3, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-yellow-500/20"
        />
        <motion.div
          initial={{ borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" }}
          animate={{
            borderRadius: [
              "60% 40% 30% 70%/60% 30% 70% 40%",
              "30% 60% 70% 40%/50% 60% 30% 60%",
              "60% 40% 30% 70%/60% 30% 70% 40%",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-green-500/10 backdrop-blur-sm"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bergabung Bersama Kami
          </h2>
          <p className="text-lg text-yellow-100 max-w-2xl mx-auto mb-8">
            Jadilah bagian dari generasi muda Islam yang berkontribusi untuk
            kemajuan bangsa dan agama.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="/pendaftaran"
              className="inline-flex items-center px-8 py-4 border-2 border-yellow-300 text-lg font-semibold rounded-full text-yellow-300 hover:bg-yellow-300 hover:text-green-800 transition-all duration-300"
            >
              Daftar Sekarang
              <motion.svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 