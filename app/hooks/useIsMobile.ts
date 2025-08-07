import { useState, useEffect } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on mount
    checkIsMobile();

    // Add event listener
    window.addEventListener('resize', checkIsMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
}

// Animation variants for mobile vs desktop
export const getAnimationVariants = (isMobile: boolean) => ({
  // Fade in variants
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: isMobile ? 0.2 : 0.6 }
  },
  
  // Slide up variants
  slideUp: {
    initial: { y: isMobile ? 0 : 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: isMobile ? 0.2 : 0.8 }
  },
  
  // Scale variants for buttons
  buttonScale: {
    whileHover: isMobile ? {} : { scale: 1.05 },
    whileTap: isMobile ? {} : { scale: 0.95 },
    transition: { duration: isMobile ? 0 : 0.2 }
  },
  
  // Hover lift variants
  hoverLift: {
    whileHover: isMobile ? {} : { y: -8 },
    transition: { duration: isMobile ? 0 : 0.3 }
  },
  
  // Height animation variants
  heightAnimation: {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: isMobile ? 0.1 : 0.3 }
  }
});
