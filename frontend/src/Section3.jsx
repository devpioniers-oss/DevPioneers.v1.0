import React from 'react'
import {motion} from "framer-motion"
const Section3 = () => {
  
  return (
    <>
      <motion.section
      initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", duration: 0.8 }}
      className="mt-[100px] bg-gradient-to-b from-blue-900 to-sky-800 
                 w-[90%] mx-auto rounded-xl shadow-lg px-8 py-12 
                 flex flex-col justify-center min-h-[70vh]">
        <motion.div

         className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"   >

          <motion.div
          initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
           className="bg-gradient-to-b from-gray-900 to-sky-600 
                     w-[85%] min-h-[60vh] mx-auto rounded-xl  border-gray-5
                     shadow-lg p-6  text-center item-center justify-center " >
                      <h1 
                      className='text-white font-semibold text-3xl'
                      >Application web</h1>
                    <p className="mt-10 text-1xl text-white">Site web dynamique avec CMS personnalisé</p>
                    <div className='mb-4 mt-15'>
                       <a 
                       href=""
                       className='border px-3 py-3 bg-gradient-to-r from-gray-500 rounded-xl mt-6 to-sky-500 text-white'>
                        Demander Un Devis
                       </a>
                    </div>
                       <h5 className='text-1xl mt-16 text-white'>
                        Audit stratégique + prototypage UX/UI
                        Développement full-stack sur mesure
                        Intégration API tierces (CRM, ERP, etc.)
                         Maintenance évolutive + support premium
                       </h5>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-b from-gray-900 to-sky-600 
                     w-[85%] min-h-[60vh] mx-auto rounded-xl  border-gray-5
                     shadow-lg p-6  text-center item-center justify-center " >
                     <h1 
                      className='text-white font-semibold text-3xl'
                      >site  vitrine</h1>
                      <p className="mt-10 text-2xl text-white"> Création d’un site vitrine responsive</p>
                      <div className='mt-15 mb-4 '>
                         <a 
                       href=""
                       className='border px-3 py-3 bg-gradient-to-r from-gray-500 rounded-xl mt-6 to-sky-500 text-white'>
                        Demander Un Devis
                       </a>
                      </div>
                       <h5 className='text-1xl mt-16 text-white'>
                         Intégration de base SEO
                         Hébergement + nom de domaine inclus
                         Support technique 30 jours
                       </h5>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.6 }}
           className="bg-gradient-to-b from-gray-900 to-sky-600 
                     w-[85%] min-h-[60vh] mx-auto rounded-xl  border-gray-5
                     shadow-lg p-6  text-center item-center justify-center" >
                   <h1 
                      className='text-white font-semibold text-3xl'
                      >Site E-commerce</h1>
                      <p className="mt-10 text-1xl text-white">site professional avec des fonctionnalité </p>
                          <div className='mb-4 mt-15'>
                              <a 
                       href=""
                       className='border px-3 py-3 bg-gradient-to-r from-gray-500 rounded-xl  to-sky-500 text-white'>
                        Demander Un Devis
                       </a>
                          </div>
                       <h5 className='text-1xl mt-16 text-white'> 
                        Site web dynamique avec CMS personnalisé
                        Automatisation des tâches (formulaires, newsletters, etc.)
                        Optimisation SEO avancée
                       </h5>
                       
          </motion.div>
         </motion.div>
      </motion.section>
    </>
  )
}

export default Section3
