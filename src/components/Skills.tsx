import React from 'react';
import { FaCode, FaPenNib, FaPeopleGroup } from 'react-icons/fa6';
import './Skills.css';

const skillGroups = [
  {
    title: 'Technical Skills',
    icon: <FaCode />,
    items: [
      'Data Structures',
      'Algorithms',
      'OOP (Basics)',
      'Python (Basics)',
      'Java (Beginner)',
      'SQL',
      'C',
      'React.js',
      'JavaScript',
      'Django',
      'MongoDB',
      'MySQL',
      'AI & ML'
    ]
  },
  {
    title: 'Design & Tools',
    icon: <FaPenNib />,
    items: [
      'UI/UX Design',
      'Git',
      'GitHub',
      'VS Code',
      'Figma',
      'Canva',
      'Graphic Design',
      'Antigravity',
      'Prompt Engineering'
    ]
  },
  {
    title: 'Soft Skills',
    icon: <FaPeopleGroup />,
    items: [
      'Critical Thinking',
      'Team Management',
      'Leadership',
      'Project Management',
      'Communication',
      'Problem Solving'
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-sub-title">Expertise</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <div className="section-underline"></div>
        </div>
        
        <div className="skills-rows-container">
          {skillGroups.map((group, i) => (
            <div className="glass-card skills-row-card" key={i}>
              <div className="skills-row-header">
                <span className="skills-row-icon">{group.icon}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="skills-row-tags">
                {group.items.map((skill, si) => (
                  <span className="skill-item-pill" key={si}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
