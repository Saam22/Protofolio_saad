import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const { personal, profile } = portfolioData;
  
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">👋 Hello, I'm</p>
          <h1 className="hero-name">{personal.name}</h1>
          <h2 className="hero-title">{personal.title}</h2>
          <p className="hero-description">{profile}</p>
          
          <div className="hero-contact">
            <a href={`mailto:${personal.email}`} className="contact-link">
              <FaEnvelope /> {personal.email}
            </a>
            <a href={`tel:${personal.phone}`} className="contact-link">
              <FaPhone /> {personal.phone}
            </a>
          </div>
          
          <div className="hero-social">
            <a href={`https://${personal.linkedin}`} target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href={`https://${personal.github}`} target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
          </div>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="profile-placeholder">
            <span>SM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;