'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  sections: {
    id: string;
    label: string;
    ref: React.RefObject<HTMLElement>;
  }[];
}

export default function ScrollIndicator({ sections }: ScrollIndicatorProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Memoize sections to prevent unnecessary re-renders
  const memoizedSections = useMemo(() => sections, [sections]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      
      // Calculate scroll progress (0 to 1)
      const progress = Math.min(scrollTop / documentHeight, 1);
      setScrollProgress(progress);

      // Determine current section
      const sectionPositions = memoizedSections.map((section, index) => {
        const element = section.ref.current;
        if (!element) return { index, position: 0 };
        
        const rect = element.getBoundingClientRect();
        const position = rect.top + window.scrollY;
        return { index, position };
      });

      const currentPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        if (currentPosition >= sectionPositions[i].position) {
          setCurrentSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [memoizedSections]);

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col items-center space-y-4">
        {/* Progress bar */}
        <div className="relative w-1 h-32 bg-slate-700/30 rounded-full overflow-hidden">
          <motion.div
            className="absolute bottom-0 w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-full"
            style={{ height: `${scrollProgress * 100}%` }}
            initial={{ height: 0 }}
            animate={{ height: `${scrollProgress * 100}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        {/* Section indicators */}
        <div className="flex flex-col space-y-3">
          {memoizedSections.map((section, index) => (
            <motion.button
              key={section.id}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                if (section.ref.current) {
                  section.ref.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === index
                  ? 'bg-blue-400 shadow-lg shadow-blue-400/50'
                  : 'bg-slate-500 hover:bg-slate-400'
              }`}
            >
              {currentSection === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-blue-400 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              
              {/* Tooltip */}
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-slate-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                  {section.label}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
} 