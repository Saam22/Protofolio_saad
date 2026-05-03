import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
// ✅ FIXED: Removed FaSparkles (doesn't exist), using FaStar & FaMagic instead
import { FaExternalLinkAlt, FaGithub, FaCode, FaRocket, FaStar, FaMagic } from 'react-icons/fa';
import './Projects.css';

const typeConfig = {
  Frontend: { class: 'frontend', color: '#818cf8', glow: 'rgba(129,140,248,0.4)', icon: <FaStar /> },
  Backend: { class: 'backend', color: '#34d399', glow: 'rgba(52,211,153,0.4)', icon: <FaCode /> },
  'Full Stack': { class: 'fullstack', color: '#f9a8d4', glow: 'rgba(249,168,212,0.4)', icon: <FaRocket /> }
};

const Projects = () => {
  const cardsRef = useRef([]);
  const [loaded, setLoaded] = useState(false);

  // 3D Tilt Effect Logic
  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    
    const glow = card.querySelector('.glow-orb');
    if (glow) {
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      glow.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, var(--type-glow), transparent 60%)`;
    }
  };

  const handleMouseLeave = (card) => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  };

  // Magnetic Button Effect
  const handleButtonMove = (e, btn) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleButtonLeave = (btn) => {
    btn.style.transform = 'translate(0, 0)';
  };

  // Staggered entrance animation
  useEffect(() => {
    setLoaded(true);
    
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.setProperty('--stagger-delay', `${index * 0.15}s`);
        
        const badges = card.querySelectorAll('.tech-badge');
        badges.forEach((badge, i) => {
          badge.style.setProperty('--badge-delay', `${i * 0.08}s`);
        });
        
        setTimeout(() => {
          card.classList.add('animate-in');
        }, index * 150);
      }
    });
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    document.querySelectorAll('.project-card').forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const getProjectType = (type) => typeConfig[type] || typeConfig['Frontend'];

  return (
    <section id="projects" className="projects-section">
      {/* Floating Background Elements */}
      <div className="floating-bg">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="float-orb" 
            style={{
              '--orb-size': `${Math.random() * 100 + 50}px`,
              '--orb-delay': `${Math.random() * 5}s`,
              '--orb-duration': `${Math.random() * 10 + 15}s`,
              '--orb-x': `${Math.random() * 100}%`,
              '--orb-y': `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container">
        {/* Section Header */}
        <div className={`section-header ${loaded ? 'animate-header' : ''}`}>
          <span className="section-label">
            <FaMagic className="label-icon" /> My Work
          </span>
          <h2 className="section-title">
            Featured <span className="accent-word">Projects</span>
          </h2>
          <p className="section-subtitle">
            A curated collection of projects showcasing my skills in modern web development
          </p>
          <div className="divider"></div>
        </div>

        <div className="projects-grid">
          {portfolioData.projects.map((project, index) => {
            const type = getProjectType(project.type);
            return (
              <article
                key={index}
                className="project-card"
                ref={el => cardsRef.current[index] = el}
                style={{ 
                  '--type-color': type.color,
                  '--type-glow': type.glow,
                  '--stagger-index': index
                }}
                onMouseMove={(e) => handleMouseMove(e, cardsRef.current[index])}
                onMouseLeave={() => handleMouseLeave(cardsRef.current[index])}
              >
                {/* Animated Gradient Border */}
                <div className="gradient-border"></div>
                
                {/* Dynamic Glow Orb */}
                <div className="glow-orb"></div>

                {/* Type Indicator */}
                <div className="type-indicator">
                  <span className="type-wave" style={{ background: type.color }}></span>
                  <span className="type-icon">{type.icon}</span>
                </div>

                {/* Project Image */}
                <div className="project-image-wrapper">
                  <div className="image-parallax">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-image"
                      loading="lazy"
                    />
                    <div className="image-shine"></div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <div className="overlay-icon-wrapper">
                        <span className="overlay-icon">{type.icon}</span>
                        <FaStar className="sparkle-icon" />
                      </div>
                      <span className="overlay-text">Explore Project</span>
                      <div className="overlay-arrow">
                        <span></span><span></span><span></span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated Type Badge */}
                  <span className={`type-badge ${type.class}`}>
                    <span className="badge-wave"></span>
                    {type.icon} {project.type}
                  </span>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">
                      <span className="title-underline"></span>
                      {project.title}
                    </h3>
                  </div>

                  <p className="project-desc">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="tech-stack">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="tech-badge"
                        style={{ '--tech-index': i }}
                      >
                        <span className="tech-dot"></span>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="project-links">
                    <a 
                      href={project.live || project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="proj-link live"
                      onMouseMove={(e) => handleButtonMove(e, e.currentTarget)}
                      onMouseLeave={(e) => handleButtonLeave(e.currentTarget)}
                    >
                      <FaRocket className="link-icon" />
                      <span className="link-text">Live Demo</span>
                      <span className="link-glow"></span>
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="proj-link code"
                      onMouseMove={(e) => handleButtonMove(e, e.currentTarget)}
                      onMouseLeave={(e) => handleButtonLeave(e.currentTarget)}
                    >
                      <FaGithub className="link-icon" />
                      <span className="link-text">Source Code</span>
                      <span className="link-glow"></span>
                    </a>
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="corner-decoration top-right"></div>
                <div className="corner-decoration bottom-left"></div>
              </article>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="view-all-wrapper">
          <a 
            href="https://github.com/Saam22" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-view-all"
          >
            <span className="btn-text">View More on GitHub</span>
            <FaExternalLinkAlt className="btn-icon" />
            <span className="btn-glow"></span>
            <span className="btn-particles"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;