import React from 'react'
import { motion } from "framer-motion"

//  Variants globaux
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
      staggerChildren: 0.2, // effet cascade
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 180, damping: 15 },
  },
}

const Vision = () => {
  return (
   <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
    className="min-h-[90vh]"
  >
    {/* Titre */}
    <motion.h1
      variants={cardVariants}
      className="text-4xl sm:text-5xl lg:text-6xl font-bold  text-white"
    >
      Nos Visions
    </motion.h1>

    <hr className='mt-10 w-[100%]'/>

    {/* Grid principale */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
      {/* Inclusion Digitale */}
      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="border border-gray-300 bg-gradient-to-r from-blue-700 to-sky-900 
                   rounded-xl shadow-lg text-center text-white p-6"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">Inclusion Digitale</h1>
        <h4 className="text-lg sm:text-xl mt-6">
          Rendre la technologie accessible à tous, quel que soit le niveau social, géographique ou éducatif.
        </h4>
        <p className="mt-6 text-base sm:text-lg">
          <strong>Objectif :</strong> Combler la fracture numérique en Afrique <br />
          <strong>Actions :</strong> Solutions simples, multilingues, accessibles sur mobile <br />
          <strong>Impact :</strong> Autonomisation des citoyens, accès à l’information, à l’éducation et aux services
        </p>
      </motion.div>

      {/* Innovation Utile */}
      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="border border-gray-300 bg-gradient-to-r from-blue-700 to-sky-900 
                   rounded-xl shadow-lg text-center text-white p-6"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">Innovation Utile</h1>
        <h4 className="text-lg sm:text-xl mt-6">
          Créer des solutions qui répondent à des besoins réels et qui transforment le quotidien.
        </h4>
        <p className="mt-6 text-base sm:text-lg">
          <strong>Objectif :</strong> Prioriser l’impact avant la complexité technique <br />
          <strong>Actions :</strong> Santé, agriculture, éducation, commerce local <br />
          <strong>Impact :</strong> Amélioration directe de la qualité de vie et des services
        </p>
      </motion.div>

      {/* Technologie Responsable */}
      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="border border-gray-300 bg-gradient-to-r from-blue-700 to-sky-900 
                   rounded-xl shadow-lg text-center text-white p-6"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">Technologie Responsable</h1>
        <h4 className="text-lg sm:text-xl mt-6">
          Développer avec éthique, durabilité et sécurité.
        </h4>
        <p className="mt-6 text-base sm:text-lg">
          <strong>Objectif :</strong> Respect des données et cultures locales <br />
          <strong>Actions :</strong> Sécurité, vie privée, design inclusif <br />
          <strong>Impact :</strong> Confiance et adoption durable
        </p>
      </motion.div>

      {/* Automatisation Intelligente */}
      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="border border-gray-300 bg-gradient-to-r from-blue-700 to-sky-900 
                   rounded-xl shadow-lg text-center text-white p-6"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">Automatisation Intelligente</h1>
        <h4 className="text-lg sm:text-xl mt-6">
          Former, inspirer et équiper les talents africains pour qu’ils deviennent acteurs du changement.
        </h4>
        <p className="mt-6 text-base sm:text-lg">
          <strong>Objectif :</strong> Créer un écosystème tech africain fort <br />
          <strong>Actions :</strong> Ateliers, partenariats, mentorat, open source <br />
          <strong>Impact :</strong> Création d’emplois, montée en compétence, innovation locale
        </p>
      </motion.div>
    </div>
  </motion.div>
</div>

  )
}

export default Vision
