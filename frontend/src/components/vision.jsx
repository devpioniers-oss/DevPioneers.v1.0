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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="mt-[100px] min-h-[90vh]"
    >
      {/*  Titre */}
      <motion.h1
        variants={cardVariants}
        className="text-6xl mx-10 mt-16 text-white"
      >
        Nos Vision
      </motion.h1>
      <motion.hr
        variants={cardVariants}
        className="mt-5 p-6 border-gray-400"
      />

      {/*  Première ligne */}
      <motion.div
        variants={containerVariants}
        className="flex flex-wrap justify-center items-center gap-5 mt-10"
      >
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="border border-gray-300 bg-gradient-to-r from-blue-700 to-sky-900 
                     w-[40%] h-[60vh] rounded-xl shadow-lg text-center text-white"
        >
          <h1 className='text-4xl font-bold mt-10'>Inclusion Digitale</h1>
          <h4 className='text-2xl mt-10'>Rendre la technologie accessible à tous, 
           quel que soit le niveau social, géographique ou éducatif.</h4>
          <p className='mt-10 text-xl'>Objectif : Combler la fracture numérique en Afrique
Actions : Solutions simples, multilingues, accessibles sur mobile
Impact : Autonomisation des citoyens, accès à l’information, à l’éducation et aux services</p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="border border-gray-300 bg-gradient-to-r from-blue-700 to-sky-900 
                     w-[40%] h-[60vh] rounded-xl shadow-lg text-white text-center"
        >
          {/*  contenu */}
          <h1 className='text-4xl font-bold mt-10'>Innovation Utile</h1>
          <h4 className='text-2xl mt-10'>Créer des solutions qui répondent à des besoins réels
              et qui transforment le quotidien.</h4>
          <p className='mt-10 text-xl'>Objectif : Prioriser l’impact avant la complexité technique
             Actions  Applications pour la santé, l’agriculture, l’éducation, le commerce local
             Impact  Amélioration directe de la qualité de vie et des services</p>
        </motion.div>
      </motion.div>

      {/*  Deuxième ligne */}
      <motion.div
        variants={containerVariants}
        className="flex flex-wrap justify-center items-center gap-5 mt-10 text-white item-center"
      >
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="border border-gray-300 bg-gradient-to-r from-blue-700 to-sky-900 
                     w-[40%] h-[60vh] rounded-xl shadow-lg item-center text-center"
        >
          {/*  contenu */}
          <h1 className='text-4xl font-bold mt-10'> Technologie Responsable</h1>
          <h4 className='text-2xl mt-10'>Développer avec éthique, durabilité et sécurité.</h4>
          <p className='mt-10 text-xl'> Objectif : Créer des outils qui respectent les données, les cultures et les usages locaux
Actions : Hébergement sécurisé, respect de la vie privée, design inclusif
Impact : Confiance des utilisateurs, adoption durable</p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="border border-gray-300 bg-gradient-to-r from-blue-700 to-sky-900 
                     w-[40%] h-[60vh] rounded-xl shadow-lg item-center text-center"
        >
          {/*  contenu */}
          <h1 className='text-4xl font-bold mt-10'> Automatisation Intelligente</h1>
          <h4 className='text-2xl mt-10'>Former, inspirer et équiper les talents africains pour qu’ils deviennent acteurs du changement.</h4>
          <p className='mt-10 text-xl'>Objectif : Créer un écosystème tech africain fort
Actions : Ateliers, partenariats, mentorat, open source
Impact : Création d’emplois, montée en compétence, innovation locale</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Vision
