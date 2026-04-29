import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>SM<span>.</span></h3>
          <p>Full-Stack Web Developer</p>
        </div>
        <div className="footer-social">
          <a href={`https://${portfolioData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={`mailto:${portfolioData.personal.email}`} aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {portfolioData.personal.name} — Built with React &amp; passion 🇪🇬</p>
      </div>
    </div>
  </footer>
);

export default Footer;