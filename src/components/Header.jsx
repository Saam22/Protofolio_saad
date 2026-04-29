import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const links = [
    { name: 'Home',       href: '#home' },
    { name: 'About',      href: '#about' },
    { name: 'Skills',     href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects',   href: '#projects' },
    { name: 'Contact',    href: '#contact' },
  ];

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <nav className="navbar container">
        <a href="#home" className="nav-brand">SM<span>.</span></a>

        <ul className={`nav-menu${isOpen ? ' active' : ''}`}>
          {links.map((l) => (
            <li key={l.name}>
              <a href={l.href} className="nav-link" onClick={() => setIsOpen(false)}>
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-btn" aria-label="Toggle theme">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;