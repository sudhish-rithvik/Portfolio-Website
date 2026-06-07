import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ['home', 'about', 'experience', 'education', 'projects', 'skills', 'achievements', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 180) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="logo">SR<span className="logo-dot">.</span></a>

        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {['home', 'about', 'experience', 'projects'].map(s => (
            <a
              key={s}
              href={`#${s}`}
              className={`nav-link ${activeSection === s ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <a href="#contact" className="btn-connect">Let's Connect ✦</a>
          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
