import React from "react";
import { motion } from "framer-motion";
import { FaDesktop, FaDatabase, FaShopify } from "react-icons/fa";

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
  className="mt-[100px] max-w-7xl mx-auto px-6 py-12 flex flex-col
   justify-center min-h-[70vh] bg-gradient-to-r from-blue-300 to-sky-900 rounded-xl shadow-lg"

    >
      <motion.div
        id="Section2"
        variants={containerVariants}
        className="grid grid-flow-col grid-rows-4 gap-6 space-x-8"
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
              Un site vitrine moderne, élégant et optimisé pour le référencement naturel (SEO),
               conçu pour captiver vos visiteurs, valoriser votre expertise et renforcer la 
               crédibilité de votre marque dès le premier regard.
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
           Développement d’applications web sur mesure, sécurisées et évolutives, intégrant des fonctionnalités
           avancées (authentification, dashboard, API, etc.) pour automatiser vos processus et améliorer votre
           productivité.
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
         Création de boutiques en ligne performantes, avec une expérience utilisateur fluide,
          un design responsive, une gestion simplifiée des produits et des paiements, 
          pour booster vos ventes et fidéliser vos clients.
         </p>

        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Section2;
