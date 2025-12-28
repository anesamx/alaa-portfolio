import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBroom } from 'react-icons/fa';

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'gallery', label: 'Gallery' },
  { to: 'about', label: 'About' },
  { to: 'support', label: 'Support' },
];

const Header = ({ onResetCanvas }: { onResetCanvas: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-lg shadow-xl' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-4xl font-story-script text-white">Alaa</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-white hover:text-purple-400 transition-colors cursor-pointer text-lg font-lato"
              activeClass="text-purple-500 font-semibold"
            >
              {link.label}
            </Link>
          ))}
           <button onClick={onResetCanvas} className="text-white focus:outline-none">
            <FaBroom className="h-6 w-6" />
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={onResetCanvas} className="text-white focus:outline-none">
            <FaBroom className="h-6 w-6" />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7-6h7" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-black/80 backdrop-blur-lg"
      >
        <nav className="flex flex-col items-center px-4 py-6 space-y-4">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-purple-400 transition-colors cursor-pointer text-lg font-lato"
              activeClass="text-purple-500 font-semibold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;
