"use client";
import PendaftaranForm from "@/components/PendaftaranForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function PendaftaranPage() {
  const logoPath = '/logo.png'; // Path ke logo Anda di folder public

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar logoSrc={logoPath} />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-green-700 to-yellow-600 py-12 px-4">
        <div className="max-w-lg w-full">
          <Link href="/" className="inline-flex items-center text-white hover:text-yellow-300 transition-colors mb-6">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Kembali ke Beranda
          </Link>
          <PendaftaranForm />
        </div>
      </main>
      <Footer />
    </div>
  );
} 