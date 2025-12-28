import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <Link to="hero" smooth={true} duration={500} className={`cursor-pointer ${isScrolled ? 'text-black' : 'text-white'}`}>Alaa's Portfolio</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="about" smooth={true} duration={500} className={`cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} hover:text-purple-500`}>About</Link>
            </li>
            <li>
              <Link to="gallery" smooth={true} duration={500} className={`cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} hover:text-purple-500`}>Gallery</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className={`cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} hover:text-purple-500`}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
