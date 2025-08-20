import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/devpioneersLogo.png";
import { IoMenuSharp, IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Services", path: "/services" },
    { name: "Solution", path: "/solution" },
    { name: "Vision", path: "/vision" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="flex items-center justify-between px-6 py-4 md:px-16">
        
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="DevPioneers Logo"
            className="w-36 md:w-48 lg:w-56"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-lg hover:text-sky-400 transition"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-sky-400 rounded-lg font-semibold hover:from-blue-700 hover:to-sky-500 transition"
          >
            Commencer
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-3xl" onClick={toggleMenu}>
          {isOpen ? <IoClose /> : <IoMenuSharp />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-200 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block mt-2 px-5 py-2 bg-gradient-to-r from-sky-500 to-violet-600 text-white rounded-full text-center"
          >
            Commencer
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
{/**/}