import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';
import devAvatar from '../assets/user_home.jpg';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Side: Avatar Card */}
        <div className="hero-image-side reveal">
          <div className="glass-card profile-card">
            <img src={devAvatar} alt="Sudhish Rithvik" className="profile-image" />
          </div>
        </div>

        {/* Right Side: Text & Details */}
        <div className="hero-text-side reveal">
          <span className="hello-tag">Hello! I'm</span>

          <h1 className="hero-name">Sudhish Rithvik</h1>

          <h3 className="hero-roles">
            Software Developer &bull; Problem Solver &bull; Tech Enthusiast
          </h3>


          <div className="hero-actions-area">
            <a href="#projects" className="btn btn-primary hero-btn-work">
              View My Work <span className="arrow-right">→</span>
            </a>
            
            <div className="hero-social-row">
              <a href="https://www.linkedin.com/in/sudhishrithvik/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/sudhish-rithvik/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/sudhish_rithvik" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="mailto:sudhishrithvik.work@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
