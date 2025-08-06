'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  sections: {
    id: string;
    label: string;
    ref: React.RefObject<HTMLElement | null>;
  }[];
}

export default function Navigation({ sections }: NavigationProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide/show navigation based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Determine active section
      const sectionPositions = sections.map((section, index) => {
        const element = section.ref.current;
        if (!element) return { index, position: 0 };
        
        const rect = element.getBoundingClientRect();
        const position = rect.top + window.scrollY;
        return { index, position };
      });

      const currentPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        if (currentPosition >= sectionPositions[i].position) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, sections]);

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 mt-6"
    >
      <div className="bg-slate-900/80 backdrop-blur-md border border-slate-600/30 rounded-full px-6 py-3 shadow-2xl shadow-black/50">
        <ul className="flex space-x-8">
          {sections.map((section, index) => (
            <li key={section.id}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(section.ref)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === index
                    ? 'text-blue-400 bg-blue-400/10 border border-blue-400/30'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {section.label}
                {activeSection === index && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-blue-400/10 border border-blue-400/30 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
} 