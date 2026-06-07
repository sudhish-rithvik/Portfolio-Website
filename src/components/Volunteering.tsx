import React from 'react';
import { FaPenNib, FaCode, FaPeopleGroup, FaAward } from 'react-icons/fa6';
import './Volunteering.css';

const volunteeringList = [
  {
    icon: <FaPenNib />,
    title: 'Secretary',
    organization: 'Coffee Houses - The Literature Club',
    location: 'Chennai Institute of Technology',
    tag: 'CAMPUS CLUB'
  },
  {
    icon: <FaPeopleGroup />,
    title: 'Event Coordinator',
    organization: 'Hackerz Symposium',
    location: 'National Level Technical Symposium',
    tag: 'TECHNICAL SYMPOSIUM'
  },
  {
    icon: <FaCode />,
    title: 'Web/App Dev Team',
    organization: 'Takshashila\'26 Festival',
    location: 'National Level Techno Cultural Festival',
    tag: 'CULTURAL FESTIVAL'
  },
  {
    icon: <FaAward />,
    title: 'Non-Tech Coordinator',
    organization: 'Takshashila\'26 Festival',
    location: 'National Level Techno Cultural Festival',
    tag: 'CULTURAL FESTIVAL'
  }
];

const Volunteering: React.FC = () => {
  return (
    <section id="volunteering" className="section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-sub-title">Giving Back</span>
          <h2 className="section-title">Volunteering</h2>
          <div className="section-underline"></div>
        </div>
        
        <div className="vol-grid">
          {volunteeringList.map((vol, i) => (
            <div className="glass-card vol-card" key={i}>
              <div className="vol-icon-circle">{vol.icon}</div>
              <h3 className="vol-card-role">{vol.title}</h3>
              <p className="vol-card-org">{vol.organization}</p>
              <p className="vol-card-loc">{vol.location}</p>
              <span className="vol-card-tag">{vol.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
