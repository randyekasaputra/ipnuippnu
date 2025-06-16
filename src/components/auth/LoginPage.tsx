"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { UserIcon, LockClosedIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Simulasi autentikasi
    if (username === "admin" && password === "password") {
      localStorage.setItem("isLoggedIn", "true"); // Simpan status login
      router.push("/admin"); // Arahkan ke halaman admin
    } else {
      setError("Username atau password salah.");
    }
  };

  return (
    <section className="min-h-screen py-12 px-4 flex items-center justify-center bg-gradient-to-br from-green-700 to-yellow-600">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 max-w-md w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-6 text-center text-white"
        >
          Login Admin
        </motion.h2>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </motion.div>
          )}
          <div>
            <label className="block text-yellow-100 text-sm font-semibold mb-2 flex items-center">
              <UserIcon className="w-5 h-5 mr-2" />
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/20 border border-yellow-300 focus:border-yellow-400 focus:ring-yellow-400 text-white placeholder-yellow-200 transition-all duration-200 focus:outline-none"
              placeholder="Masukkan username"
              required
            />
          </div>
          <div>
            <label className="block text-yellow-100 text-sm font-semibold mb-2 flex items-center">
              <LockClosedIcon className="w-5 h-5 mr-2" />
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/20 border border-yellow-300 focus:border-yellow-400 focus:ring-yellow-400 text-white placeholder-yellow-200 transition-all duration-200 focus:outline-none"
              placeholder="Masukkan password"
              required
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-green-600 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:from-green-700 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center"
          >
            Login
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
} 