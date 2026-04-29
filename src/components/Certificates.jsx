import './common.css';
import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaAward } from 'react-icons/fa';
import './Certificates.css';

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <h2 className="section-title fade-in">🏆 Certificates</h2>
        <div className="certificates-grid">
          {portfolioData.certificates.map((cert, index) => (
            <div key={index} className="cert-card glass-card fade-in">
              <div className="cert-icon">
                <FaAward />
              </div>
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <span className="cert-date">📅 {cert.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;