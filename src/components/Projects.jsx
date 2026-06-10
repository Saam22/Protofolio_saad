import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaExternalLinkAlt, FaGithub, FaCode, FaRocket, FaStar, FaSearch } from 'react-icons/fa';
import { staggerContainer, staggerItemScale, springHover } from '../animations';
import './Projects.css';

const typeConfig = {
  Frontend: { cls: 'frontend', color: '#818cf8', glow: 'rgba(129,140,248,0.35)', icon: <FaStar /> },
  Backend: { cls: 'backend', color: '#34d399', glow: 'rgba(52,211,153,0.35)', icon: <FaCode /> },
  'Full Stack': { cls: 'fullstack', color: '#f472b6', glow: 'rgba(244,114,182,0.35)', icon: <FaRocket /> },
};

const ProjectCard = ({ project, index }) => {
  const type = typeConfig[project.type] || typeConfig.Frontend;
  const isFeatured = index === 0;

  return (
    <motion.article
      className={`project-card glass${isFeatured ? ' featured' : ''}`}
      style={{
        '--type-color': type.color,
        '--type-glow': type.glow,
      }}
      variants={staggerItemScale}
      custom={index}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className="card-glow" />
      <div className="card-orb" />

      <div className="card-badge">
        <span className="badge-dot" style={{ background: type.color }} />
        {type.icon} {project.type}
      </div>

      <div className="project-image-wrap">
        <div className="project-img-inner">
          <motion.img
            src={project.image}
            alt={project.title}
            className="project-img"
            loading="lazy"
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          />
          <div className="img-shine" />
        </div>
        <motion.div
          className="img-overlay glass"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          <motion.div
            className="overlay-inner"
            initial={{ y: 16 }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <span className="overlay-icon">{type.icon}</span>
            <span>Explore Project</span>
            <div className="overlay-dots">
              <span /><span /><span />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="project-body">
        <h3 className="project-title">
          <span className="title-line" />
          {project.title}
        </h3>
        <p className="project-desc">{project.description}</p>

        <div className="tech-pills">
          {project.technologies.map((tech, i) => (
            <motion.span
              key={i}
              className="tech-pill"
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 + 0.3, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -2, scale: 1.06, background: 'var(--p)', color: 'var(--bg)' }}
              title={tech}
            >
              {tech}
              <span className="tech-tooltip">{tech}</span>
            </motion.span>
          ))}
        </div>

        <div className="project-links">
          <motion.a
            href={project.live || project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-link live-link"
            {...springHover}
          >
            <FaRocket /> Live Demo
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-link code-link"
            {...springHover}
          >
            <FaGithub /> Source
          </motion.a>
        </div>
      </div>

      <div className="corner tl" />
      <div className="corner br" />
    </motion.article>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const types = ['All', ...new Set(portfolioData.projects.map((p) => p.type))];

  const filtered = useMemo(() => {
    return portfolioData.projects.filter((p) => {
      const matchType = filter === 'All' || p.type === filter;
      const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchType && matchSearch;
    });
  }, [filter, search]);

  const getCount = (type) => {
    if (type === 'All') return portfolioData.projects.length;
    return portfolioData.projects.filter((p) => p.type === type).length;
  };

  return (
    <section id="projects" className="projects-section">
      <div className="gradient-bg" />
      <div className="floating-orbs">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="orb"
            style={{
              '--s': `${Math.random() * 120 + 60}px`,
              '--d': `${Math.random() * 5}s`,
              '--dur': `${Math.random() * 12 + 14}s`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="subsection-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="dot" /> My Work
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Featured <span className="accent-word">Projects</span>
          </motion.h2>
          <motion.p
            className="projects-sub"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A curated collection of projects showcasing my skills in modern web development
          </motion.p>
        </motion.div>

        <motion.div
          className="projects-toolbar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="filter-tabs">
            {types.map((t) => (
              <motion.button
                key={t}
                className={`filter-tab${filter === t ? ' active' : ''}`}
                onClick={() => setFilter(t)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                {t}
                <span className="filter-count">{getCount(t)}</span>
              </motion.button>
            ))}
          </div>
          <div className="search-wrap">
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={staggerContainer.viewport}
        >
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            )) : (
              <motion.div
                className="projects-empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p>No projects match your search. Try a different filter or keyword.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="view-all"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="https://github.com/Saam22"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            {...springHover}
          >
            View More on GitHub <FaExternalLinkAlt />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
