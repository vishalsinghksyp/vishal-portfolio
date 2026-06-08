import React from "react";
import photo from "./photo.jpeg";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaCss3,
  FaHtml5,
} from "react-icons/fa";
import { SiExpress, SiJavascript } from "react-icons/si";
import { TbLetterC } from "react-icons/tb";
import { SiMongodb, SiMysql } from "react-icons/si";
import { SiFastapi, SiLangchain, SiNextdotjs } from "react-icons/si";
import { MdOutlinePsychology } from "react-icons/md";

const About = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-5xl text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-5xl text-white" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-5xl text-yellow-400" />,
    },
    { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-600" /> },
    { name: "Express", icon: <SiExpress className="text-5xl text-gray-300" /> },
    { name: "Python", icon: <FaPython className="text-5xl text-yellow-500" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-5xl text-teal-400" /> },
    {
      name: "LangChain",
      icon: <SiLangchain className="text-5xl text-green-400" />,
    },
    {
      name: "AI / ML",
      icon: <MdOutlinePsychology className="text-5xl text-purple-400" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-5xl text-green-500" />,
    },
    { name: "SQL", icon: <SiMysql className="text-5xl text-blue-500" /> },

    { name: "Java", icon: <FaJava className="text-5xl text-red-600" /> },
    { name: "C", icon: <TbLetterC className="text-5xl text-blue-300" /> },
    { name: "HTML", icon: <FaHtml5 className="text-5xl text-orange-600" /> },
    { name: "CSS", icon: <FaCss3 className="text-5xl text-blue-400" /> },
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
            a Software Engineer specializing in full-stack development, AI
            systems, and intelligent applications. I build scalable web
            platforms, modern backend services, and production-ready solutions
            powered by LLMs, multi-agent architectures, and retrieval-augmented
            generation (RAG).
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-6">
            I focus on building software that is reliable, efficient, and solves
            real-world problems. My projects include{" "}
            <span className="text-teal-400 font-bold">Arc Reactor AI</span>, an
            autonomous multi-agent research pipeline, and{" "}
            <span className="text-teal-400 font-bold">PassOP</span>, a secure
            full-stack password manager. From AI-driven applications to
            end-to-end web platforms, I enjoy transforming complex ideas into
            practical and impactful products.
          </p>

          {/* Skills */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-teal-400">
              Skills & Frameworks
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center text-center cursor-pointer hover:scale-110 transition-transform"
                >
                  <div className="flex items-center justify-center">
                    {skill.icon}
                  </div>

                  <p className="text-base md:text-lg text-gray-300 mt-1">
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
