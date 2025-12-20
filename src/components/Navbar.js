import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleScrollToMain = () => {
    document.getElementById("main").scrollIntoView({ behavior: "smooth" });
    closeMobileMenu();
  };

  const handleReload = () => {
    // Reloads the page
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-4 px-6 shadow-lg z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <button
            onClick={handleReload} // Reloads the page on click
            className="hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-105 group"
          >
            <span className="text-teal-400 font-mono group-hover:text-pink-400">
              {"< "}
            </span>
            <span className="text-pink-400 font-bold group-hover:text-white">
              विशाल{" "}
            </span>
            <span className="text-white font-bold group-hover:text-teal-400">
              सिंह
            </span>
            <span className="text-teal-400 font-mono group-hover:text-pink-400">
              {" />"}
            </span>
          </button>
        </div>

        <div className="hidden lg:flex space-x-6">
          <a
            href="#main"
            className="text-teal-400 flex items-center space-x-1 font-bold hover:text-white transition-colors"
          >
            <span>Home</span>
          </a>
          <a
            href="#about"
            className="text-green-400 flex items-center space-x-1 font-bold hover:text-white transition-colors"
          >
            <span>About</span>
          </a>
          <a
            href="#projects"
            className="text-blue-400 flex items-center space-x-1 font-bold hover:text-white transition-colors"
          >
            <span>Projects</span>
          </a>
          <a
            href="#contact"
            className="text-pink-400 flex items-center space-x-1 font-bold hover:text-white transition-colors"
          >
            <span>Contact</span>
          </a>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            className="text-white hover:text-teal-400"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-90 z-40 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="absolute top-4 right-6">
          <button
            className="text-white hover:text-teal-400"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center space-y-8 h-full">
          <a
            href="#main"
            onClick={toggleMobileMenu}
            className="text-white text-2xl font-bold transition-colors active:text-teal-400"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={toggleMobileMenu}
            className="text-white text-2xl font-bold transition-colors active:text-green-400"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={toggleMobileMenu}
            className="text-white text-2xl font-bold transition-colors active:text-blue-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={toggleMobileMenu}
            className="text-white text-2xl font-bold transition-colors active:text-pink-400"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
