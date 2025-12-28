import React, { useState, useEffect } from 'react';
import Cursor from './components/Cursor';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change this to the desired loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Cursor />
          <div className="blur-layer"></div>
          <Header />
          <div id="hero">
            <Hero />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="gallery">
            <Gallery />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Footer />
        </>
      )}
      <style>{`
        body {
          cursor: none;
        }
        .cursor {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          position: fixed; /* Use fixed positioning */
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 9999;
          background-image: url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3d1a3Uza3JzMW5kb3Q0dGNlZ3NqN25oN3E1c2E3MHN5M3JmM3JzYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/UTDoR2I0fgoj2Q2bbu/giphy.gif');
          background-size: cover;
        }
        .blur-layer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          z-index: -1;
        }
      `}</style>
    </div>
  );
}

export default App;
