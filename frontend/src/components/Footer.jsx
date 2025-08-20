import React from 'react'
import logo  from "../assets/devpioneersLogo.png";
import {motion} from "framer-motion"
const Footer = () => {
  return (
    <>
       <footer 
       className='border bg-gradient-to-r from-gray-900 to-gray-900 mt-6'
       >
        <motion.div>
           <img src={logo} alt="devpioneersLogo_png" className='h-20 mx-auto'/>
           <div>
            
           </div>
        </motion.div>
       </footer>
    </>
  )
}

export default Footer
