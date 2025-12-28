import React from 'react';
import Instagram from '../icons/Instagram';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Alaa's Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
