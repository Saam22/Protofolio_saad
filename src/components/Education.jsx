import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaAward, FaBookOpen } from 'react-icons/fa';
import './Education.css';

/* ── Education ────────────────────────────────────── */
export const Education = () => (
  <section id="education" className="education-section">
    <div className="container">
      <h2 className="section-title fade-in">
        <span className="accent-word">Education</span>
      </h2>
      <div className="edu-grid">
        {portfolioData.education.map((edu, i) => (
          <div key={i} className="edu-card fade-in">
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-institution">{edu.institution}</div>
            {edu.department && <div className="edu-dept">{edu.department}</div>}
            <div className="edu-meta">
              <span>📅 {edu.period}</span>
              <span>📍 {edu.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── Certificates ─────────────────────────────────── */
export const Certificates = () => (
  <section id="certificates" className="certificates-section">
    <div className="container">
      <h2 className="section-title fade-in">
        <span className="accent-word">Certificates</span>
      </h2>
      <div className="certs-grid">
        {portfolioData.certificates.map((cert, i) => (
          <div key={i} className="cert-card fade-in">
            <div className="cert-icon"><FaAward /></div>
            <div className="cert-title">{cert.title}</div>
            <div className="cert-issuer">{cert.issuer}</div>
            <span className="cert-date">📅 {cert.date}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── Courses ──────────────────────────────────────── */
export const Courses = () => (
  <section id="courses" className="courses-section">
    <div className="container">
      <h2 className="section-title fade-in">
        Courses & <span className="accent-word">Training</span>
      </h2>
      <div className="courses-grid">
        {portfolioData.courses.map((course, i) => (
          <div key={i} className="course-card fade-in">
            <div className="course-icon"><FaBookOpen /></div>
            <div>
              <h3>{course}</h3>
              <span className="course-badge">✓ Completed</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);