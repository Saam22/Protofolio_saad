import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './About.css';

const About = () => {
  const tags = ['React JS', 'Node.js', 'Django', 'TypeScript', 'ASP.NET', 'PostgreSQL', 'MongoDB', 'Git'];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title fade-in">
          About <span className="accent-word">Me</span>
        </h2>

        <div className="about-layout">
          {/* Left */}
          <div className="fade-in">
            <div className="about-avatar-wrap">
              <div className="about-avatar">SM</div>
              <span className="about-avatar-badge">Cairo, Egypt 🇪🇬</span>
            </div>

            <h3 className="about-headline">
              Full-Stack Developer with a <em>passion</em> for clean code
            </h3>
            <p className="about-body">{portfolioData.profile}</p>

            <div className="about-tags">
              {tags.map((t) => (
                <span key={t} className="about-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="about-sidebar fade-in">
            <div className="info-block">
              <div className="info-block-header">Personal Info</div>
              <div className="info-row">
                <span className="label">Location</span>
                <span className="value">{portfolioData.personal.location}</span>
              </div>
              <div className="info-row">
                <span className="label">Email</span>
                <span className="value accent" style={{ fontSize: '0.82rem' }}>
                  {portfolioData.personal.email}
                </span>
              </div>
              <div className="info-row">
                <span className="label">Phone</span>
                <span className="value">{portfolioData.personal.phone}</span>
              </div>
            </div>

            <div className="info-block">
              <div className="info-block-header">Education</div>
              <div className="info-row">
                <span className="label">Degree</span>
                <span className="value">Bachelor of CS</span>
              </div>
              <div className="info-row">
                <span className="label">University</span>
                <span className="value" style={{ fontSize: '0.82rem', textAlign: 'right' }}>
                  Ain Shams University
                </span>
              </div>
              <div className="info-row">
                <span className="label">Year</span>
                <span className="value">2019 – 2024</span>
              </div>
            </div>

            <div className="info-block">
              <div className="info-block-header">Status</div>
              <div className="info-row">
                <span className="label">Availability</span>
                <span className="value accent">Open to work</span>
              </div>
              <div className="info-row">
                <span className="label">Type</span>
                <span className="value">Full-time / Remote</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;