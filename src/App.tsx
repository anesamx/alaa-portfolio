import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Gallery from './components/sections/Gallery';
import Support from './components/sections/Support';
import Footer from './components/sections/Footer';
import Loading from './components/Loading';
import InteractiveBackground from './components/effects/InteractiveBackground';

function App() {
  const [loading, setLoading] = useState(true);
  const [resetCanvasKey, setResetCanvasKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleResetCanvas = useCallback(() => {
    setResetCanvasKey(prevKey => prevKey + 1);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="relative bg-[#1A1A1A] font-lato">
      {/* Static Textured Background (Bottom Layer) */}
      <div className="fixed top-0 left-0 w-full h-full z-0 textured-background" />

      {/* Interactive Painting Canvas (Middle Layer) */}
      <div className="fixed top-0 left-0 w-screen h-screen z-10 overflow-hidden">
        <InteractiveBackground key={resetCanvasKey} />
      </div>

      {/* Main Content (Top Layer) */}
      <div className="relative z-20 bg-transparent">
        <Header onResetCanvas={handleResetCanvas} />
        <main>
          <Hero />
          <About />
          <Gallery />
          <Support />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;