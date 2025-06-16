"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HomeIcon, NewspaperIcon, PhotoIcon, ChatBubbleLeftRightIcon, UserGroupIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";

export default function AdminDashboard() {
  const { isLoggedIn, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, loading, router]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isLoggedIn) {
    return null; // Akan diarahkan oleh useEffect
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full bg-white rounded-xl shadow-xl overflow-hidden"
      >
        <div className="bg-green-700 p-6 text-white text-center">
          <h2 className="text-3xl font-bold">Admin Dashboard IPNU IPPNU</h2>
          <p className="mt-2 text-green-100">Selamat datang, Admin!</p>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard
            title="Beranda"
            description="Lihat statistik umum website."
            icon={HomeIcon}
            href="/admin"
            bgColor="bg-green-100"
            textColor="text-green-800"
          />
          <DashboardCard
            title="Manajemen Berita"
            description="Kelola artikel dan berita terbaru."
            icon={NewspaperIcon}
            href="/admin/berita"
            bgColor="bg-yellow-100"
            textColor="text-yellow-800"
          />
          <DashboardCard
            title="Manajemen Galeri"
            description="Kelola dokumentasi foto dan video."
            icon={PhotoIcon}
            href="/admin/galeri"
            bgColor="bg-blue-100"
            textColor="text-blue-800"
          />
          <DashboardCard
            title="Manajemen Forum"
            description="Moderasi diskusi dan anggota forum."
            icon={ChatBubbleLeftRightIcon}
            href="/admin/forum"
            bgColor="bg-purple-100"
            textColor="text-purple-800"
          />
          <DashboardCard
            title="Manajemen Anggota"
            description="Kelola data pendaftar dan anggota aktif."
            icon={UserGroupIcon}
            href="/admin/anggota"
            bgColor="bg-red-100"
            textColor="text-red-800"
          />
          <DashboardCard
            title="Logout"
            description="Keluar dari sesi admin."
            icon={ArrowLeftOnRectangleIcon}
            href="#"
            onClick={logout}
            bgColor="bg-gray-200"
            textColor="text-gray-800"
          />
        </div>
      </motion.div>
    </div>
  );
}

interface DashboardCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  onClick?: () => void;
  bgColor: string;
  textColor: string;
}

function DashboardCard({
  title,
  description,
  icon: Icon,
  href,
  onClick,
  bgColor,
  textColor,
}: DashboardCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      whileTap={{ scale: 0.98 }}
      className={`p-6 rounded-lg shadow-md flex flex-col items-center text-center ${bgColor}`}
    >
      <Link href={href} className="w-full" onClick={onClick}>
        <Icon className={`w-12 h-12 mb-4 ${textColor}`} />
        <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>{title}</h3>
        <p className={`text-sm ${textColor}/80`}>{description}</p>
      </Link>
    </motion.div>
  );
} 