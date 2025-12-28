import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 font-lato">&copy; {new Date().getFullYear()} Alaa's Art. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
