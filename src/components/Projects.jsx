import React from 'react';
import { portfolioData } from '../data/portfolioData';
// import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const typeClass = (type) =>
  type === 'Frontend' ? 'frontend' : type === 'Backend' ? 'backend' : 'fullstack';

const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="container">
      <h2 className="section-title fade-in">
        Featured <span className="accent-word">Projects</span>
      </h2>
      <div className="projects-grid">
        {portfolioData.projects.map((p, i) => (
          <div key={i} className="project-card fade-in">
            <div className="project-header">
              <h3>{p.title}</h3>
              <span className={`type-badge ${typeClass(p.type)}`}>{p.type}</span>
            </div>
            <p className="project-desc">{p.description}</p>
            <div className="tech-stack">
              {p.technologies.map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
            <div className="project-links">
              {/* <a href={p.link} target="_blank" rel="noopener noreferrer" className="proj-link primary">
                <FaExternalLinkAlt size={12} /> Live Demo
              </a>
              <a href="https://github.com/Saam22/project" className="proj-link ghost">
                <FaGithub size={13} /> Code
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;