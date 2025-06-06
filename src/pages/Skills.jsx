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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
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
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5,
                      delay: index * 0.1
                    }}
                  >
                    <motion.div 
                      className="skill-icon"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <i className={skill.icon}></i>
                    </motion.div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <motion.div
                        className="skill-bar"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "100%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.8,
                          delay: 0.2 + (categoryIndex * skillList.length + index) * 0.1
                        }}
                      >
                        <motion.div 
                          className="skill-progress"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 }}
                        />
                      </motion.div>
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