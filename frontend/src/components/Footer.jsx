import React from 'react'
import logo from "../assets/devpioneersLogo.png";
import { FaCopyright } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Footer = () => {
  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Solutions", path: "/solution" },
    { name: "Vision", path: "/vision" }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 mt-12 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto flex flex-col items-center space-y-8"
      >
        {/* Logo */}
        <img
          src={logo}
          alt="devpioneersLogo_png"
          className="h-16 md:h-20 object-contain"
        />

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-lg md:text-xl font-semibold text-gray-300 hover:text-sky-400 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Ligne séparatrice */}
        <div className="w-full border-t border-gray-700 pt-6"></div>

        {/* Copyright */}
        <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base">
          <FaCopyright className="text-white text-lg" />
          <span>
            {new Date().getFullYear()} &nbsp; DevPioneers. Tous droits réservés.
          </span>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
