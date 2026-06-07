import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const ringPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = cursorRingRef.current;
    if (!cursor || !ring) return;

    const onMouseMove = (e: MouseEvent) => {
      const scaledX = e.clientX / 0.9;
      const scaledY = e.clientY / 0.9;
      mousePos.current = { x: scaledX, y: scaledY };
      cursor.style.left = `${scaledX}px`;
      cursor.style.top = `${scaledY}px`;
    };

    const animateRing = () => {
      // Direct snapping for active text labels, smooth drag for standard pointer
      const isTextActive = ring.classList.contains('active');
      const ease = isTextActive ? 0.3 : 0.16;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;
      ring.style.left = `${ringPos.current.x}px`;
      ring.style.top = `${ringPos.current.y}px`;
      rafRef.current = requestAnimationFrame(animateRing);
    };

    const onMouseEnterHover = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      let labelText = '';

      if (target.classList.contains('project-card')) {
        labelText = 'VIEW';
      } else if (target.classList.contains('social-pill') || target.closest('.social-links') || target.tagName === 'A' && target.closest('.social-links')) {
        labelText = 'LINK';
      } else if (target.classList.contains('contact-pill-item') || target.closest('.contact-info-pills')) {
        labelText = 'TALK';
      } else if (target.classList.contains('nav-link')) {
        labelText = 'GOTO';
      } else if (target.classList.contains('btn') || target.tagName === 'BUTTON') {
        labelText = 'CLICK';
      }

      if (labelText) {
        ring.textContent = labelText;
        ring.classList.add('active');
        cursor.classList.add('active');
      } else {
        ring.classList.add('cursor-hover');
        cursor.classList.add('cursor-hover');
      }
    };

    const onMouseLeaveHover = () => {
      ring.textContent = '';
      ring.className = '';
      cursor.className = '';
    };

    window.addEventListener('mousemove', onMouseMove);
    rafRef.current = requestAnimationFrame(animateRing);

    // Track standard hoverable elements
    const hoverEls = document.querySelectorAll('a, button, .glass-card, .btn');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterHover);
      el.addEventListener('mouseleave', onMouseLeaveHover);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterHover);
        el.removeEventListener('mouseleave', onMouseLeaveHover);
      });
    };
  }, []);

  // Scroll reveal IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Sync body class with loading state
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('loading-active');
    } else {
      document.body.classList.remove('loading-active');
    }
    return () => {
      document.body.classList.remove('loading-active');
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Dynamic Editorial Custom Cursor */}
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-ring" ref={cursorRingRef}></div>

      {/* Main Page Content */}
      <Navbar />
      <div className={`app-content ${!isLoading ? 'visible' : ''}`}>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </div>
    </>
  );
};

export default App;
