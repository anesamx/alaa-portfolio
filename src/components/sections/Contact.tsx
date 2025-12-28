import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="py-20 px-4 text-center bg-white"
    >
      <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
      <p className="max-w-2xl mx-auto text-lg mb-8">
        I'm currently available for freelance work. If you have a project you'd like to discuss, or if you'd just like to say hello, please get in touch!
      </p>
      <form className="max-w-xl mx-auto">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
