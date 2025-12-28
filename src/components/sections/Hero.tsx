import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.pinimg.com/originals/2c/e3/a8/2ce3a835ed7977762771da45787d5771.gif')" }}
    >
      <h1 className="text-6xl font-bold">Alaa's Portfolio</h1>
      <p className="mt-4 text-xl">Digital Artist & Illustrator</p>
    </motion.div>
  );
};

export default Hero;
