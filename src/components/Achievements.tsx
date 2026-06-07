import React from 'react';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa6';
import './Achievements.css';

const achievementsList = [
  {
    icon: <FaTrophy />,
    title: 'Sony AITRIOS Hackathon',
    subtitle: 'Sony &bull; IITM Pravartak &bull; Nasscom Deeptech',
    desc: 'Smart AI Automated Billing System (2nd Runner Up). Built an AI checkout utilizing Raspberry Pi, IMX500, React, and MongoDB.',
    highlight: false
  },
  {
    icon: <FaMedal />,
    title: 'i.Mobilothon 5.0',
    subtitle: 'Volkswagen Group Digital Solutions [India]',
    desc: 'DriveSync: Connecting vehicles to protect every road user. Stood as Finalist (Top 50 out of 1000+ competing teams).',
    highlight: false
  },
  {
    icon: <FaAward />,
    title: 'MumbaiHacks 2025',
    subtitle: 'Tech Entrepreneurs Association of Mumbai',
    desc: 'Sentinel Trust: banking-security for a Zero-Trust Digital Banking. Finalist in Mumbai\'s premier engineering hackathon.',
    highlight: false
  }
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-sub-title">Recognition</span>
          <h2 className="section-title">Achievements</h2>
          <div className="section-underline"></div>
        </div>
        <div className="grid-3">
          {achievementsList.map((ach, i) => (
            <div className={`glass-card achievement-card ${ach.highlight ? 'highlight' : ''}`} key={i}>
              <div className="achieve-icon">{ach.icon}</div>
              <h3>{ach.title}</h3>
              <span className="achieve-subtitle" dangerouslySetInnerHTML={{ __html: ach.subtitle }}></span>
              <p>{ach.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
