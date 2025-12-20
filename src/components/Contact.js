import React from "react";
import { motion } from "framer-motion";

// Contact info and SVG icons
const contactInfo = [
  {
    name: "GitHub",
    url: "https://github.com/vishalsinghksyp",
    svg: (
      <svg
        className="w-10 h-10 text-teal-400 group-hover:text-teal-500 transition-colors duration-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.16c-3.338.726-4.033-1.61-4.033-1.61-.546-1.386-1.334-1.754-1.334-1.754-1.09-.746.083-.731.083-.731 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.606-2.665-.303-5.466-1.334-5.466-5.933 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.53 11.53 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.242 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.625-5.475 5.922.43.37.823 1.1.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vishalsinghksyp/",
    svg: (
      <svg
        className="w-10 h-10 text-teal-400 group-hover:text-teal-500 transition-colors duration-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5C3.34 3.5 2 4.85 2 6.5s1.34 3 2.98 3C6.63 9.5 8 8.15 8 6.5S6.63 3.5 4.98 3.5zM2.4 21.5h5.16v-11H2.4v11zM9.6 10.5h4.92v1.5h.07c.68-1.28 2.34-2.63 4.82-2.63 5.16 0 6.12 3.4 6.12 7.82v8.31h-5.16v-7.36c0-1.75-.03-4-2.44-4-2.44 0-2.81 1.9-2.81 3.87v7.49H9.6v-11z" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:vishal0811singh@gmail.com",
    svg: (
      <svg
        className="w-10 h-10 text-teal-400 group-hover:text-teal-500 transition-colors duration-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16v16H4z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/vishalsinghksyp/",
    svg: (
      <svg
        className="w-10 h-10 text-teal-400 group-hover:text-teal-500 transition-colors duration-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.96.24 2.41.403a4.918 4.918 0 0 1 1.79 1.16c.515.515.873 1.122 1.16 1.79.163.451.348 1.242.403 2.41.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.96-.403 2.41a4.918 4.918 0 0 1-1.16 1.79 4.918 4.918 0 0 1-1.79 1.16c-.451.163-1.242.348-2.41.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.96-.24-2.41-.403a4.918 4.918 0 0 1-1.79-1.16 4.918 4.918 0 0 1-1.16-1.79c-.163-.451-.348-1.242-.403-2.41C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.055-1.17.24-1.96.403-2.41a4.918 4.918 0 0 1 1.16-1.79 4.918 4.918 0 0 1 1.79-1.16c.451-.163 1.242-.348 2.41-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.014 7.052.072 5.772.13 4.672.322 3.78.634a7.075 7.075 0 0 0-2.57 1.64A7.075 7.075 0 0 0 .634 4.78C.322 5.672.13 6.772.072 8.052.014 9.332 0 9.736 0 12c0 2.264.014 2.668.072 3.948.058 1.28.25 2.38.562 3.272a7.075 7.075 0 0 0 1.64 2.57 7.075 7.075 0 0 0 2.57 1.64c.892.312 1.992.504 3.272.562C8.332 23.986 8.736 24 12 24s3.668-.014 4.948-.072c1.28-.058 2.38-.25 3.272-.562a7.075 7.075 0 0 0 2.57-1.64 7.075 7.075 0 0 0 1.64-2.57c.312-.892.504-1.992.562-3.272.058-1.28.072-1.684.072-3.948s-.014-2.668-.072-3.948c-.058-1.28-.25-2.38-.562-3.272a7.075 7.075 0 0 0-1.64-2.57A7.075 7.075 0 0 0 20.22.634C19.328.322 18.228.13 16.948.072 15.668.014 15.264 0 12 0z" />
        <circle cx="12" cy="12" r="3.2" />
        <circle cx="18.4" cy="5.6" r="1.44" />
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-900 text-white min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-30" />
      <div className="relative z-10 text-center px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-teal-400">
          Connect With Me
        </h2>
        <p className="text-base md:text-lg mb-12">
          Feel free to connect with me on any platform below!
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {contactInfo.map(({ name, url, svg }) => (
            <motion.a
              key={name}
              href={url}
              target={name !== "Email" ? "_blank" : "_self"}
              rel={name !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={name}
              className="group relative bg-gray-800 p-4 rounded-full border-4 border-transparent hover:border-teal-400 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {svg}
            </motion.a>
          ))}
        </div>

        <p className="text-sm md:text-base mt-6">
          Email:{" "}
          <a
            href="mailto:vishal0811singh@gmail.com"
            className="text-teal-400 hover:text-teal-500"
          >
            vishal0811singh@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
