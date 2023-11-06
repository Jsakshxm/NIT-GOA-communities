"use client"
import { motion } from "framer-motion";
import Link from "next/link";

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-pink-400 to-purple-500 text-white"
    >
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="font-extrabold text-4xl mb-8"
      >
        NIT Community
      </motion.h1>
      <Link href="TandP_Login">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg mb-4"
        >
          T&P
        </motion.button>
      </Link>
      <Link href="Home">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-green-400 hover:bg-green-500 text-white py-3 px-6 rounded-lg"
        >
          Students
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Page;
