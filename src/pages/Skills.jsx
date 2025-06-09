import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../constants/global';
import '../styles/pages/Skills.scss';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0,
      rotateX: -15
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        duration: 0.5
      }
    }
  };

  return (
    <section className="skills-section" id="skills">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 
          className="section-title"
          variants={cardVariants}
        >
          SKILLS & TECHNOLOGIES
        </motion.h2>

        <div className="skills-container">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              className="skills-category"
              variants={cardVariants}
            >
              <h3>{category}</h3>
              <div className="skills-grid">
                {skillList.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: -5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    <div className="skill-content">
                      <motion.div 
                        className="skill-icon"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <i className={skill.icon}></i>
                      </motion.div>
                      <h4>{skill.name}</h4>
                      <motion.div 
                        className="skill-shine"
                        initial={{ x: "-100%", opacity: 0.5 }}
                        animate={{ x: "100%", opacity: 0 }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          ease: "linear",
                          delay: index * 0.1
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills; 