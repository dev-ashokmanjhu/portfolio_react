import { Suspense, lazy, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingSpinner from "./components/LoadingSpinner";
import ThemeToggle from "./components/ThemeToggle";
import "./styles.scss";

// Lazy load components
const Hero = lazy(() => import("./pages/Hero"));
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Footer = lazy(() => import("./pages/Footer"));

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <AnimatePresence mode="wait">
      <div className={`app-container ${theme}`}>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </AnimatePresence>
  );
}

export default App;
