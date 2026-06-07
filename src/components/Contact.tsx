import React from 'react';
import { FaPaperPlane, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <>
      <section id="contact" className="section reveal contact-section">
        <div className="container glass-card contact-card">
          <div className="contact-text">
            <h2>Let's build something impactful.</h2>
            <p>I'm always open to discussing new projects, internships, hackathon collaborations, or engineering roles.</p>
            
            <div className="contact-info-pills">
              <a href="mailto:sudhishrithvik.work@gmail.com" className="contact-pill-item">
                <FaPaperPlane /> sudhishrithvik.work@gmail.com
              </a>
            </div>

            <div className="contact-links-socials">
              <a href="https://www.linkedin.com/in/sudhishrithvik/" target="_blank" rel="noreferrer" className="social-pill">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/sudhish-rithvik/" target="_blank" rel="noreferrer" className="social-pill">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.instagram.com/sudhish_rithvik" target="_blank" rel="noreferrer" className="social-pill">
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2026 Design and Developed by Sudhish Rithvik</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
