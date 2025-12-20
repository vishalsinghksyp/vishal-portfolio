import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(true);
  const [showText, setShowText] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setShowLoading(true);

    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1500);

    const transitionTimer = setTimeout(() => {
      setTransitioning(true);
      setTimeout(() => {
        navigate('/next-page', { replace: true });
      }, 800);
    }, 3500);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(transitionTimer);
    };
  }, [navigate]);

  const backgroundVariants = {
    initial: { scale: 1.2, opacity: 0.8 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.3, opacity: 0 },
  };

  const circleVariants = {
    hidden: { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
    visible: { clipPath: 'circle(200% at 50% 50%)', opacity: 1 },
    exit: { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
  };

  const circleTransition = {
    duration: 3,
    ease: [0.42, 0, 0.58, 1],
  };

  const spinnerVariants = {
    initial: { opacity: 1 },
    animate: {
      rotate: [0, 360],
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      borderColor: ['#ffffff', '#ff66b2', '#66ccff', '#66ff99', '#ffffff'],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    },
  };

  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const pageTransition = {
    initial: { opacity: 1, scale: 1 },
    animate: { opacity: 1, scale: 1 },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      className="h-screen w-screen bg-black flex flex-col justify-center items-center relative overflow-hidden"
      initial="initial"
      animate="animate"
      exit={transitioning ? 'exit' : 'initial'}
      variants={pageTransition}
    >
      <motion.div
        className="absolute inset-0"
        style={{ backgroundImage: "url('/background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        variants={backgroundVariants}
        transition={{ duration: 4, ease: 'easeInOut' }}
      />
      
      <motion.div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 100%)' }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={overlayVariants}
        transition={{ duration: 2, ease: 'easeOut' }}
      />

      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center"
      >
        <motion.div
          className="relative w-40 h-40 flex justify-center items-center mb-6"
        >
          <motion.div
            className="absolute w-full h-full border-8 border-t-transparent border-l-transparent border-white rounded-full glow-neon"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          ></motion.div>

          <motion.div
            className="absolute w-32 h-32 border-8 border-t-transparent border-l-transparent border-[#ff66b2] rounded-full glow-neon"
            animate={{ rotate: [360, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          ></motion.div>

          <motion.div
            className="absolute w-24 h-24 border-8 border-t-transparent border-l-transparent border-[#66ccff] rounded-full glow-neon"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          ></motion.div>
        </motion.div>

        {showText && (
          <motion.div
            className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            Creating the art for you...
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
