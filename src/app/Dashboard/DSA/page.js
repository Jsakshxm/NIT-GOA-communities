"use client"
import { group } from "@/detail";
import Link from "next/link";
import { motion } from "framer-motion";

const Page = () => {
  const dsaGroup = group.find((g) => g.name === "DSA");

  const listItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  };

  const buttonTransition = {
    type: "spring",
    stiffness: 150,
    duration: 0.5,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6"
      >
        Members of Group
      </motion.h1>
      <motion.ul
        initial="initial"
        animate="animate"
        variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-2 gap-2"
      >
        {dsaGroup &&
          dsaGroup.members.map((member, index) => (
            <motion.li
              key={index}
              variants={listItemVariants}
              className="p-2 bg-gray-100 rounded-md"
            >
              {member}
            </motion.li>
          ))}
      </motion.ul>
      <div className="text-center my-5">
        <motion.div variants={buttonVariants}>
          <Link href="/chat">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial="initial"
              animate="animate"
              transition={buttonTransition}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
            >
              CHAT
            </motion.button>
          </Link>
        </motion.div>
        <motion.div variants={buttonVariants}>
          <Link href="http://localhost:3002/react-rtc-demo">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial="initial"
              animate="animate"
              transition={buttonTransition}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
            >
              Start Video meet
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
