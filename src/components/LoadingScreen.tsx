import React, { useEffect, useState, useRef } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const progressRef = useRef(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    let animationFrameId: number;
    let lastTime = performance.now();
    
    const incrementProgress = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      let increment = 0;
      const current = progressRef.current;
      
      if (current < 45) {
        increment = delta * 0.08 * (1 + Math.random());
      } else if (current < 85) {
        increment = delta * 0.045 * (0.8 + Math.random());
      } else {
        increment = delta * 0.02 * (0.5 + Math.random());
      }

      progressRef.current = Math.min(100, current + increment);
      const roundedProgress = Math.floor(progressRef.current);
      
      setProgress(roundedProgress);

      if (progressRef.current < 100) {
        animationFrameId = requestAnimationFrame(incrementProgress);
      } else {
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            document.body.style.overflow = '';
            onComplete();
          }, 850);
        }, 400);
      }
    };

    animationFrameId = requestAnimationFrame(incrementProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div className={`loading-container ${isExiting ? 'exit' : ''}`}>
      {/* Soft background ambient accent glow */}
      <div className="loader-bg-glow"></div>
      
      {/* Central Interactive Coffee Mug */}
      <div className="loader-center-content">
        <svg 
          width="180" 
          height="180" 
          viewBox="0 0 200 200" 
          className="loader-coffee-svg"
        >
          <defs>
            {/* Color palette: Purple/Indigo gradient for the coffee liquid */}
            <linearGradient id="liquid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b7cf8" />
              <stop offset="100%" stopColor="#6750e8" />
            </linearGradient>

            {/* Glowing filter for the liquid glass fill */}
            <filter id="liquid-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Clip path defining the interior of the cup (Shifted left by 7.5px) */}
            <clipPath id="cup-clip">
              <path d="M 70 73.5 L 130 73.5 C 131.5 73.5, 132 74, 132 75.5 L 132 120 C 132 126.5, 125.5 132.5, 117.5 132.5 L 82.5 132.5 C 74.5 132.5, 68 126.5, 68 120 L 68 75.5 C 68 74, 68.5 73.5, 70 73.5 Z" />
            </clipPath>
          </defs>

          {/* Animated Steam lines rising (Shifted left by 7.5px) */}
          <path 
            className="loader-steam-path steam-1" 
            d="M 90.5 58 C 86.5 51, 94.5 45, 90.5 38 C 86.5 31, 94.5 25, 90.5 18" 
            fill="none" 
            stroke="#6750e8" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            opacity="0.65"
          />
          <path 
            className="loader-steam-path steam-2" 
            d="M 106.5 58 C 102.5 51, 110.5 45, 106.5 38 C 102.5 31, 110.5 25, 106.5 18" 
            fill="none" 
            stroke="#8b7cf8" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            opacity="0.65"
          />

          {/* Translucent glass backing of the cup (Shifted left by 7.5px) */}
          <path 
            d="M 67.5 70 L 127.5 70 C 130.5 70, 132.5 72, 132.5 75 L 132.5 120 C 132.5 128, 125.5 135, 117.5 135 L 82.5 135 C 74.5 135, 67.5 128, 67.5 120 L 67.5 75 C 67.5 72, 69.5 70, 72.5 70 Z" 
            fill="rgba(255, 255, 255, 0.22)" 
          />

          {/* Liquid coffee filling up (clipped inside cup, Shifted left by 7.5px) */}
          <g clipPath="url(#cup-clip)">
            <g transform={`translate(0, ${135 - (progress / 100) * 70})`}>
              {/* Back Wave (moving right) */}
              <path 
                className="wave-back"
                d="M -200 15 C -175 25, -125 25, -100 15 C -75 5, -25 5, 0 15 C 25 25, 75 25, 100 15 C 125 5, 175 5, 200 15 C 225 25, 275 25, 300 15 C 325 5, 375 5, 400 15 L 400 150 L -200 150 Z" 
                fill="#8b7cf8" 
                opacity="0.45"
              />
              {/* Front Wave (moving left, gradient fill + subtle glow) */}
              <path 
                className="wave-front"
                d="M -200 15 C -175 5, -125 5, -100 15 C -75 25, -25 25, 0 15 C 25 5, 75 5, 100 15 C 125 25, 175 25, 200 15 C 225 5, 275 5, 300 15 C 325 25, 375 25, 400 15 L 400 150 L -200 150 Z" 
                fill="url(#liquid-grad)" 
                filter="url(#liquid-glow)"
              />
            </g>
          </g>

          {/* Glass Cup Body Outline (Shifted left by 7.5px) */}
          <path 
            d="M 67.5 70 L 127.5 70 C 130.5 70, 132.5 72, 132.5 75 L 132.5 120 C 132.5 128, 125.5 135, 117.5 135 L 82.5 135 C 74.5 135, 67.5 128, 67.5 120 L 67.5 75 C 67.5 72, 69.5 70, 72.5 70 Z" 
            fill="none" 
            stroke="var(--text)" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />

          {/* Cup Handle (Shifted left by 7.5px) */}
          <path 
            d="M 132.5 80 C 150.5 80, 155.5 88, 155.5 97.5 C 155.5 107, 150.5 115, 132.5 115" 
            fill="none" 
            stroke="var(--text)" 
            strokeWidth="4" 
            strokeLinecap="round" 
          />

          {/* Liquid Glass Highlights (Shifted left by 7.5px) */}
          <path 
            d="M 74.5 74 L 125.5 74" 
            stroke="rgba(255, 255, 255, 0.65)" 
            strokeWidth="1.5" 
            strokeLinecap="round"
          />
          <path 
            d="M 117.5 76 C 124.5 76, 126.5 78, 126.5 85 L 126.5 98" 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.7)" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          <path 
            d="M 71.5 78 L 71.5 110" 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.5)" 
            strokeWidth="1.5" 
            strokeLinecap="round"
          />
          <path 
            d="M 74.5 131 C 71.5 128, 70 124, 70 119" 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.4)" 
            strokeWidth="1.5" 
            strokeLinecap="round"
          />

          {/* Dashed base platform line (Shifted left by 7.5px) */}
          <line 
            x1="44.5" y1="139" x2="138.5" y2="139" 
            stroke="var(--text)" 
            strokeWidth="4" 
            strokeLinecap="round" 
          />
          <line 
            x1="148.5" y1="139" x2="160.5" y2="139" 
            stroke="var(--text)" 
            strokeWidth="4" 
            strokeLinecap="round" 
          />
        </svg>

        {/* LOADING... text with pulsing dots */}
        <div className="loader-text">
          LOADING
          <span className="dot-1">.</span>
          <span className="dot-2">.</span>
          <span className="dot-3">.</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
