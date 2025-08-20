import React from 'react'
import { motion } from 'framer-motion'

const Section6 = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mt-[100px] w-[100%] mx-auto text-center py-12 px-6 
                   bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl shadow-xl"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3 }
            }
          }}
        >
          {/* Titre */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            DevPioneers, c’est l’avant-garde du changement.
          </motion.h1>

          {/* Texte */}
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8"
          >
            Chez <span className="font-semibold text-green-300">DevPioneers</span>, nous ne suivons pas la révolution digitale — 
            <span className="font-semibold text-sky-300"> nous la portons.</span>  
            <br />
            Notre objectif est simple mais ambitieux : créer des solutions innovantes dans
            chaque secteur, pour transformer les usages, impacter les vies et redéfinir les standards.
          </motion.h3>

          {/* Bouton */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            <a
              href="#"
              className="inline-block px-6 py-3 rounded-xl text-lg font-semibold 
                         text-white bg-gradient-to-r from-blue-500 to-sky-600 w-[30%] 
                         hover:scale-105 transform transition duration-300 shadow-lg"
            >
              Voir plus
            </a>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default Section6
