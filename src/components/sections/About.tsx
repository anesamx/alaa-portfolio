import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="py-20 px-4 text-center bg-white"
    >
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="max-w-2xl mx-auto text-lg">
        I am a passionate digital artist and illustrator with a love for creating vibrant and imaginative worlds. My work is a blend of fantasy, surrealism, and a touch of whimsy. I believe that art has the power to transport and inspire, and I strive to create pieces that tell a story and evoke emotion.
      </p>
    </motion.div>
  );
};

export default About;
