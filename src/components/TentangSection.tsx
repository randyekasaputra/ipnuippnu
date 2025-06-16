"use client";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Pendidikan",
    description:
      "Mengembangkan potensi akademik dan non-akademik melalui berbagai program pendidikan yang berkualitas.",
    icon: AcademicCapIcon,
  },
  {
    title: "Keorganisasian",
    description:
      "Melatih jiwa kepemimpinan dan manajemen melalui berbagai kegiatan organisasi yang terstruktur.",
    icon: UserGroupIcon,
  },
  {
    title: "Sosial",
    description:
      "Mengasah kepedulian sosial melalui berbagai program pengabdian masyarakat yang bermanfaat.",
    icon: HeartIcon,
  },
];

export default function TentangSection() {
  return (
    <section id="tentang" className="py-20 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-500 to-green-600">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tentang IPNU IPPNU
          </h2>
          <p className="text-lg text-yellow-100 max-w-2xl mx-auto">
            Organisasi pelajar Nahdlatul Ulama yang berfokus pada pengembangan
            generasi muda Islam melalui pendidikan, keorganisasian, dan pengabdian
            masyarakat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Hover effect background */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-green-500/20"
              />

              {/* Icon container */}
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                viewport={{ once: true }}
                className="relative mb-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-yellow-300/20 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-yellow-300" />
                </div>
              </motion.div>

              {/* Content */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
                className="text-xl font-semibold text-yellow-300 mb-4"
              >
                {feature.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="text-yellow-50"
              >
                {feature.description}
              </motion.p>

              {/* Learn more link */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                viewport={{ once: true }}
                className="mt-6"
              >
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-yellow-300 font-medium inline-flex items-center"
                >
                  Pelajari lebih lanjut
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-yellow-100 text-lg">
            Bergabunglah bersama kami untuk mengembangkan potensi diri dan
            berkontribusi bagi kemajuan umat.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block"
          >
            <a
              href="#gabung"
              className="inline-flex items-center px-8 py-3 border-2 border-yellow-300 text-base font-medium rounded-full text-yellow-300 hover:bg-yellow-300 hover:text-green-600 transition-all duration-300"
            >
              Bergabung Sekarang
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 