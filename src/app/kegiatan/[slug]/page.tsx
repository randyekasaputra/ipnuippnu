"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeftIcon, CalendarIcon, UsersIcon, ClockIcon } from "@heroicons/react/24/outline";

// Data kegiatan lengkap
const kegiatanData: Record<string, any> = {
    "takbir-keliling": {
        title: "Takbir Keliling",
        description: "Takbir Keliling adalah kegiatan yang diselenggarakan oleh IPNU IPPNU Ranting Suwawal Timur dalam menyambut datangnya hari raya idul adha yang diikuti oleh seluruh warga masyarakat yang berada di wilayah Ranting Suwawal Timur.",
        image: "/takbir-keliling.jpg",
        fullDescription: `Takbir Keliling merupakan salah satu tradisi yang telah mengakar di masyarakat Muslim Indonesia, khususnya di wilayah Suwawal Timur. Kegiatan ini menjadi momen spesial dalam menyambut datangnya hari raya Idul Adha.

Prosesi takbir keliling dimulai setelah sholat Isya pada malam takbiran. Anggota IPNU IPPNU bersama masyarakat berkeliling kampung sambil mengumandangkan takbir, tahlil, dan sholawat. Suasana meriah dengan dihiasi lampu warna-warni dan bendera merah putih.

Kegiatan ini tidak hanya sebagai bentuk syiar Islam, tetapi juga menjadi sarana untuk mempererat tali silaturahmi antar warga. Seluruh elemen masyarakat, mulai dari anak-anak hingga orang tua, turut berpartisipasi dalam kegiatan ini.`,
        waktu: "Malam Takbiran (Malam Idul Adha)",
        peserta: "Seluruh Warga Suwawal Timur",
        penyelenggara: "IPNU IPPNU Ranting Suwawal Timur",
    },
    "idarohan": {
        title: "Idarohan",
        description: "Idarohan adalah rutinan yang dilaksanakan oleh IPNU IPPNU Ranting Suwawal Timur Tiap 2 Minggu sekali.",
        image: "/idarohan-rutin.jpg",
        fullDescription: `Idarohan (Ijtima' Dewan Asatidzah Ranting) merupakan kegiatan rutin pengurus IPNU IPPNU Ranting Suwawal Timur yang dilaksanakan setiap dua minggu sekali. Kegiatan ini menjadi wadah koordinasi, evaluasi, dan perencanaan program kerja organisasi.

Dalam setiap pertemuan idarohan, para pengurus mendiskusikan berbagai hal terkait kegiatan organisasi, mulai dari evaluasi program yang telah berjalan, perencanaan kegiatan mendatang, hingga pembahasan isu-isu aktual yang berkaitan dengan kepemudaan dan keagamaan.

Idarohan juga menjadi sarana pembinaan kader, dimana para pengurus senior memberikan materi dan arahan kepada anggota muda. Selain itu, kegiatan ini juga memperkuat solidaritas dan kekompakan antar pengurus dalam menjalankan roda organisasi.`,
        waktu: "Setiap 2 Minggu Sekali",
        peserta: "Pengurus IPNU IPPNU",
        penyelenggara: "IPNU IPPNU Ranting Suwawal Timur",
    },
    "bukber": {
        title: "Bukber",
        description: "Bukber adalah kegiatan yang dilaksanakan dibulan Ramadhan yang digagas oleh IPNU IPPNU Suwawal Timur untuk menjalin keakraban antar anggota IPNU IPPNU Suwawal Timur.",
        image: "/bukber.jpg",
        fullDescription: `Buka Puasa Bersama (Bukber) merupakan agenda tahunan IPNU IPPNU Ranting Suwawal Timur yang dilaksanakan di bulan Ramadhan. Kegiatan ini bertujuan untuk mempererat tali silaturahmi dan keakraban antar anggota organisasi.

Bukber tidak hanya sekadar berbuka puasa bersama, tetapi juga diisi dengan berbagai kegiatan positif seperti kajian keislaman, sharing session, dan hiburan yang mendidik. Acara ini menjadi momentum untuk saling mengenal lebih dekat antar anggota, terutama bagi anggota baru.

Selain itu, bukber juga menjadi ajang untuk menggalang dana sosial dan berbagi dengan masyarakat kurang mampu di sekitar wilayah Suwawal Timur. Dengan semangat Ramadhan, kegiatan ini memperkuat nilai-nilai kebersamaan dan kepedulian sosial di kalangan pemuda.`,
        waktu: "Bulan Ramadhan",
        peserta: "Anggota IPNU IPPNU",
        penyelenggara: "IPNU IPPNU Ranting Suwawal Timur",
    },
    "safari-ramadhan": {
        title: "Safari Ramadhan",
        description: "Safari Ramadhan adalah kegiatan mengunjungi masjid-masjid dan mushola di wilayah Suwawal Timur untuk berbuka puasa bersama dan memperkuat tali silaturahmi antar warga.",
        image: "/safari-ramadhan.jpeg",
        fullDescription: `Safari Ramadhan merupakan program unggulan IPNU IPPNU Ranting Suwawal Timur yang dilaksanakan setiap bulan Ramadhan. Kegiatan ini melibatkan kunjungan ke berbagai masjid dan mushola di wilayah Suwawal Timur untuk berbuka puasa bersama jamaah setempat.

Program ini tidak hanya sebatas berbuka puasa, tetapi juga diisi dengan ceramah agama, dzikir bersama, dan diskusi keagamaan. Melalui safari ramadhan, IPNU IPPNU berupaya mendekatkan diri kepada masyarakat dan memperkuat syiar Islam di lingkungan sekitar.

Safari Ramadhan juga menjadi sarana dakwah yang efektif untuk menyebarkan nilai-nilai Islam yang rahmatan lil alamin. Antusiasme masyarakat sangat tinggi, sehingga kegiatan ini selalu dinantikan setiap tahunnya. Selain itu, kegiatan ini juga membantu merawat dan memakmurkan masjid-masjid di wilayah Suwawal Timur.`,
        waktu: "Bulan Ramadhan",
        peserta: "Anggota IPNU IPPNU & Masyarakat",
        penyelenggara: "IPNU IPPNU Ranting Suwawal Timur",
    },
    "ziarah": {
        title: "Ziarah",
        description: "Kegiatan ziarah ke makam para tokoh dan ulama yang dilaksanakan secara rutin untuk mengenang jasa-jasa mereka dan mengambil pelajaran dari kehidupan mereka.",
        image: "/ziarah.jpeg",
        fullDescription: `Kegiatan Ziarah merupakan tradisi yang dijaga oleh IPNU IPPNU Ranting Suwawal Timur sebagai bentuk penghormatan kepada para tokoh dan ulama yang telah berjasa dalam perjuangan Islam dan pengembangan pendidikan di wilayah Suwawal Timur.

Ziarah dilaksanakan secara rutin, biasanya menjelang bulan-bulan besar Islam atau pada momentum tertentu. Kegiatan ini tidak hanya mengunjungi makam, tetapi juga diisi dengan tahlil, doa bersama, dan pembacaan sejarah perjuangan para tokoh yang diziarahi.

Melalui kegiatan ziarah, para anggota IPNU IPPNU diharapkan dapat mengambil teladan dari kehidupan para ulama dan tokoh tersebut. Selain itu, ziarah juga menjadi pembelajaran sejarah lokal yang penting untuk menanamkan rasa cinta terhadap tanah air dan menghargai perjuangan pendahulu. Kegiatan ini juga mempererat hubungan dengan keluarga besar tokoh yang diziarahi.`,
        waktu: "Rutinitas Berkala",
        peserta: "Anggota IPNU IPPNU",
        penyelenggara: "IPNU IPPNU Ranting Suwawal Timur",
    },
    "makesta": {
        title: "Makesta",
        description: "Makesta (Masa Kesetiaan Anggota) adalah kegiatan orientasi dan pembinaan untuk anggota baru IPNU IPPNU Suwawal Timur agar lebih mengenal organisasi dan meningkatkan komitmen berorganisasi.",
        image: "/makesta.jpg",
        fullDescription: `MAKESTA (Masa Kesetiaan Anggota) adalah program pembinaan dan orientasi yang wajib diikuti oleh seluruh anggota baru IPNU IPPNU Ranting Suwawal Timur. Program ini dirancang untuk membekali anggota baru dengan pemahaman mendalam tentang organisasi, visi misi, serta nilai-nilai yang dijunjung tinggi.

Dalam MAKESTA, anggota baru akan mendapatkan berbagai materi seperti sejarah IPNU IPPNU, Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART), leadership, public speaking, dan kajian keislaman. Selain materi, MAKESTA juga diisi dengan kegiatan outbound dan team building untuk membangun karakter dan kekompakan.

Program ini berlangsung selama beberapa hari dengan sistem live in, dimana peserta tinggal bersama dan mengikuti seluruh rangkaian kegiatan. MAKESTA menjadi fondasi penting bagi anggota baru untuk memahami tugas dan tanggung jawabnya dalam organisasi. Alumni MAKESTA diharapkan menjadi kader militan yang siap berkontribusi dalam kemajuan IPNU IPPNU dan masyarakat.`,
        waktu: "Setiap Tahun",
        peserta: "Anggota Baru IPNU IPPNU",
        penyelenggara: "IPNU IPPNU Ranting Suwawal Timur",
    },
    "pelantikan": {
        title: "Pelantikan",
        description: "Pelantikan adalah kegiatan resmi pengukuhan pengurus IPNU IPPNU periode baru yang dilaksanakan dengan khidmat sebagai tanda dimulainya masa kepengurusan dan tanggung jawab organisasi.",
        image: "/pelantikan.jpeg",
        fullDescription: `Pelantikan Pengurus merupakan momentum penting dalam siklus kepengurusan IPNU IPPNU Ranting Suwawal Timur. Kegiatan ini menandai dimulainya periode kepengurusan baru dan pengambilan estafet kepemimpinan dari pengurus lama kepada pengurus baru.

Prosesi pelantikan dilaksanakan secara resmi dan khidmat dengan dihadiri oleh pengurus cabang, tokoh masyarakat, ulama, dan seluruh anggota IPNU IPPNU. Acara dimulai dengan pembacaan susunan kepengurusan, kemudian dilanjutkan dengan pengambilan sumpah jabatan oleh seluruh pengurus yang dilantik.

Dalam pelantikan, pengurus baru mengucapkan janji setia untuk menjalankan amanah dengan penuh tanggung jawab, menjunjung tinggi nilai-nilai organisasi, dan bekerja keras untuk kemajuan IPNU IPPNU. Setelah pelantikan, pengurus baru resmi memulai tugas mereka untuk periode kepengurusan yang telah ditetapkan. Kegiatan ini juga menjadi ajang silaturahmi dan konsolidasi internal organisasi untuk mempersiapkan program kerja yang akan dijalankan.`,
        waktu: "Setiap Pergantian Periode",
        peserta: "Pengurus Baru & Undangan",
        penyelenggara: "IPNU IPPNU Ranting Suwawal Timur",
    },
};

