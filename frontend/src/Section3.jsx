import React from 'react'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
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
                       <p className="mt-10 text-3xl text-white">
                      Développement d’applications web dynamiques avec CMS personnalisé, 
                      conçues pour automatiser vos processus métier, améliorer l’expérience utilisateur
                      et garantir une évolutivité optimale.
                       </p>                
                  <div className='mb-4 mt-15'>
                       <Link
                        to="/services"
                       >
                       <a 
                       href=""
                       className='border px-3 py-3 bg-gradient-to-r from-gray-500 rounded-xl mt-6 to-sky-500 text-white'>
                        Demander Un Devis
                       </a>
                       
                       </Link>
                    </div>
                     
                     <h5 className='text-3xl mt-16 text-white'>
                       Audit stratégique & prototypage UX/UI<br/>
                       Développement full-stack sur mesure<br/>
                       Intégration d’API tierces (CRM, ERP, etc.)<br/>
                       Maintenance évolutive & support premium
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
                       <p className="mt-10 text-3xl text-white">
                        Création de sites vitrines responsives, élégants et optimisés pour
                         le référencement naturel, afin de valoriser votre image de marque et
                          capter l’attention de vos visiteurs dès la première seconde.
                         </p>     
                                      <div className='mt-15 mb-4 '>
                       <Link
                        to="/services"
                       >
                       <a 
                       href=""
                       className='border px-3 py-3 bg-gradient-to-r from-gray-500 rounded-xl mt-6 to-sky-500 text-white'>
                        Demander Un Devis
                       </a>
                       
                       </Link>
                      </div>
                    
                      <h5 className='text-3xl mt-16 text-white'>
                       SEO de base intégré<br/>
                       Hébergement + nom de domaine inclus<br/>
                       Support technique pendant 30 jours
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
              <p className="mt-10 text-3xl text-white">
                Conception de boutiques en ligne professionnelles avec fonctionnalités avancées,
                 pour booster vos ventes, simplifier la gestion des produits et offrir une expérience
                  client fluide.
                   </p>                     
                     <div className='mb-4 mt-15'>
                               <Link
                        to="/services"
                       >
                       <a 
                       href=""
                       className='border px-3 py-3 bg-gradient-to-r from-gray-500 rounded-xl mt-6 to-sky-500 text-white'>
                        Demander Un Devis
                       </a>
                       
                       </Link>
                          </div>
                           <h5 className='text-3xl mt-16 text-white'>
                             CMS personnalisé & gestion intuitive<br/>
                             Automatisation (formulaires, newsletters, etc.)<br/>
                             Optimisation SEO avancée
                             </h5>
          </motion.div>
         </motion.div>
      </motion.section>
    </>
  )
}

export default Section3
