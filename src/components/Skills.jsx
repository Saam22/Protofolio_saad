import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiDotnet, SiDjango } from 'react-icons/si';
import './Skills.css';

const SkillCard = ({ icon, title, items, accentColor }) => (
  <div
    className="skill-card fade-in"
    style={{ '--card-accent': `linear-gradient(90deg, ${accentColor}, transparent)` }}
  >
    <span className="skill-icon">{icon}</span>
    <h3>{title}</h3>
    <div className="skill-tags">
      {items.map((s) => (
        <span key={s} className="skill-tag">{s}</span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const { skills } = portfolioData;

  const cards = [
    {
      icon: <FaReact color="#61dafb" />,
      title: 'Frontend Development',
      items: [...skills.frontend.languages, ...skills.frontend.libraries],
      accentColor: '#61dafb',
    },
    {
      icon: <FaNodeJs color="#68a063" />,
      title: 'Node.js Backend',
      items: skills.backend.nodejs,
      accentColor: '#68a063',
    },
    {
      icon: <SiDjango color="#34d399" />,
      title: 'Django Backend',
      items: skills.backend.django,
      accentColor: '#34d399',
    },
    {
      icon: <SiDotnet color="#818cf8" />,
      title: '.NET Backend',
      items: skills.backend.dotnet,
      accentColor: '#818cf8',
    },
    {
      icon: <FaPython color="#fbbf24" />,
      title: 'Programming Languages',
      items: skills.programmingLanguages,
      accentColor: '#fbbf24',
    },
    {
      icon: <FaGitAlt color="#f87171" />,
      title: 'Other Skills',
      items: skills.other,
      accentColor: '#f87171',
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title fade-in">
          My <span className="accent-word">Skills</span>
        </h2>
        <div className="skills-grid">
          {cards.map((c) => (
            <SkillCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;