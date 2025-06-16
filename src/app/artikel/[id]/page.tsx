"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
}

const LOCAL_STORAGE_KEY = "ipnu_ippnu_news";

export default function SingleArtikelPage() {
  const params = useParams();
  const { id } = params;
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      try {
        const storedNews = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedNews) {
          const newsArticles: NewsArticle[] = JSON.parse(storedNews);
          const foundArticle = newsArticles.find((art) => art.id === id);
          if (foundArticle) {
            setArticle(foundArticle);
          } else {
            setError("Artikel tidak ditemukan.");
          }
        } else {
          setError("Tidak ada berita yang tersimpan.");
        }
      } catch (e) {
        console.error("Failed to parse news from localStorage", e);
        setError("Gagal memuat berita.");
      } finally {
        setLoading(false);
      }
    }
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-16 bg-gray-100">
          <p className="text-gray-600">Memuat artikel...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-16 bg-gray-100">
          <p className="text-red-600">Error: {error}</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!article) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-16 bg-gray-100">
          <p className="text-gray-600">Artikel tidak ditemukan.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-lg p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/artikel">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-green-600 hover:text-green-800 mb-6"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                Kembali ke Daftar Artikel
              </motion.button>
            </Link>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden mb-6 shadow-md">
              <Image
                src={article.imageUrl || "/placeholder.jpg"}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-sm text-gray-500 mb-8">Dipublikasikan pada: {article.createdAt}</p>

            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              <p>{article.content}</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
} 