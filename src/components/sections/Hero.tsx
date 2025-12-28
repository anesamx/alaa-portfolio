import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen text-center text-white bg-cover bg-center hero-bg"
    >
      <h1 className="text-8xl font-story-script">Alaa's Portfolio</h1>
      <p className="mt-4 text-xl font-lato">Digital Artist & Illustrator</p>
    </motion.div>
  );
};

export default Hero;
