import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/ProjectCard.scss';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies?.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.demoUrl && (
            <motion.a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="demo-link"
            >
              Live Demo
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="github-link"
            >
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 