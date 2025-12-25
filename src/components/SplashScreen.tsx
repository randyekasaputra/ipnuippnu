"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide splash screen after 2.5 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
            // Call onFinish after fade out animation completes
            setTimeout(onFinish, 500);
        }, 2500);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-green-700 via-green-600 to-yellow-600"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat" />

                    {/* Animated Yellow Accent */}
                    <motion.div
                        initial={{ scale: 1.2, opacity: 0.1 }}
                        animate={{
                            scale: [1.2, 1.3, 1.2],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                        className="absolute inset-0 bg-yellow-400/20"
                    />

                    {/* Morphing Shape Accent */}
                    <motion.div
                        initial={{ borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" }}
                        animate={{
                            borderRadius: [
                                "60% 40% 30% 70%/60% 30% 70% 40%",
                                "30% 60% 70% 40%/50% 60% 30% 60%",
                                "60% 40% 30% 70%/60% 30% 70% 40%",
                            ],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                        className="absolute inset-0 bg-yellow-500/10 backdrop-blur-sm"
                    />

                    {/* Logo and Animation */}
                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                            className="mb-8"
                        >
                            <Image
                                src="/logo.png"
                                alt="IPNU IPPNU Logo"
                                width={200}
                                height={200}
                                className="object-contain"
                                priority
                            />
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: 0.5,
                                duration: 0.6,
                            }}
                            className="text-center"
                        >
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                                PR IPNU - IPPNU
                            </h1>
                            <p className="text-base sm:text-lg text-yellow-100">
                                SUWAWAL TIMUR
                            </p>
                        </motion.div>

                        {/* Loading Animation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="mt-8"
                        >
                            <div className="flex space-x-2">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="w-3 h-3 bg-yellow-300 rounded-full"
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.5, 1, 0.5],
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
