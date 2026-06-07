import React from 'react';
import logoCit from '../assets/logo_cit.png';
import './Education.css';

const Education: React.FC = () => {
  return (
    <section id="education" className="section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-sub-title">Academics</span>
          <h2 className="section-title">Education</h2>
          <div className="section-underline"></div>
        </div>
        
        <div className="education-container">
          <div className="glass-card education-card">
            <div className="edu-header">
              <img src={logoCit} alt="Chennai Institute of Technology Logo" className="edu-logo" />
              <div className="edu-details">
                <h3>Chennai Institute of Technology</h3>
                <h4>Bachelor of Engineering (BE) in Computer Science</h4>
                <span className="edu-date">Sep 2024 &ndash; Jul 2028</span>
              </div>
            </div>
            <p className="edu-desc">
              Building a strong foundation in core computer science, focusing on programming, 
              algorithms, machine learning, and financial tech. Actively participating in Centres of Excellence 
              and student clubs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
