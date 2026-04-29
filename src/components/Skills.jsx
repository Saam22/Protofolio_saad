import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiDotnet, SiDjango, SiExpress, SiMongodb } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const { skills } = portfolioData;
  
  const SkillCard = ({ title, icon, items, color }) => (
    <div className="skill-card" style={{ borderColor: color }}>
      <div className="skill-header" style={{ color }}>
        {icon}
        <h3>{title}</h3>
      </div>
      <div className="skill-tags">
        {items.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">💻 My Skills</h2>
      
      <div className="skills-grid">
        {/* Programming Languages */}
        <SkillCard 
          title="Programming Languages"
          icon={<FaPython />}
          items={skills.programmingLanguages}
          color="#3776ab"
        />
        
        {/* Frontend */}
        <SkillCard 
          title="Frontend Development"
          icon={<FaReact />}
          items={[...skills.frontend.languages, ...skills.frontend.libraries]}
          color="#61dafb"
        />
        
        {/* .NET Backend */}
        <SkillCard 
          title=".NET Backend"
          icon={<SiDotnet />}
          items={skills.backend.dotnet}
          color="#512bd4"
        />
        
        {/* ✅ Node.js Backend - تمت الإضافة */}
        <SkillCard 
          title="Node.js Backend"
          icon={<FaNodeJs />}
          items={skills.backend.nodejs}
          color="#68a063"
        />
        
        {/* ✅ Django Backend - تمت الإضافة */}
        <SkillCard 
          title="Django Backend"
          icon={<SiDjango />}
          items={skills.backend.django}
          color="#092e20"
        />
        
        {/* Other Skills */}
        <SkillCard 
          title="Other Skills"
          icon={<FaGitAlt />}
          items={skills.other}
          color="#f05032"
        />
      </div>
    </section>
  );
};

export default Skills;