export default function KegiatanDetailPage({ params }: { params: { slug: string } }) {
    const kegiatan = kegiatanData[params.slug];

    // Get other activities (exclude current one)
    const otherActivities = Object.entries(kegiatanData)
        .filter(([slug]) => slug !== params.slug)
        .map(([slug, data]) => ({ slug, ...data }));

    if (!kegiatan) {
        return (
            <main>
                <Navbar logoSrc="/logo.png" />
                <div className="min-h-screen flex items-center justify-center pt-20">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Kegiatan Tidak Ditemukan</h1>
                        <Link href="/#kegiatan" className="text-green-600 hover:text-green-700">
                            Kembali ke Halaman Utama
                        </Link>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main>
            <Navbar logoSrc="/logo.png" />

            {/* Main Article Content */}
            <div className="pt-20 py-12 bg-gradient-to-b from-green-600 via-green-500 to-green-600 relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Article Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/20"
                    >
                        {/* Back Button */}
                        <div className="p-6 pb-0">
                            <Link
                                href="/#kegiatan"
                                className="inline-flex items-center text-yellow-300 hover:text-yellow-100 transition-colors"
                            >
                                <ArrowLeftIcon className="w-5 h-5 mr-2" />
                                Kembali ke Kegiatan
                            </Link>
                        </div>

                        {/* Article Image */}
                        <div className="relative w-full h-64 sm:h-80 md:h-96 mt-4">
                            <Image
                                src={kegiatan.image}
                                alt={kegiatan.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Article Content */}
                        <div className="p-6 md:p-8">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                                {kegiatan.title}
                            </h1>

                            <p className="text-lg text-yellow-100 mb-6 leading-relaxed">
                                {kegiatan.description}
                            </p>

                            {/* Info Tags */}
                            <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-white/20">
                                <div className="flex items-center text-sm text-yellow-100">
                                    <CalendarIcon className="w-5 h-5 mr-2 text-yellow-300" />
                                    {kegiatan.waktu}
                                </div>
                                <div className="flex items-center text-sm text-yellow-100">
                                    <UsersIcon className="w-5 h-5 mr-2 text-yellow-300" />
                                    {kegiatan.peserta}
                                </div>
                            </div>

                            {/* Full Description */}
                            <div className="prose prose-lg max-w-none prose-invert">
                                <h2 className="text-2xl font-bold text-yellow-300 mb-4">Tentang Kegiatan</h2>
                                <div className="text-yellow-50 leading-relaxed whitespace-pre-line">
                                    {kegiatan.fullDescription}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-8 pt-8 border-t border-white/20 text-center">
                                <p className="text-yellow-100 mb-4">Tertarik bergabung dengan kegiatan kami?</p>
                                <Link
                                    href="/pendaftaran"
                                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                                >
                                    Daftar Menjadi Anggota
                                    <svg
                                        className="w-5 h-5 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Related Activities Section */}
            <section className="py-16 bg-gradient-to-b from-green-500 to-green-600 relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Kegiatan Lainnya
                        </h2>
                        <p className="text-lg text-yellow-100">
                            Lihat kegiatan-kegiatan lain IPNU IPPNU Ranting Suwawal Timur
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {otherActivities.slice(0, 3).map((activity, index) => (
                            <motion.div
                                key={activity.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-white/20"
                            >
                                <Link href={`/kegiatan/${activity.slug}`}>
                                    <div className="relative h-32 sm:h-40 lg:h-48">
                                        <Image
                                            src={activity.image}
                                            alt={activity.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-3 sm:p-4 lg:p-6">
                                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-yellow-300 mb-2 hover:text-yellow-100 transition-colors">
                                            {activity.title}
                                        </h3>
                                        <p className="text-yellow-50 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3 mb-3 sm:mb-4">
                                            {activity.description}
                                        </p>
                                        <div className="flex items-center text-yellow-300 font-medium text-xs sm:text-sm">
                                            Baca Selengkapnya
                                            <svg
                                                className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
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
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/#kegiatan"
                            className="inline-flex items-center px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-full hover:bg-green-600 hover:text-white transition-all duration-300"
                        >
                            Lihat Semua Kegiatan
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
