"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#EEE1CF] flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full flex justify-center">
          <Image
            src="/logo.png"
            alt="Ayla Beauty Logo"
            width={350}
            height={350}
          />
        </div>
        <h1 className="text-5xl font-bold mb-8 text-[#2B2B2B]">
          Welcome to Ayla Beauty
        </h1>
        <div className="main-video flex justify-center items-center mt-10 mb-10">
          <video src="/images/vid.mp4" width={250} autoPlay loop muted></video>
        </div>
        <div className="text-lg text-gray-600 mt-4">
          <p>Cherish your lips, Cherish every moment.</p>
        </div>
        <div className="btns mb-10">
          <Link href="/order">
            <button className="mt-6 px-6 py-3 mr-3 bg-[#D4AF37] text-white rounded-full text-lg hover:scale-105 transition cursor-pointer">
              Order Now
            </button>
          </Link>
          <Link href="/products">
            <button className="mt-6 px-6 py-3 bg-[#D4AF37] text-white rounded-full text-lg hover:scale-105 transition cursor-pointer">
              Browse All
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
