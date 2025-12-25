"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    UserCircle,
    Users,
    Award,
    BookOpen,
    Heart,
    Megaphone,
} from "lucide-react";

interface OrganizationMember {
    position: string;
    name: string;
    photo?: string;
    department?: string;
}

const organizationData: OrganizationMember[] = [
    // Top Leadership
    { position: "Ketua IPNU", name: "Randy Eka Saputra", department: "leadership" },
    { position: "Ketua IPPNU", name: "Aerialita Khumairoh", department: "leadership" },

    // Vice Leadership
    { position: "Wakil Ketua IPNU", name: "Ahmad Shoffa Baihaqi", department: "vice" },
    { position: "Wakil Ketua IPPNU", name: "Endah Cahya Pratiwi", department: "vice" },

    // Secretary
    { position: "Sekretaris IPNU", name: "Yusvika Faizurrohman", department: "secretary" },
    { position: "Sekretaris IPPNU", name: "Isnaya Febriana Putri", department: "secretary" },

    // Treasurer
    { position: "Bendahara IPPNU", name: "Zahra Wulan Safitri", department: "treasurer" },

    // Departments
    { position: "Departemen Kaderisasi", name: "Fardhan Syaif Annizam", department: "education" },
    { position: "Departemen Organisasi", name: "Bayu Pradana", department: "social" },
    { position: "Departemen Dakwah", name: "Hilal Safarudin", department: "dakwah" },
    { position: "Departemen Olahraga", name: "M. Agha Auzika Rahman", department: "organization" },
];

const departmentIcons: Record<string, any> = {
    education: BookOpen,
    social: Heart,
    dakwah: Megaphone,
    organization: Users,
};

export default function StrukturOrganisasi() {
    const leadership = organizationData.filter((m) => m.department === "leadership");
    const vice = organizationData.filter((m) => m.department === "vice");
    const secretary = organizationData.filter((m) => m.department === "secretary");
    const treasurer = organizationData.filter((m) => m.department === "treasurer");
    const departments = organizationData.filter((m) =>
        ["education", "social", "dakwah", "organization"].includes(m.department || "")
    );

    const renderMemberCard = (member: OrganizationMember, index: number, delay: number = 0) => {
        const Icon = member.department && departmentIcons[member.department]
            ? departmentIcons[member.department]
            : UserCircle;

        return (
            <motion.div
                key={`${member.position}-${index}`}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: delay + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-yellow-300/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(253,224,71,0.3)]"
            >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-300/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Avatar */}
                <div className="flex flex-col items-center">
                    <motion.div
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                        className="relative mb-4"
                    >
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center shadow-lg">
                            {member.photo ? (
                                <Image
                                    src={member.photo}
                                    alt={member.name}
                                    width={96}
                                    height={96}
                                    className="rounded-full object-cover"
                                />
                            ) : (
                                <span className="text-3xl font-bold text-green-700">
                                    {member.name.charAt(0)}
                                </span>
                            )}
                        </div>
                        {/* Status indicator */}
                        <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-400 rounded-full border-2 border-white shadow-lg" />
                    </motion.div>

                    {/* Info */}
                    <h3 className="text-lg font-bold text-yellow-300 text-center mb-1">
                        {member.name}
                    </h3>
                    <div className="flex items-center gap-2 text-yellow-100">
                        <Icon className="w-4 h-4" />
                        <p className="text-sm font-medium text-center">{member.position}</p>
                    </div>
                </div>

                {/* Hover effect background */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-green-500/5 rounded-2xl -z-10"
                />
            </motion.div>
        );
    };

    return (
        <section id="struktur" className="py-20 pt-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-600 via-green-500 to-green-600">
                <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4"
                    >
                        <Award className="w-5 h-5 text-yellow-300" />
                        <span className="text-sm font-medium text-yellow-100">
                            Kepengurusan Periode 2025-2027
                        </span>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Struktur Organisasi
                    </h2>
                    <p className="text-lg text-yellow-100 max-w-2xl mx-auto">
                        Pengurus IPNU & IPPNU Ranting Suwawal Timur yang berkomitmen untuk
                        memajukan organisasi dan memberdayakan generasi muda.
                    </p>
                </motion.div>

                {/* Leadership Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md sm:max-w-2xl mx-auto">
                        {leadership.map((member, index) => renderMemberCard(member, index, 0.2))}
                    </div>
                </motion.div>

                {/* Vice Leadership */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-lg sm:max-w-3xl mx-auto">
                        {vice.map((member, index) => renderMemberCard(member, index, 0.3))}
                    </div>
                </motion.div>

                {/* Secretary & Treasurer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="grid grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 max-w-2xl sm:max-w-4xl mx-auto">
                        {[...secretary, ...treasurer].map((member, index) => renderMemberCard(member, index, 0.4))}
                    </div>
                </motion.div>

                {/* Departments Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 text-center mb-8">
                        Departemen
                    </h3>
                    <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-3xl sm:max-w-5xl mx-auto">
                        {departments.map((member, index) => renderMemberCard(member, index, 0.5))}
                    </div>
                </motion.div>

                {/* Bottom Decorative Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent rounded-full"
                />
            </div>
        </section>
    );
}
