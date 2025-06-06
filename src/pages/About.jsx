import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../constants/global';
import '../styles/pages/About.scss';
import profile from '../assets/profile.png';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="about-section" id="about">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          ABOUT ME
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-image"
            variants={itemVariants}
          >
            <div className="image-container">
              <img src={profile} alt="Profile" />
              <div className="image-overlay"></div>
              <div className="social-links">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={`mailto:${personalInfo.email}`}>
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-text"
            variants={itemVariants}
          >
            <p>{personalInfo.bio}</p>
            
            <div className="info-grid">
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Location:</span>
                <p>{personalInfo.location}</p>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <span>Email:</span>
                <p>{personalInfo.email}</p>
              </div>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <span>Phone:</span>
                <p>{personalInfo.phone}</p>
              </div>
              <div className="info-item">
                <i className="fas fa-briefcase"></i>
                <span>Role:</span>
                <p>{personalInfo.title}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
