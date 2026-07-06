import { useEffect, useState, useRef } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  const lastRipplePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let rippleCount = 0;
    
    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
      
      const dx = e.clientX - lastRipplePos.current.x;
      const dy = e.clientY - lastRipplePos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Spawn a ripple every 30px
      if (distance > 30) {
        lastRipplePos.current = { x: e.clientX, y: e.clientY };
        const newRipple = { id: rippleCount++, x: e.clientX, y: e.clientY };
        setRipples(prev => [...prev, newRipple]);
        
        // Remove the ripple after animation ends
        setTimeout(() => {
          setRipples(prev => prev.filter(r => r.id !== newRipple.id));
        }, 800);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="water-cursor-main" 
        style={{ left: `${position.x}px`, top: `${position.y}px` }} 
      />
      {ripples.map(r => (
        <div 
          key={r.id} 
          className="water-ripple" 
          style={{ left: `${r.x}px`, top: `${r.y}px` }} 
        />
      ))}
    </>
  );
}
