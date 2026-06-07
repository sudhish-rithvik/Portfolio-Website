import React from 'react';
import aboutImg from '../assets/user_about.jpg';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-sub-title">Who I Am</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-underline"></div>
        </div>
        
        <div className="about-grid">
          {/* Left Side: Bio Card */}
          <div className="glass-card about-story-card">
            <p>
              I'm <strong>Sudhish Rithvik</strong>, a Computer Science Engineering student at Chennai Institute of Technology, hackathon innovator, developer, and technology enthusiast.
            </p>
            <p>
              I'm deeply interested in building intelligent systems that solve real-world challenges, with a focus on AI, full-stack development, and emerging technologies. I enjoy creating products that combine technical excellence with practical impact.
            </p>
            <p>
              Beyond development, I actively participate in hackathons, research initiatives, and tech communities, continuously exploring new ideas and turning them into scalable solutions. My goal is to build technology that creates meaningful value and drives innovation.
            </p>
          </div>

          {/* Right Side: Image Card */}
          <div className="glass-card about-image-card">
            <img src={aboutImg} alt="Workspace Setup" className="about-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
