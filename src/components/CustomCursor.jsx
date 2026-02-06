'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Add hover effects for interactive elements
    const updateInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll('a, button, .cursor-hover, input, textarea');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Initial setup
    updateInteractiveElements();

    // Update when DOM changes
    const observer = new MutationObserver(updateInteractiveElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
      
      const interactiveElements = document.querySelectorAll('a, button, .cursor-hover, input, textarea');
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor - small green dot */}
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-200 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 ease-out ${
            isClicking 
              ? 'w-3 h-3 bg-green-600 scale-75' 
              : isHovering 
                ? 'w-4 h-4 bg-green-500' 
                : 'w-3 h-3 bg-green-500'
          }`}
          style={{
            boxShadow: isHovering 
              ? '0 0 20px rgba(34, 197, 94, 1), 0 0 40px rgba(34, 197, 94, 0.5)' 
              : '0 0 10px rgba(34, 197, 94, 0.8)'
          }}
        />
      </div>
      
      {/* Animated circle ring */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full border-2 transition-all duration-300 ease-out ${
            isClicking
              ? 'w-10 h-10 border-green-600 scale-75 animate-pulse'
              : isHovering 
                ? 'w-16 h-16 border-green-400 scale-125 animate-spin' 
                : 'w-12 h-12 border-green-400/60 animate-pulse'
          }`}
          style={{
            background: isHovering 
              ? 'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(34, 197, 94, 0.05) 0%, transparent 70%)',
            boxShadow: isHovering 
              ? '0 0 30px rgba(34, 197, 94, 0.4)' 
              : '0 0 15px rgba(34, 197, 94, 0.2)',
            animationDuration: isHovering ? '1.5s' : '2.5s'
          }}
        />
      </div>

      {/* Outer animated ring */}
      <div
        className="fixed pointer-events-none z-[9997] transition-all duration-500 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full border transition-all duration-500 ease-out ${
            isHovering 
              ? 'w-20 h-20 border-green-300/40 animate-ping' 
              : 'w-0 h-0 border-transparent'
          }`}
          style={{
            animationDuration: '1.2s',
            boxShadow: isHovering ? '0 0 50px rgba(34, 197, 94, 0.3)' : 'none'
          }}
        />
      </div>
    </>
  );
}