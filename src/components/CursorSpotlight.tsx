import { useState, useEffect } from 'react';

const CursorSpotlight = ({ isEnabled }: { isEnabled: boolean }) => {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    if (isEnabled) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition-all duration-300"
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, transparent 100px, rgba(0,0,0,0.95) 200px)`,
      }}
    />
  );
};

export default CursorSpotlight;
