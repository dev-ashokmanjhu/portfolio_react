import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks, navigationLinks } from '../constants/global';
import '../styles/pages/Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <motion.div 
            className="footer-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>{personalInfo.name}</h3>
            <p>{personalInfo.shortBio}</p>
            <div className="social-links">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4>Quick Links</h4>
            <ul>
              {navigationLinks.map(link => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4>Contact Info</h4>
            <ul>
              <li>
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="copyright">
            <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
          </div>
          <div className="footer-status">
            <span className="status">
              <i className="fas fa-circle"></i>
              {personalInfo.availability}
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
