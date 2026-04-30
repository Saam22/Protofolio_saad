import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">

        {/* ── Left ── */}
        <div className="hero-text fade-in">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-name">
            {portfolioData.personal.name.split(' ').slice(0, 2).join(' ')}
            <span className="line2">{portfolioData.personal.name.split(' ').slice(2).join(' ')}</span>
          </h1>

          <p className="hero-role">
            {portfolioData.personal.title} &nbsp;·&nbsp; React &nbsp;/&nbsp; Django &nbsp;/&nbsp; Node.js
          </p>

          <p className="hero-desc">
            I build fast, accessible, and visually stunning web experiences.
            Passionate about clean architecture, modern UI, and shipping things that matter.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <FaArrowRight />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">1+</div>
              <div className="stat-label">Years learning</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">8+</div>
              <div className="stat-label">Projects built</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">3</div>
              <div className="stat-label">Internships</div>
            </div>
          </div>
        </div>

        {/* ── Right ── */}
        <div className="hero-visual fade-in">
          <div className="code-window">
            <div className="win-header">
              <span className="win-dot r" />
              <span className="win-dot y" />
              <span className="win-dot g" />
              <span className="win-tab"><span>developer.ts</span></span>
            </div>
            <pre className="code-content">
<span className="code-kw">const</span> developer = {'{'}{'\n'}
{'  '}<span className="code-key">name</span>:    <span className="code-str">"Saad Mohamed Hassan"</span>,{'\n'}
{'  '}<span className="code-key">role</span>:    <span className="code-str">"Full-Stack Developer"</span>,{'\n'}
{'  '}<span className="code-key">stack</span>: [{'\n'}
{'    '}<span className="code-str">"React"</span>, <span className="code-str">"Node.js"</span>,{'\n'}
{'    '}<span className="code-str">"Django"</span>, <span className="code-str">"ASP.NET"</span>{'\n'}
{'  '}],{'\n'}
{'  '}<span className="code-key">passion</span>: <span className="code-str">"Building web magic ✨"</span>,{'\n'}
{'  '}<span className="code-key">status</span>:  <span className="code-str">"Open to work 🚀"</span>{'\n'}
{'}'};
            </pre>
          </div>

          <div className="status-card">
            <span className="status-indicator" />
            <p className="status-text">
              <strong>Open to work</strong> — Actively looking for frontend &amp; full-stack roles
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;