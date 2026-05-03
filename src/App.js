import React, { useEffect } from 'react';
import Header   from './components/Header';
import Hero     from './components/Hero';
import About    from './components/About';
import Skills   from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

import { Education, Certificates, Courses } from './components/Education';
import Contact  from './components/Contact';
import Footer   from './components/Footer';
import './App.css';

function App() {
  // تفعيل Intersection Observer للأنيميشن عند السكرول
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
  );

  document.querySelectorAll('.project-card').forEach(card => observer.observe(card));
  return () => observer.disconnect();
}, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Courses />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;