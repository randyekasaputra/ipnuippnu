"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  UserIcon,
  HomeIcon,
  AcademicCapIcon,
  PhoneIcon,
  CakeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function PendaftaranForm() {
  const [form, setForm] = useState<{
    nama: string;
    nomer_hp: string;
    alamat: string;
    usia: string;
    pendidikan_terakhir: string;
  }>({ nama: "", nomer_hp: "", alamat: "", usia: "", pendidikan_terakhir: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const message = `Halo, saya ingin mendaftar sebagai anggota baru IPNU IPPNU.\n\nNama Lengkap: ${form.nama}\nNomor HP: ${form.nomer_hp}\nAlamat: ${form.alamat}\nUsia: ${form.usia}\nPendidikan Terakhir: ${form.pendidikan_terakhir}\n\nMohon petunjuk selanjutnya untuk proses pendaftaran. Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6287731932494?text=${encodedMessage}`; // Ganti dengan nomor WhatsApp tujuan Anda

    window.open(whatsappUrl, '_blank');

    alert("Formulir telah disiapkan untuk dikirim melalui WhatsApp. Silakan klik 'Kirim' di WhatsApp Anda.");

    // Reset form setelah submit
    setForm({ nama: "", nomer_hp: "", alamat: "", usia: "", pendidikan_terakhir: "" });
  }

  return (
    <section className="min-h-screen py-12 px-4 flex items-center justify-center bg-gradient-to-br from-green-700 to-yellow-600">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 max-w-lg w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-6 text-center text-white"
        >
          Formulir Pendaftaran Anggota Baru
        </motion.h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-yellow-300 text-sm font-semibold mb-2 flex items-center">
              <UserIcon className="w-5 h-5 mr-2" />
              Nama Lengkap
            </label>
            <input
              type="text"
              name="nama"
              className="w-full p-3 rounded-lg bg-white/20 border border-yellow-300 focus:border-yellow-400 focus:ring-yellow-400 text-white placeholder-yellow-200 transition-all duration-200 focus:outline-none"
              placeholder="Masukkan nama lengkap Anda"
              required
              value={form.nama}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-yellow-300 text-sm font-semibold mb-2 flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2" />
              Nomor HP
            </label>
            <input
              type="tel"
              name="nomer_hp"
              className="w-full p-3 rounded-lg bg-white/20 border border-yellow-300 focus:border-yellow-400 focus:ring-yellow-400 text-white placeholder-yellow-200 transition-all duration-200 focus:outline-none"
              placeholder="Masukkan nomor HP Anda"
              required
              value={form.nomer_hp}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-yellow-300 text-sm font-semibold mb-2 flex items-center">
              <HomeIcon className="w-5 h-5 mr-2" />
              Alamat
            </label>
            <input
              type="text"
              name="alamat"
              className="w-full p-3 rounded-lg bg-white/20 border border-yellow-300 focus:border-yellow-400 focus:ring-yellow-400 text-white placeholder-yellow-200 transition-all duration-200 focus:outline-none"
              placeholder="Masukkan alamat Anda"
              required
              value={form.alamat}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-yellow-300 text-sm font-semibold mb-2 flex items-center">
              <CakeIcon className="w-5 h-5 mr-2" />
              Usia
            </label>
            <input
              type="number"
              name="usia"
              className="w-full p-3 rounded-lg bg-white/20 border border-yellow-300 focus:border-yellow-400 focus:ring-yellow-400 text-white placeholder-yellow-200 transition-all duration-200 focus:outline-none"
              placeholder="Masukkan usia Anda"
              required
              value={form.usia}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-yellow-300 text-sm font-semibold mb-2 flex items-center">
              <AcademicCapIcon className="w-5 h-5 mr-2" />
              Pendidikan Terakhir
            </label>
            <input
              type="text"
              name="pendidikan_terakhir"
              className="w-full p-3 rounded-lg bg-white/20 border border-yellow-300 focus:border-yellow-400 focus:ring-yellow-400 text-white placeholder-yellow-200 transition-all duration-200 focus:outline-none"
              placeholder="Contoh: SMA/SMK, Sarjana"
              required
              value={form.pendidikan_terakhir}
              onChange={handleChange}
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-green-600 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:from-green-700 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center"
          >
            Daftar Sekarang
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
} 