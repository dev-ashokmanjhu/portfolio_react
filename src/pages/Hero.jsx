import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../constants/global';
import '../styles/pages/Hero.scss';

const Hero = () => {
  const codeString = "<FullStackDeveloper />";
  
  return (
    <section className="hero-section" id="home">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="animated-bg"></div>
      </div>
      
      <motion.div 
        className="container hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="text-content"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="name-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h1>
              Hi, I'm <span className="highlight">Ashok</span>
            </h1>
          </motion.div>

          <motion.div 
            className="code-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {codeString.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.2 + index * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            className="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            {personalInfo.shortBio}
          </motion.p>

          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <motion.a 
              href={personalInfo.resume}
              className="download-cv"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-download"></i>
              Download CV
            </motion.a>
            <motion.a 
              href="#contact"
              className="contact-us"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="developer-animation"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="coding-animation">
            <div className="screen">
              <div className="code-editor">
                <div className="editor-header">
                  <div className="circles">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="title">code.js</div>
                </div>
                <div className="code-content">
                  <div className="line-numbers">
                    {[...Array(8)].map((_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>
                  <div className="code-lines">
                    {[...Array(5)].map((_, index) => (
                      <motion.div
                        key={index}
                        className="code-line"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.random() * 50 + 50}%` }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 2.2 + index * 0.1,
                          repeat: Infinity,
                          repeatType: "reverse",
                          repeatDelay: Math.random() * 2
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="floating-elements">
                <div className="element react">
                  <i className="fab fa-react"></i>
                </div>
                <div className="element node">
                  <i className="fab fa-node-js"></i>
                </div>
                <div className="element database">
                  <i className="fas fa-database"></i>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1
        }}
      >
        <i className="fas fa-chevron-down"></i>
      </motion.div>
    </section>
  );
};

export default Hero;
