import React from 'react';
import { FaGoogle, FaMicrosoft, FaGithub, FaAws, FaServer, FaAward } from 'react-icons/fa';
import './Courses.css';

const courses = [
  {
    icon: <FaGoogle />,
    title: 'Google Cloud Cybersecurity Certificate',
    provider: 'Google Cloud &bull; Professional Certificate'
  },
  {
    icon: <FaMicrosoft />,
    title: 'Career Essentials in Generative AI',
    provider: 'Microsoft and LinkedIn'
  },
  {
    icon: <FaGithub />,
    title: 'Career Essentials in GitHub',
    provider: 'GitHub &bull; Professional Certificate'
  },
  {
    icon: <FaAws />,
    title: 'AWS IoT Learning Plan',
    provider: 'AWS Training & Certification'
  },
  {
    icon: <FaServer />,
    title: 'DevOps Professional Certificate',
    provider: 'PagerDuty'
  },
  {
    icon: <FaAward />,
    title: 'Creator Studio Delivery Accreditation',
    provider: 'ServiceNow'
  }
];

const Courses: React.FC = () => {
  return (
    <section id="courses" className="section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-sub-title">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <div className="section-underline"></div>
        </div>
        
        <div className="courses-grid">
          {courses.map((course, i) => (
            <div className="glass-card course-card" key={i}>
              <div className="course-icon-wrapper">{course.icon}</div>
              <h3 className="course-card-title">{course.title}</h3>
              <p className="course-card-provider" dangerouslySetInnerHTML={{ __html: course.provider }}></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
