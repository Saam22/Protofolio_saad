import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaCalendarAlt, FaBuilding } from 'react-icons/fa';
import './Experience.css';

const Experience = () => (
  <section id="experience" className="experience-section">
    <div className="container">
      <h2 className="section-title fade-in">
        Work <span className="accent-word">Experience</span>
      </h2>
      <div className="timeline">
        {portfolioData.experience.map((exp, i) => (
          <div key={i} className="timeline-item fade-in" style={{ '--i': i }}>
            <div className="timeline-dot" />
            <div className="timeline-line" />
            <div className="timeline-card">
              <span className="timeline-period"><FaCalendarAlt className="timeline-period-icon" /> {exp.period}</span>
              <h3 className="timeline-title">{exp.title}</h3>
              <h4 className="timeline-company"><FaBuilding className="timeline-company-icon" /> {exp.company}</h4>
              {exp.description && (
                <p className="timeline-desc">{exp.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;