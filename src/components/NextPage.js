import React from 'react';
import Navbar from './Navbar';
import Main from './main'; // Ensure Main component is correctly imported
import About from './About';
import Project from './Projects'; // Ensure Project component is correctly imported
import Contact from './Contact';

const NextPage = () => {
  return (
    <div className="nextpage-container">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <section id="main" className="min-h-screen">
        <Main />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen">
        <About />
      </section>
      {/* Projects Section */}
      <section id="projects" className="min-h-screen">
        <Project />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </div>
  );
};

export default NextPage;
