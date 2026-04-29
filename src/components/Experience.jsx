import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Experience.css';

const Experience = () => (
  <section id="experience" className="experience-section">
    <div className="container">
      <h2 className="section-title fade-in">
        Work <span className="accent-word">Experience</span>
      </h2>
      <div className="timeline">
        {portfolioData.experience.map((exp, i) => (
          <div key={i} className="timeline-item fade-in">
            <div className="timeline-dot" />
            <div className="timeline-card">
              <span className="timeline-period">{exp.period}</span>
              <h3 className="timeline-title">{exp.title}</h3>
              <h4 className="timeline-company">{exp.company}</h4>
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