import React from 'react';
import logoPicabord from '../assets/logo_picabord.png';
import logoCoffeeHouses from '../assets/logo_coffeehouses.jpg';
import logoFlex from '../assets/logo_flex.png';
import logoFintechQuants from '../assets/logo_fintechquants.png';
import logoRane from '../assets/logo_rane.png';
import './Experience.css';

const experiences = [
  {
    company: 'PICABORD Technologies (Pvt.) Ltd.',
    duration: 'May 2026 - Present',
    logo: logoPicabord,
    roles: [
      { title: 'Software Project Manager', type: 'Full-time', period: 'May 2026 - Present &bull; 2 mos' },
      { title: 'Software Developer', type: 'Internship', period: 'Nov 2025 - Apr 2026 &bull; 6 mos' }
    ],
    details: 'Chennai, Tamil Nadu, India &bull; Hybrid. Coordinating software releases, project planning, and building core web features.'
  },
  {
    company: 'Coffee Houses CIT',
    duration: 'Sep 2024 - Present',
    logo: logoCoffeeHouses,
    roles: [
      { title: 'Manager', type: 'Full-time', period: 'Nov 2025 - Present &bull; 8 mos' },
      { title: 'Head Designer', type: 'Full-time', period: 'Aug 2025 - Nov 2025 &bull; 4 mos' },
      { title: 'Graphic Designer', type: 'Full-time', period: 'Sep 2024 - Aug 2025 &bull; 1 yr' }
    ],
    details: 'Chennai, Tamil Nadu, India. Overseeing operations, club design assets, and visual graphics branding.'
  },
  {
    company: 'Flex',
    duration: 'Nov 2025 - Dec 2025',
    logo: logoFlex,
    roles: [
      { title: 'AIML Development - GSS IT Operations', type: 'Internship', period: 'Nov 2025 - Dec 2025 &bull; 2 mos' }
    ],
    details: 'Chennai, Tamil Nadu, India &bull; On-site. Worked on AI/ML development pipelines for operations efficiency.'
  },
  {
    company: 'FinTech(Quants) Centre of Excellence',
    duration: 'Jul 2025 - Present',
    logo: logoFintechQuants,
    roles: [
      { title: 'FinTech Developer', type: 'Full-time', period: 'Jul 2025 - Present &bull; 1 yr' }
    ],
    details: 'Chennai Institute of Technology &bull; On-site. Focused on computational finance, quantitative finance algorithms, and mathematical modeling.'
  },
  {
    company: 'Rane Group',
    duration: 'Apr 2025 - May 2025',
    logo: logoRane,
    roles: [
      { title: 'Software Development Intern', type: 'Internship', period: 'Apr 2025 - May 2025 &bull; 2 mos' }
    ],
    details: 'Chennai, Tamil Nadu, India &bull; On-site. Gained experience in corporate software development pipelines.'
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-sub-title">My Journey</span>
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-underline"></div>
        </div>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item glass-card" key={i}>
              <div className="experience-header-row">
                {exp.logo && (
                  <img src={exp.logo} alt={`${exp.company} Logo`} className="experience-company-logo" />
                )}
                <div className="experience-header-text">
                  <span className="timeline-date">{exp.duration}</span>
                  <h3>{exp.company}</h3>
                </div>
              </div>
              <div className="roles-list">
                {exp.roles.map((r, ri) => (
                  <div className="role-subitem" key={ri}>
                    <div className="role-title-row">
                      <span className="role-title">{r.title}</span>
                      <span className="role-badge">{r.type}</span>
                      <span className="role-separator">&bull;</span>
                      <span className="role-period" dangerouslySetInnerHTML={{ __html: r.period }}></span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="experience-details">{exp.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
