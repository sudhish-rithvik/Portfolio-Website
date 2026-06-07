import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa6';
import projectZk from '../assets/project_zk.png';
import projectFintrust from '../assets/project_fintrust.png';
import projectAibilling from '../assets/project_aibilling.png';
import projectTransport from '../assets/project_transport.png';
import './Projects.css';

const projects = [
  {
    image: projectZk,
    title: 'ZK-Secured Invoice Financing',
    desc: 'Built a zero-knowledge proof system to prevent duplicate and fraudulent invoice financing using invoice hashing and cross-bank verification. Developed hybrid on-chain/off-chain APIs with zero proof leaking.',
    tech: ['Polygon zkEVM', 'Zero-Knowledge Proofs', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/sudhish-rithvik/Zk-Invoice-Lock',
    link: '#contact'
  },
  {
    image: projectFintrust,
    title: 'FinTrust Data Sharing',
    desc: 'Built a consent-based privacy-first data sharing platform compliant with GDPR, PSD2, and CCPA while enhancing real-time fraud detection. Integrates encrypted data transfers and multi-party consents.',
    tech: ['Python', 'Flask', 'React.js', 'MySQL', 'REST APIs'],
    github: 'https://github.com/sudhish-rithvik/Fintrust-payment-gateway',
    link: '#contact'
  },
  {
    image: projectAibilling,
    title: 'AI Automated Billing System',
    desc: 'Sony Aitrios Hackathon 2025 project; built prototype using Raspberry Pi, IMX500, and computer vision product detection with live invoicing, QR code generation, and instant checkout capabilities.',
    tech: ['React', 'JavaScript', 'Python', 'MongoDB', 'Sony AITRIOS'],
    github: 'https://github.com/sudhish-rithvik/AI-Automated-Billing-System',
    link: '#contact'
  },
  {
    image: projectTransport,
    title: 'Transport Optimizer',
    desc: 'Comprehensive full-stack web application designed to optimize public transportation in rural areas using AI and ML predictions for demand, intelligent vehicle scheduling, and dynamic route adjustments.',
    tech: ['React', 'JavaScript', 'HTML & CSS', 'Python', 'MongoDB'],
    github: 'https://github.com/sudhish-rithvik/Transport-Optimizer-Rural-Areas',
    link: '#contact'
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-sub-title">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-underline"></div>
        </div>
        
        <div className="featured-projects-list">
          {projects.map((p, i) => {
            const isRightAligned = i % 2 !== 0; // Alternating layout
            return (
              <div className={`featured-project-item ${isRightAligned ? 'right-align' : ''}`} key={i}>
                
                {/* Project Image Panel */}
                <div className="project-image-panel">
                  <a href={p.link} target="_self" rel="noreferrer">
                    <img src={p.image} alt={p.title} className="project-feature-image" />
                    <div className="image-overlay"></div>
                  </a>
                </div>

                {/* Project Info Panel */}
                <div className="project-info-panel">
                  <span className="featured-tag">Featured Project</span>
                  <h3 className="project-title">{p.title}</h3>
                  
                  <div className="project-desc-bubble">
                    <p>{p.desc}</p>
                  </div>

                  <ul className="project-tech-list">
                    {p.tech.map((t, ti) => (
                      <li key={ti}>{t}</li>
                    ))}
                  </ul>

                  <div className="project-links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                        <FaGithub />
                      </a>
                    )}
                    {p.link && (
                      <a href={p.link} aria-label="External Link">
                        <FaLink />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
