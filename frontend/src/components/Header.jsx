import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import logo from "../assets/devpioneersLogo.png";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full 
      h-16 z-50 flex items-center justify-between  px-2 py-3
      px-6 border-b border-gray-700 bg-gray-900 text-white">
      
      {/* Logo DevPioneers */}
      <motion.div
        initial={{ opacity: 1,y:-50 }}
        animate={{ opacity: 3, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, damping: 25 }}
        className="flex items-center"
      >
        <img src={logo} alt="DevPioneers logo" className="h-16 w-auto font-extrabold" />
      </motion.div>

     {/* Navigation desktop */}
<motion.nav 
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0, y: -20 },
    visible: {opacity: 1,y: 0},
    transition: {delayChildren: 0.4, staggerChildren: 0.2,   }
  }}
  className="hidden md:flex space-x-6"
>
        {["Services", "Solution", "Vision", "Contact"].map((item, index) => (
          <a
            key={index}
            href="#"
            className="hover:text-blue-400 transition space-x-4 text-1xl"
          >
            {item}
          </a>
        ))}
      </motion.nav>

      {/* Bouton commencer */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, damping: 20 }}
        className="hidden md:block"
      >
        <a
          href="#"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-1xl rounded-lg transition"
        >
          Commencer
        </a>
      </motion.div>

      {/* Mobile menu button */}
      <button onClick={toggleMenu} className="md:hidden text-2xl">
        {isOpen ? <MdClose /> : <MdMenu />}
      </button>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.4 }}
  className="absolute top-16 left-1 right-1
             w-[100%] bg-gray-800 
             flex flex-col items-start space-y-4 
             py-6  shadow-lg 
             border border-gray-700"
>
  {["Services", "Solution", "Vision", "Contact"].map((item, index) => (
    <motion.a
      key={index}
      href="#"
      className="text-lg text-gray-200  hover:text-blue-400 transition"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 * index }}
      onClick={() => setIsOpen(false)}
    >
      {item}
    </motion.a>
  ))}

  <motion.a
    href="#"
    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 
               rounded-lg transition shadow-md"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 * (["Services", "Solution", "Vision", "Contact"].length) }}
    onClick={() => setIsOpen(false)}
  >
    Commencer
  </motion.a>
</motion.div>

      )}
    </header>
  );
};

export default Header;
