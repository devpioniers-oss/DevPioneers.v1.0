import React from "react";
import { motion } from "framer-motion";
import { FaDesktop, FaDatabase, FaShopify } from "react-icons/fa";

// ✅ Variants pour container et cards
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      damping: 20,
      stiffness: 120,
      staggerChildren: 0.3, // effet cascade
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 18 },
  },
};

const Section2 = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="mt-[100px] bg-gradient-to-r from-blue-300 to-sky-900 
                 w-[90%] mx-auto rounded-xl shadow-lg px-8 py-12 
                 flex flex-col justify-center min-h-[70vh]"
    >
      <motion.div
        id="Section2"
        variants={containerVariants}
        className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
      >
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-to-r from-gray-700 to-sky-600 
                     min-h-[40vh] rounded-xl 
                     shadow-lg p-6 flex flex-col text-center"
        >
          <FaDesktop className="text-5xl mb-4" />
          <h1 className="text-2xl font-extrabold text-white mb-2">
            Site vitrine
          </h1>
          <p className="text-lg text-gray-200">
            Un site vitrine moderne et professionnel pour présenter vos
            services et renforcer l’image de votre marque.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-to-r from-gray-700 to-sky-600 
                     min-h-[40vh] rounded-xl 
                     shadow-lg p-6 flex flex-col text-center"
        >
          <FaDatabase className="text-5xl mb-4 " />
          <h1 className="text-2xl font-extrabold text-white mb-2">
            Application web
          </h1>
          <p className="text-lg text-gray-200">
            Création d’applications web sur mesure, performantes et
            adaptées à vos besoins spécifiques.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-to-r from-gray-700 to-sky-600 
                     min-h-[40vh] rounded-xl 
                     shadow-lg p-6 flex flex-col text-center"
        >
          <FaShopify className="text-5xl mb-4 " />
          <h1 className="text-2xl font-extrabold text-white mb-2">
            E-commerce
          </h1>
          <p className="text-lg text-gray-200">
            Conception de boutiques en ligne modernes et responsives,
            mettant en valeur votre activité.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Section2;
