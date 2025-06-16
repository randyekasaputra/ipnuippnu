"use client";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">IPNU IPPNU</h3>
            <p className="text-green-100">
              Organisasi pelajar Nahdlatul Ulama yang berfokus pada pengembangan
              generasi muda Islam.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-green-100">
                <EnvelopeIcon className="w-5 h-5 mr-2 text-yellow-300" />
                ipnuippnu.suwawaltimur@gmail.com
              </li>
              <li className="flex items-center text-green-100">
                <PhoneIcon className="w-5 h-5 mr-2 text-yellow-300" />
                +62 822 444 824 70
              </li>
              <li className="flex items-center text-green-100">
                <MapPinIcon className="w-5 h-5 mr-2 text-yellow-300" />
                Kompleks Masjid Baitul Muttaqin, Suwawal Timur, Kode Pos 59456
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">Ikuti Kami</h3>
            <div className="flex space-x-4">
              {[
                { name: "Instagram", link: "https://www.instagram.com/ipnuippnusuwawaltimur?utm_source=ig_web_button_share_sheet&igsh=dnYyNmc1NnA5cGNi", icon: FaInstagram },
                { name: "Facebook", link: "https://www.facebook.com/ipnuippnusuwawaltimur.ipnuippnusuwawaltimur", icon: FaFacebook },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-yellow-300 hover:text-white transition-colors flex items-center"
                >
                  <social.icon className="w-6 h-6 mr-2" />
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-green-800 text-center text-green-100"
        >
          <p>&copy; 2025 IPNU IPPNU Ranting Suwawal Timur.</p>
        </motion.div>
      </div>
    </footer>
  );
} 