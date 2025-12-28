
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-4 text-white overflow-hidden"
    >
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-7xl font-story-script mb-8">
          About the Artist
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl max-w-3xl mx-auto mb-10 text-gray-200 font-lato"
        >
          Alaa is a passionate painter who finds inspiration in the vibrant tapestry of life. Her work is a dance of color and emotion, a capturing of fleeting moments and translating them onto canvas with bold strokes and a unique perspective. Each piece tells a story, inviting the viewer into a world of imagination and wonder.
        </motion.p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <span className="absolute text-2xl select-none animate-[float_25s_infinite_linear] top-[20%] left-[10%]">🎨</span>
        <span className="absolute text-2xl select-none animate-[float_25s_infinite_linear] top-[60%] left-[80%] animation-delay-neg-5s">🖌️</span>
        <span className="absolute text-2xl select-none animate-[float_25s_infinite_linear] top-[70%] left-[20%] animation-delay-neg-10s">✨</span>
        <span className="absolute text-2xl select-none animate-[float_25s_infinite_linear] top-[30%] left-[90%] animation-delay-neg-15s">🖼️</span>
        <span className="absolute text-2xl select-none animate-[float_25s_infinite_linear] top-[80%] left-[50%] animation-delay-neg-20s">🌟</span>
      </div>
    </section>
  );
};

export default About;
