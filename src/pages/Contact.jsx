import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/Contact.scss';
import { personalInfo } from '../constants/global';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="contact-section" id="contact">
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
          CONTACT
        </motion.h2>

        <motion.div 
          className="contact-content"
          variants={containerVariants}
        >
          <motion.div 
            className="contact-info"
            variants={itemVariants}
          >
            <h3>Get in Touch</h3>
            <p>I'm always interested in hearing about new projects and opportunities.</p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>{personalInfo.email}</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>{personalInfo.phone}</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div className="form-group">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="submit-btn"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
