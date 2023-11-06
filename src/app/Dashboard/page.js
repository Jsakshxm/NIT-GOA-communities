"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { group } from "@/detail";

const getGroupColor = (index) => {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-gray-500",
  ];

  return colors[index % colors.length];
};

const Page = () => {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-blue-500 p-4"
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href="#" className="text-white text-2xl font-semibold">
            NIT Communities
          </Link>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-x-4"
          >
            <Link
              href="/"
              className="text-white hover:text-yellow-500 hover:transform hover:translate-y-2"
            >
              Home
            </Link>
            <Link
              href="/About"
              className="text-white hover:text-yellow-500 hover:transform hover:translate-y-2"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-white hover:text-yellow-500 hover:transform hover:translate-y-2"
            >
              sign out
            </Link>
          </motion.div>
        </div>
      </motion.nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center"
      >
        {group.map((group, index) => (
          <motion.div
            key={group.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="m-4"
          >
            <Link href={`/Dashboard/${group.name}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${getGroupColor(index)} hover:${getGroupColor(
                  index + 1
                )} text-white font-bold py-8 px-12 rounded-lg focus:outline-none focus:shadow-outline w-full`}
              >
                {group.name}
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Page;