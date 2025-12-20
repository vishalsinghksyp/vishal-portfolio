import React from "react";
import photo from "./photo.jpeg";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaCss3,
  FaHtml5,
} from "react-icons/fa";

const About = () => {
  const skills = [
    {
      name: "React",
      icon: <FaReact className="text-5xl text-blue-600 mb-2" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-5xl text-green-600 mb-2" />,
    },
    {
      name: "Python",
      icon: <FaPython className="text-5xl text-yellow-500 mb-2" />,
    },
    { name: "Java", icon: <FaJava className="text-5xl text-red-600 mb-2" /> },
    { name: "PHP", icon: <FaPhp className="text-5xl text-blue-600 mb-2" /> },
    { name: "CSS", icon: <FaCss3 className="text-5xl text-blue-400 mb-2" /> },
    {
      name: "HTML",
      icon: <FaHtml5 className="text-5xl text-orange-600 mb-2" />,
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white min-h-screen flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Profile Image */}
        <motion.div
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src={photo}
            alt="Vishal Singh"
            className="object-cover w-full h-full transition-transform duration-700 transform hover:scale-110"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-teal-400">
            About Me
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-6">
            I'm <span className="text-white font-semibold">Vishal Singh</span>,
            a passionate web developer specializing in creating elegant
            solutions with modern technologies. I love turning ideas into
            reality, ensuring that every project is built with precision and
            creativity.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-6">
            From full-stack development to designing intuitive user experiences,
            I bring a holistic approach to every project. Explore my work,
            including projects like{" "}
            <span className="text-teal-400 font-bold">Ashprint</span> and{" "}
            <span className="text-teal-400 font-bold">PassOP</span>, and let's
            create something amazing together.
          </p>

          {/* Skills and Frameworks */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-teal-400">
              Skills & Frameworks
            </h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative text-center cursor-pointer hover:scale-110 transform transition-transform"
                >
                  {skill.icon}
                  <p className="text-base md:text-lg text-gray-300 mt-2">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
