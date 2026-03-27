import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';

/**
 * Hook personnalisé pour les animations au scroll
 * @param {Object} options - Options d'animation
 * @param {number} options.threshold - Seuil de déclenchement (0-1)
 * @param {string} options.animation - Type d'animation (fade, slide, zoom, etc.)
 * @param {number} options.duration - Durée de l'animation en secondes
 * @param {string} options.direction - Direction pour slide (up, down, left, right)
 */
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    animation = 'fade',
    duration = 0.6,
    direction = 'up',
    delay = 0,
  } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold,
    margin: "-50px"
  });
  
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const getVariants = () => {
    const baseTransition = {
      duration: duration,
      ease: [0.25, 0.46, 0.45, 0.94], // easing professionnel
      delay: delay,
    };

    switch (animation) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: baseTransition,
          },
        };

      case 'slide-up':
        return {
          hidden: { opacity: 0, y: 60 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: baseTransition,
          },
        };

      case 'slide-down':
        return {
          hidden: { opacity: 0, y: -60 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: baseTransition,
          },
        };

      case 'slide-left':
        return {
          hidden: { opacity: 0, x: 60 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: baseTransition,
          },
        };

      case 'slide-right':
        return {
          hidden: { opacity: 0, x: -60 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: baseTransition,
          },
        };

      case 'zoom-in':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: baseTransition,
          },
        };

      case 'zoom-out':
        return {
          hidden: { opacity: 0, scale: 1.2 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: baseTransition,
          },
        };

      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  return { ref, controls, variants: getVariants() };
};

/**
 * Composant wrapper pour les animations de texte
 */
export const AnimatedText = ({ children, className = '', animation = 'slide-up', delay = 0, duration = 0.5 }) => {
  const { ref, controls, variants } = useScrollAnimation({ 
    animation, 
    delay, 
    duration,
    threshold: 0.2 
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Composant wrapper pour les animations d'images
 */
export const AnimatedImage = ({ src, alt, className = '', animation = 'zoom-in', delay = 0, duration = 0.7 }) => {
  const { ref, controls, variants } = useScrollAnimation({ 
    animation, 
    delay, 
    duration,
    threshold: 0.15 
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  );
};

/**
 * Composant wrapper pour les animations de vidéos
 */
export const AnimatedVideo = ({ children, className = '', animation = 'fade', delay = 0, duration = 0.7 }) => {
  const { ref, controls, variants } = useScrollAnimation({ 
    animation, 
    delay, 
    duration,
    threshold: 0.15 
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Composant container pour les grilles avec stagger effect
 */
export const StaggerContainer = ({ children, className = '', staggerDelay = 0.1 }) => {
  const { ref, controls } = useScrollAnimation({ 
    animation: 'fade', 
    threshold: 0.1 
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Composant item pour les grilles avec stagger effect
 */
export const StaggerItem = ({ children, className = '', animation = 'slide-up' }) => {
  const { variants } = useScrollAnimation({ 
    animation,
    duration: 0.5,
  });

  const itemVariants = {
    hidden: variants.hidden,
    visible: {
      ...variants.visible,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
