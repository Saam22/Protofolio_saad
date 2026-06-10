import React, { useState, useEffect, useRef, useMemo } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { springHover } from '../animations';
import { scrollToSection } from '../App';
import './Hero.css';

const roles = ['Web Developer', 'Full-Stack Developer', 'React Developer', 'UI/UX Enthusiast'];

const Typewriter = ({ texts }) => {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let timeout;
    if (!deleting && char < current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, char + 1));
        setChar((c) => c + 1);
      }, 80);
    } else if (!deleting && char === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && char > 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, char - 1));
        setChar((c) => c - 1);
      }, 40);
    } else if (deleting && char === 0) {
      setDeleting(false);
      setIndex((index + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [char, deleting, index, texts]);

  return (
    <span className="typewriter-text">
      {display}<span className="typewriter-cursor">|</span>
    </span>
  );
};

const AnimatedCounter = ({ target, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(target / (1500 / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Particles = ({ count = 30 }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        dx: (Math.random() - 0.5) * 300,
        dy: (Math.random() - 0.5) * 300,
        duration: Math.random() * 12 + 12,
        delay: Math.random() * 6,
      })),
    [count]
  );

  return (
    <div className="particles" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            '--ps': `${p.size}px`,
            left: `${p.x}%`,
            top: `${p.y}%`,
            '--dx': `${p.dx}px`,
            '--dy': `${p.dy}px`,
            '--pd': `${p.duration}s`,
            '--pdelay': `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const codeRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const handleMove = (e) => {
    if (!codeRef.current) return;
    const rect = codeRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const scroll = (id) => (e) => { e.preventDefault(); scrollToSection(id); };

  return (
    <section id="home" className="hero-section">
      <div className="gradient-bg" />
      <Particles />
      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
        >
          <motion.div
            className="subsection-label"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="dot" />
            Available for opportunities
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            {portfolioData.personal.name.split(' ').slice(0, 2).join(' ')}
            <span className="hero-name-accent">
              {portfolioData.personal.name.split(' ').slice(2).join(' ')}
            </span>
          </motion.h1>

          <motion.p
            className="hero-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Typewriter texts={roles} /> <span className="hero-role-divider">·</span> React / Django / Node.js
          </motion.p>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            I build fast, accessible, and visually stunning web experiences.
            Passionate about clean architecture, modern UI, and shipping things that matter.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.a
              href="#projects"
              className="btn btn-primary"
              onClick={scroll('projects')}
              {...springHover}
            >
              View Projects <FaArrowRight />
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-outline"
              onClick={scroll('contact')}
              {...springHover}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            {[
              { num: 1, suffix: '+', label: 'Years learning' },
              { num: 8, suffix: '+', label: 'Projects built' },
              { num: 3, suffix: '', label: 'Internships' },
            ].map((s) => (
              <div key={s.label} className="stat-item">
                <div className="stat-num">
                  <AnimatedCounter target={s.num} suffix={s.suffix} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
        >
          <motion.div
            ref={codeRef}
            className="code-window glass hero-float"
            onMouseMove={handleMove}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            animate={{
              rotateX: hover ? mousePos.y * -10 : 0,
              rotateY: hover ? mousePos.x * 10 : 0,
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            style={{ perspective: 1000 }}
          >
            <div className="win-header">
              <span className="win-dot r" /><span className="win-dot y" /><span className="win-dot g" />
              <span className="win-tab">developer.ts</span>
            </div>
            <pre className="code-content">
              <span className="kw">const</span> developer = {'{'}{'\n'}
              {'  '}<span className="key">name</span>: <span className="str">"Saad Mohamed Hassan"</span>,{'\n'}
              {'  '}<span className="key">role</span>: <span className="str">"Full-Stack Developer"</span>,{'\n'}
              {'  '}<span className="key">stack</span>: [<span className="str">"React"</span>, <span className="str">"Node.js"</span>, <span className="str">"Django"</span>, <span className="str">"ASP.NET"</span>],{'\n'}
              {'  '}<span className="key">passion</span>: <span className="str">"Building web magic"</span>,{'\n'}
              {'  '}<span className="key">status</span>: <span className="str">"Open to work"</span>,{'\n'}
              {'}'};
            </pre>
          </motion.div>

          <motion.div
            className="status-card glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="status-dot" />
            <p className="status-text">
              <strong>Open to work</strong> — Actively looking for frontend & full-stack roles
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
