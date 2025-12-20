import React from "react";
import { motion } from "framer-motion";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";

const projects = [
  {
    title: "Ashprint",
    description:
      "Ashprint is an automated printing system designed to organize and streamline print requests using a Raspberry Pi. Users upload documents via a web interface, and the system processes print jobs in a first-come-first-served manner, reducing manual workload and chaos in print shops.",
    image: image1,
    link: "https://ashprint-frontend.onrender.com/",
  },
  {
    title: "PassOP",
    description:
      "PassOP is a secure password management web application focused on real-world performance. It supports encrypted credential storage, fast search, local caching to reduce unnecessary API calls, and an optimized UI for better perceived performance in production environments.",
    image: image2,
    link: "https://passop-frontendd.vercel.app/",
  },
  {
    title: "Vishal Singh Portfolio",
    description:
      "This very portfolio showcases my skills, projects, and web development abilities using React, Tailwind CSS, and Framer Motion.",
    image: image3,
    link: process.env.REACT_APP_PORTFOLIO_URL,
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col transition-transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg mb-4 transition-transform hover:scale-105 border border-black hover:border-yellow-500"
        />
        <h3 className="text-2xl font-bold mb-3 text-teal-400">
          {project.title}
        </h3>
      </a>

      <p className="text-gray-300 text-justify flex-grow leading-relaxed">
        {project.description}
      </p>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center rounded-md border border-teal-400 px-4 py-2 text-sm font-medium text-teal-400 hover:bg-teal-400 hover:text-gray-900 transition-colors"
      >
        View Project →
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-900 text-white min-h-screen relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-700 via-gray-900 to-black opacity-60" />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-extrabold mb-8 text-center text-teal-400">
          Projects
        </h2>
        <p className="text-lg text-center mb-12">
          Discover some of my most recent and impactful projects. Click on the
          links to explore further.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
