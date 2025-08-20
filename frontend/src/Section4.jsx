import React from 'react'
import { motion } from "framer-motion"


const Section4 = () => {
  return (
    <motion.section
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ type: "spring", duration: 1, damping: 15, stiffness: 120 }}
  className="mt-[100px] bg-gradient-to-r from-blue-300 to-sky-900 
                 w-[90%] mx-auto rounded-xl shadow-lg px-8 py-12 
                 flex flex-col justify-center min-h-[70vh]"
>
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.25 } // effet cascade
      }
    }}
    className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"    >

    {[
      { src: "/creativite.svg", title: "Automatisation" },
      { src: "/autimisation.svg", title: "Créativité" },
      { src: "/Efficiency-bro.svg", title: "Efficacité" }
    ].map((item, i) => (
      <motion.div
        key={i}
        variants={{
          hidden: { opacity: 0, y: 80, scale: 0.8 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 180,
              damping: 12
            }
          }
        }}
        className='bg-gradient-to-b from-blue-900 to-sky-500 border border-gray-200
                   mx-auto px-5 py-7 rounded-lg w-[90%] h-[60vh] 
                   flex flex-col shadow-xl/50 cursor-pointer justify-center items-center'
      >
        <img
          src={item.src}
          alt={item.title}
          className="h-[70%] object-contain"
        />
        <h3 className='mt-5 text-2xl rounded-lg bg-gradient-to-r 
                       from-violet-300 to-sky-400 px-3 py-2 text-white'>
          {item.title}
        </h3>
      </motion.div>
    ))}
  </motion.div>
</motion.section>

  )
}

export default Section4
