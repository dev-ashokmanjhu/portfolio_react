import React from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/Experience.scss';

const experiences = [
  {
    id: 1,
    role: "Software Developer",
    company: "Fargowiz Pvt. Ltd.",
    location: "Jaipur, Rajasthan, 302020, India",
    duration: "Mar 2023 - Present",
    achievements: [
      {
        text: "Designed and led complex software solutions development",
        metrics: "30% increase in system efficiency",
        icon: "fas fa-chart-line"
      },
      {
        text: "Managed client communication and feature delivery",
        metrics: "95% client satisfaction rate",
        icon: "fas fa-users"
      },
      {
        text: "Provided mentorship to junior developers",
        metrics: "25% team productivity improvement",
        icon: "fas fa-user-graduate"
      },
      {
        text: "Conducted code reviews and resolved escalations",
        metrics: "30% reduction in technical debt",
        icon: "fas fa-code-branch"
      },
      {
        text: "Implemented TDD and Agile practices",
        metrics: "50% reduction in bugs",
        icon: "fas fa-bug"
      }
    ],
    technologies: [
      "React.js", "Node.js", "AWS", "MySQL", 
      "MongoDB", "TypeScript", "Docker", "Express.js",
      "Next.js", "Ionic React", "React Native"
    ]
  }
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
          {experiences.map((exp) => (
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
                />
              </div>
              
              <motion.div 
                className="timeline-content"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="time-badge">{exp.duration}</div>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p className="location">
                  <i className="fas fa-map-marker-alt"></i> {exp.location}
                </p>
                
                <div className="achievements">
                  {exp.achievements.map((achievement, index) => (
                    <motion.div 
                      key={index}
                      className="achievement-item"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="achievement-icon">
                        <i className={achievement.icon}></i>
                      </div>
                      <div className="achievement-content">
                        <p>{achievement.text}</p>
                        <span className="metrics">{achievement.metrics}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="tech-stack">
                  {exp.technologies.map((tech, idx) => (
                    <motion.span 
                      key={idx}
                      className="tech-tag"
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
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