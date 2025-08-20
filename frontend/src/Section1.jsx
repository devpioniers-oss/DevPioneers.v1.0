import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
const Section1 = () => {
  const navItems = [
    { name: "Services", path: "/services" },
    { name: "Solution", path: "/solution" },
    { name: "Vision", path: "/vision" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        damping: 25,
        delay: 0.3,
        duration: 0.8,
      }}
      className="mt-[100px] bg-sky-800/100 min-h-[70vh] bg-gradient-to-r from-blue-300 to-sky-900
       w-[90%] mx-auto rounded-xl shadow-lg px-8 py-12 flex flex-col justify-center"
    >
      <motion.div 
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        damping: 35,
        delay: 1.3,
        duration: 0.8,
      }}
      className="flex flex-col items-start justify-center space-y-6 max-w-3xl">
        {/* Titre */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-snug">
            TRANSFORMER VOTRE ENTREPRISE  AVEC DES SOLUTION NUMERIQUE INNOVANTE       
         </h1>

        {/* Paragraphe */}
        <p className="text-gray-200 text-lg">
          NOUS FOURNISSIONS DES SOLUTIONS TESCHNOLOGIQUES DE POINTE  POUR AIDER LES ENTREPRISE  
           A PROSPORER DANS LE MONDE NUM2RIQUE MODERNE
        </p>

      {/* CTA */}
<Link to="/services">
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-block px-6 py-3 bg-gradient-to-r md:w-[30vw] text-center
     from-blue-600 to-sky-400 text-white font-bold rounded-lg 
     shadow-md hover:from-blue-700 hover:to-sky-500 transition-all duration-300"
  >
    En savoir plus
  </motion.div>
</Link>
      </motion.div>
    </motion.section>
  )
}

export default Section1
