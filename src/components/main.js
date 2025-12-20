import React, { useState } from "react";
import { motion } from "framer-motion";

const NextPage = () => {
  const [hoveredElement, setHoveredElement] = useState(null);

  const handleScrollDownClick = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-auto">
      <motion.div
        className="h-screen w-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className={`absolute inset-0 ${
              hoveredElement === "scroll"
                ? "bg-gradient-to-r from-gray-700 to-gray-900 opacity-70"
                : "bg-gradient-to-r from-gray-600 to-gray-900 opacity-50"
            }`}
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(200% at 50% 50%)" }}
            transition={{ duration: 8, ease: "easeInOut" }}
          />
          <motion.div
            className={`absolute inset-0 ${
              hoveredElement === "scroll"
                ? "bg-gradient-to-l from-gray-800 to-black opacity-60"
                : "bg-gradient-to-l from-gray-700 to-black opacity-40"
            }`}
            initial={{ clipPath: "circle(0% at 70% 70%)" }}
            animate={{ clipPath: "circle(200% at 70% 70%)" }}
            transition={{ duration: 10, ease: "easeInOut", delay: 1 }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-white text-7xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            onMouseEnter={() => setHoveredElement("title")}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <span
              className={`transition-colors ${
                hoveredElement === "title" ? "text-teal-400" : "text-white"
              }`}
            >
              Vishal Singh
            </span>
          </motion.h1>
          <motion.p
            className="text-white text-3xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            onMouseEnter={() => setHoveredElement("tagline")}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <span
              className={`transition-colors ${
                hoveredElement === "tagline" ? "text-teal-300" : "text-white"
              }`}
            >
              Transforming Ideas Into Code
            </span>
          </motion.p>

          {/* Download CV Button */}
          <div className="flex flex-col gap-6">
            <motion.button
              className={`px-10 py-4 ${
                hoveredElement === "cv"
                  ? "bg-gradient-to-r from-blue-800 to-teal-700"
                  : "bg-gradient-to-r from-blue-600 to-teal-500"
              } text-white rounded-lg shadow-lg transition-transform transform-gpu`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              onMouseEnter={() => setHoveredElement("cv")}
              onMouseLeave={() => setHoveredElement(null)}
            >
              <a href="/vishalsinghresume-2.pdf" download>
                Download CV
              </a>
            </motion.button>
          </div>
        </div>

        {/* Scroll Down Button */}
        <div className="absolute bottom-8 flex flex-col items-center">
          <motion.div
            className="text-white text-xl flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
            onMouseEnter={() => setHoveredElement("scroll")}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <button
              className="relative flex flex-col items-center cursor-pointer"
              onClick={handleScrollDownClick}
            >
              <motion.svg
                className={`w-12 h-12 mb-2 transition-transform ${
                  hoveredElement === "scroll"
                    ? "animate-pulse"
                    : "animate-bounce"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <path d="M5 15l7 7 7-7" />
              </motion.svg>
              <span
                className={`text-lg transition-colors ${
                  hoveredElement === "scroll" ? "text-teal-400" : "text-white"
                }`}
              >
                Scroll Down
              </span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default NextPage;
