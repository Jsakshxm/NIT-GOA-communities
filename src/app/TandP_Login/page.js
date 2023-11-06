"use client"
import { motion } from "framer-motion";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-pink-400 to-purple-500">
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mb-6 text-center text-gray-800"
        >
          Login for T&P Members
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-between space-x-4"
        >
          <Link href="/Dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </motion.button>
          </Link>

          <Link href="/Home">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-green-400 hover:bg-green-500 text-white py-3 px-6 rounded"
            >
              Students
            </motion.button>
          </Link>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default Page;
