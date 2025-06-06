import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/ThemeToggle.scss';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div 
        className="icon-container"
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === 'dark' ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {theme === 'dark' ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="fas fa-sun"></i>
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 