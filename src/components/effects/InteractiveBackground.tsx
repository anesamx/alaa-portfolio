import { useRef, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';

const InteractiveBackground = forwardRef((props, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const lastPos = useRef<{ x: number, y: number } | null>(null);

  const hue = useRef(0);

  const startDrawing = useCallback((e: MouseEvent | TouchEvent) => {
    isDrawing.current = true;
    document.body.style.cursor = 'grabbing';
    const pos = 'touches' in e ? e.touches[0] : e;
    lastPos.current = { x: pos.clientX, y: pos.clientY };
  }, []);

  const stopDrawing = useCallback(() => {
    isDrawing.current = false;
    document.body.style.cursor = 'default';
    lastPos.current = null;
  }, []);

  const draw = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDrawing.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    const pos = 'touches' in e ? e.touches[0] : e;
    const currentPos = { x: pos.clientX, y: pos.clientY };

    if (!lastPos.current) {
        lastPos.current = currentPos;
        return;
    }

    ctx.strokeStyle = `hsla(${hue.current}, 100%, 70%, 0.3)`;
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(currentPos.x, currentPos.y);
    ctx.stroke();

    lastPos.current = currentPos;
    hue.current = (hue.current + 1) % 360;

  }, []);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  useImperativeHandle(ref, () => ({
    clearCanvas,
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('mousedown', startDrawing);
    window.addEventListener('mouseup', stopDrawing);
    window.addEventListener('mousemove', draw);
    window.addEventListener('mouseleave', stopDrawing);

    window.addEventListener('touchstart', startDrawing);
    window.addEventListener('touchend', stopDrawing);
    window.addEventListener('touchmove', draw);


    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousedown', startDrawing);
      window.removeEventListener('mouseup', stopDrawing);
      window.removeEventListener('mousemove', draw);
      window.removeEventListener('mouseleave', stopDrawing);
      window.removeEventListener('touchstart', startDrawing);
      window.removeEventListener('touchend', stopDrawing);
      window.removeEventListener('touchmove', draw);
      window.removeEventListener('resize', handleResize);
    };
  }, [startDrawing, stopDrawing, draw]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        width: '100vw',
        height: '100vh',
      }}
    />
  );
});

export default InteractiveBackground;
