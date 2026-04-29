import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: '', message: '' });

    emailjs.sendForm(
      'service_8rqwlwo',
      'template_6i8cg27',
      form.current,
      'wjOB0eAAApcdj2E3b'
    )
    .then(() => {
      setStatus({ type: 'success', message: '✅ Message sent! I\'ll get back to you soon.' });
      form.current.reset();
    })
    .catch(() => {
      setStatus({ type: 'error', message: '❌ Something went wrong. Please try again.' });
    })
    .finally(() => setSending(false));
  };

  const contactItems = [
    { icon: <FaEnvelope />, label: 'Email',    value: portfolioData.personal.email,   href: `mailto:${portfolioData.personal.email}` },
    { icon: <FaPhone />,    label: 'Phone',    value: portfolioData.personal.phone,   href: `tel:${portfolioData.personal.phone}` },
    { icon: <FaLinkedin />, label: 'LinkedIn', value: 'View Profile',                 href: `https://${portfolioData.personal.linkedin}`, target: '_blank' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: portfolioData.personal.location, href: null },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title fade-in">
          Get In <span className="accent-word">Touch</span>
        </h2>

        <div className="contact-grid">
          {/* Left */}
          <div className="contact-info fade-in">
            <h3 className="contact-tagline">
              Let's build something <em>great</em> together
            </h3>
            <p className="contact-sub">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="contact-items">
              {contactItems.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.target}
                    rel="noopener noreferrer"
                    className="contact-item"
                  >
                    <div className="ci-icon">{item.icon}</div>
                    <div className="ci-text">
                      <div className="ci-label">{item.label}</div>
                      <div className="ci-value">{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div key={item.label} className="contact-item">
                    <div className="ci-icon">{item.icon}</div>
                    <div className="ci-text">
                      <div className="ci-label">{item.label}</div>
                      <div className="ci-value">{item.value}</div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right — form */}
          <div className="fade-in">
            <form ref={form} onSubmit={sendEmail} className="contact-form-wrap">
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="user_name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="user_email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" name="subject" placeholder="What's this about?" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="Tell me about your project..." rows="5" required />
              </div>

              {status.message && (
                <div className={`status-message ${status.type}`}>{status.message}</div>
              )}

              <button type="submit" className="btn-submit" disabled={sending}>
                {sending ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;