import React from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/Experience.scss';

const experiences = [
  {
    id: 1,
    role: "Software Developer",
    company: "FargoWiz Pvt. Ltd.",
    duration: "Mar 2023 - Present",
    description: "Leading full-stack development of web applications using React, Node.js, and MySQL. Implemented real-time features and improved application performance by 40%.",
    technologies: ["React", "Node.js", "MySQL", "AWS"]
  }
];

const Experience = () => {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="experience-section" id="experience">
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
          EXPERIENCE
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-dot">
                <motion.div 
                  className="dot"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                />
              </div>
              
              <motion.div 
                className="timeline-content"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="time-badge">{exp.duration}</div>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
                <div className="tech-stack">
                  {exp.technologies.map((tech, idx) => (
                    <motion.span 
                      key={idx}
                      className="tech-tag"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience; 