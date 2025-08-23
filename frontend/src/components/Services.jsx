import { motion } from "framer-motion";
import React from "react";

const Services = () => {
  const packVitrine = [
    { list: "DESIGN RESPONSIVE ET MODERNE" },
    { list: "OPTIMISATION SEO (RÉFÉRENCEMENT NATUREL)" },
    { list: "INTÉGRATION DE CONTENU MULTIMÉDIA" },
    { list: "FORMULAIRE DE CONTACT ET INTERACTION" },
    { list: "ANALYSE ET SUIVI DES VISITEURS" },
  ];

  const packEcommerce = [
    { list: "PLATEFORME E-COMMERCE PERSONNALISÉE" },
    { list: "CATALOGUE DE PRODUITS ET GESTION" },
    { list: "PAIEMENT D’ACHATS" },
    { list: "PAIEMENT SÉCURISÉ" },
    { list: "GESTION DES COMMANDES" },
    { list: "ESPACE CLIENTÈLE / HÉBERGEMENT" },
    { list: "NOM DE DOMAINE PAR DÉFAUT" },
    { list: "RESPONSIVE DESIGN" },
  ];

  const packAppWeb = [
    { list: "DÉVELOPPEMENT D'APPLICATIONS WEB PERSONNALISÉES" },
    { list: "INTÉGRATION D'API ET SERVICES EXTERNES" },
    { list: "OPTIMISATION DES PERFORMANCES" },
    { list: "MAINTENANCE ET SUIVI" },
    { list: "SÉCURITÉ DES DONNÉES" },
  ];

  // Conteneur global (stagger cascade)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, 
        delayChildren: 0.2,   
      },
    },
  };

  // Animation pour les cartes
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.2, 0.65, 0.2, 1] },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 30px rgba(0,0,0,0.3)",
      transition: { duration: 0.3 },
    },
  };

  // Animation pour les listes internes
  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="mt-40"
    >
      {/* Titre */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-start my-12 mx-6 md:mx-16 lg:mx-32"
      >
        <h1 className="text-5xl font-bold text-white">Nos Services</h1> <hr className="border-white mt-10 w-full" />
      </motion.div>

      {/* Conteneur avec cascade */}
      <motion.div
        variants={containerVariants}
        className="bg-gradient-to-r from-blue-800 to-sky-900 rounded-xl shadow-xl mx-6 md:mx-16 lg:mx-32 px-6 py-12"
      >
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/*  Carte 1  */}
          <motion.div variants={cardVariants} whileHover="hover" className="bg-gradient-to-r from-blue-700 to-sky-800 rounded-xl shadow-xl p-6 text-center">
            <h1 className="text-white text-3xl font-bold">Site vitrine</h1>
            <p className="mt-4 text-white text-lg">
              Un site vitrine moderne, élégant et optimisé pour le SEO
            </p>
            <motion.a
              whileHover={{ scale: 1.1, backgroundColor: "#0ea5e9" }}
              whileTap={{ scale: 0.95 }}
              href="/devis?pack=vitrine"
              className="inline-block mt-6 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-200 to-sky-300 text-white font-semibold"
            >
              Demander un devis
            </motion.a>
            <motion.ul variants={containerVariants} className="mt-6 text-start">
              {packVitrine.map((item, i) => (
                <motion.li
                  key={i}
                  variants={listVariants}
                  className="text-white text-lg mt-2 list-disc list-inside"
                >
                  {item.list}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ----------- Carte 2 ----------- */}
          <motion.div variants={cardVariants} whileHover="hover" className="bg-gradient-to-r from-blue-700 to-sky-800 rounded-xl shadow-xl p-6 text-center">
            <h1 className="text-white text-3xl font-bold">E-commerce</h1>
            <p className="mt-4 text-white text-lg">
              Un site e-commerce moderne, sécurisé et optimisé pour la vente
            </p>
            <motion.a
              whileHover={{ scale: 1.1, backgroundColor: "#0ea5e9" }}
              whileTap={{ scale: 0.95 }}
              href="/devis?pack=ecommerce"
              className="inline-block mt-6 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-200 to-sky-300 text-white font-semibold"
            >
              Demander un devis
            </motion.a>
            <motion.ul variants={containerVariants} className="mt-6 text-start">
              {packEcommerce.map((item, i) => (
                <motion.li
                  key={i}
                  variants={listVariants}
                  className="text-white text-lg mt-2 list-disc list-inside"
                >
                  {item.list}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ----------- Carte 3 ----------- */}
          <motion.div variants={cardVariants} whileHover="hover" className="bg-gradient-to-r from-blue-700 to-sky-800 rounded-xl shadow-xl p-6 text-center">
            <h1 className="text-white text-3xl font-bold">Application Web</h1>
            <p className="mt-4 text-white text-lg">
              Une application web moderne, performante et sécurisée
            </p>
            <motion.a
              whileHover={{ scale: 1.1, backgroundColor: "#0ea5e9" }}
              whileTap={{ scale: 0.95 }}
              href="/devis?pack=app-web"
              className="inline-block mt-6 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-200 to-sky-300 text-white font-semibold"
            >
              Demander un devis
            </motion.a>
            <motion.ul variants={containerVariants} className="mt-6 text-start">
              {packAppWeb.map((item, i) => (
                <motion.li
                  key={i}
                  variants={listVariants}
                  className="text-white text-lg mt-2 list-disc list-inside"
                >
                  {item.list}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
