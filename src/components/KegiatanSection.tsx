"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const kegiatan = [
  {
    title: "Takbir Keliling",
    description:
      "Takbir Keliling adalah kegiatan yang diselenggarakan oleh IPNU IPPNU Ranting Suwawal Timur dalam menyambut datangnya hari raya idul adha yang diikuti oleh seluruh warga masyarakat yang berada di wilayah Ranting Suwawal Timur.",
    image: "/takbir-keliling.jpg",
  },
  {
    title: "Idarohan",
    description:
      "Idarohan adalah rutinan yang dilaksanakan oleh IPNU IPPNU Ranting Suwawal Timur Tiap 2 Minggu sekali.",
    image: "/idarohan-rutin.jpg",
  },
  {
    title: "Bukber",
    description:
      "Bukber adalah kegiatan yang dilaksanakan dibulan Ramadhan yang digagas oleh IPNU IPPNU Suwawal Timur untuk menjalin keakraban antar anggota IPNU IPPNU Suwawal Timur.",
    image: "/bukber.jpg",
  },
];

export default function KegiatanSection() {
  return (
    <section id="kegiatan" className="py-20 bg-gradient-to-b from-green-600 to-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Kegiatan Unggulan
          </h2>
          <p className="text-lg text-yellow-100 max-w-2xl mx-auto">
            Berbagai program menarik yang dirancang untuk mengembangkan potensi
            generasi muda Islam.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kegiatan.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden"
            >
              <motion.div
                initial={{ borderRadius: "20px" }}
                whileHover={{ borderRadius: "30px" }}
                transition={{ duration: 0.3 }}
                className="relative h-48 sm:h-56 md:h-64 overflow-hidden"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"
                />
              </motion.div>

              <div className="p-6">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold text-yellow-300 mb-2"
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-yellow-50"
                >
                  {item.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                  className="mt-4"
                >
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-yellow-300 font-medium inline-flex items-center"
                  >
                    Pelajari lebih lanjut
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 