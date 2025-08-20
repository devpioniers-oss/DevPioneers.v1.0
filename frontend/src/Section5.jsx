import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
const Section5 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 120, damping: 15, duration: 0.8 }}
      className="mt-[100px] bg-gradient-to-r from-green-300 to-green-800 
                 w-full min-h-[60vh] px-6 py-12 flex items-center"
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.4 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between 
                   gap-8 w-full max-w-7xl mx-auto"
      >
        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.3 }}
          className="text-2xl sm:text-3xl lg:text-5xl text-white font-bold 
                     text-center lg:text-left leading-snug"
        >
          Vous avez un projet de site ou d’application web ?
        </motion.h1>

        {/* Paragraphe */}
        <p className="text-sm sm:text-base lg:text-xl text-white text-center lg:text-left 
                      lg:w-[55%] w-full leading-relaxed">
          Confiez-nous la création de vos sites internet et de vos applications mobiles pour donner un nouvel élan à votre entreprise.
          Nous concevons des solutions modernes, performantes et adaptées à vos besoins, afin de renforcer votre visibilité, 
          d’attirer plus de clients et de booster durablement votre croissance.
        </p>

        {/* Bouton */}
        <Link
         to="/contact"
         className='w-[50%]'
        >
        <a
              href="#"
              className="inline-block px-6 py-3 rounded-xl text-lg font-semibold 
                         text-white bg-gradient-to-r from-green-500 to-green-600 w-[90%] 
                         hover:scale-105 transform transition duration-300 shadow-lg 
                         text-center item-center"
            >
               Nous Rejoindre
            </a>
        </Link>
      </motion.div>
    </motion.section>
  )
}

export default Section5
