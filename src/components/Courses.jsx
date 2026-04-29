import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaBookOpen } from 'react-icons/fa';
import './Courses.css';

const Courses = () => {
  return (
    <section id="courses" className="courses-section">
      <div className="container">
        <h2 className="section-title fade-in">📚 Courses & Training</h2>
        <div className="courses-grid">
          {portfolioData.courses.map((course, index) => (
            <div key={index} className="course-card glass-card fade-in">
              <div className="course-icon">
                <FaBookOpen />
              </div>
              <h3>{course}</h3>
              <span className="course-badge">Completed</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;