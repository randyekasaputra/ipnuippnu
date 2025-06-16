"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
}

const LOCAL_STORAGE_KEY = "ipnu_ippnu_news";

export default function NewsList() {
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    const storedNews = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedNews) {
      setNews(JSON.parse(storedNews));
    }
  }, []);

  return (
    <section className="py-20 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Berita Terbaru</h2>
          <p className="text-lg text-gray-600">Ikuti perkembangan dan kegiatan terbaru IPNU IPPNU.</p>
        </motion.div>

        {news.length === 0 ? (
          <p className="text-center text-gray-500 text-xl mt-10">Belum ada berita yang tersedia saat ini.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * parseInt(article.id) }}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={article.imageUrl || "/placeholder.jpg"}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3">{article.content}</p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-gray-500">{article.createdAt}</span>
                    <Link href={`/artikel/${article.id}`}>
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="text-green-600 font-medium inline-flex items-center"
                      >
                        Baca Selengkapnya
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
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 