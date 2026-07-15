import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Projects() {
  return (
    <section id="projects">
      <div className="eyebrow">Portfolio</div>
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-desc">Real-world projects built with purpose — from assistive AI to client-facing web platforms.</p>
      <div className="projects-grid">
        <ScrollReveal delay={0.1}>
          <div className="project-card" style={{ '--pc-grad': 'linear-gradient(135deg, rgba(236,254,255,0.8), rgba(239,246,255,0.8))' } as React.CSSProperties}>
            <span className="badge badge-cv">👁️ Computer Vision</span>
            <h3 className="project-title">Blind Assistance System</h3>
            <p className="project-desc">A real-time assistive AI that detects obstacles and objects for visually impaired people using YOLOv8 and Python — providing instant audio feedback to help users navigate independently and safely.</p>
            <div className="tag-row">
              <span className="tag">YOLO v8</span>
              <span className="tag">Python</span>
              <span className="tag">OpenCV</span>
              <span className="tag">Deep Learning</span>
              <span className="tag">TTS</span>
            </div>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="project-link">View on GitHub →</a>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="project-card" style={{ '--pc-grad': 'linear-gradient(135deg, rgba(255,247,237,0.8), rgba(253,244,255,0.8))' } as React.CSSProperties}>
            <span className="badge badge-web">🌐 Web Project</span>
            <h3 className="project-title">Prathitha Digital Printers</h3>
            <p className="project-desc">A fully responsive, production-grade website designed and developed for a real-world digital printing company — featuring service showcases, contact forms, and a polished UI that represents the brand professionally.</p>
            <div className="tag-row">
              <span className="tag">React</span>
              <span className="tag">UI/UX Design</span>
              <span className="tag">Responsive</span>
              <span className="tag">Client Project</span>
            </div>
            <a href="https://prathithadp.com/" target="_blank" rel="noreferrer" className="project-link">Live Demo →</a>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="project-card" style={{ '--pc-grad': 'linear-gradient(135deg, rgba(255,247,237,0.8), rgba(253,244,255,0.8))' } as React.CSSProperties}>
            <span className="badge badge-web">🌐 Chatbot </span>
            <h3 className="project-title">Rajakala Printers Chatbot</h3>
            <p className="project-desc">A fully responsive, chatbot — featuring Greeting messages, contact options, and a connecting bridge to the customer and employee .</p>
            <div className="tag-row">
              <span className="tag">python</span>

            </div>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="project-link">View on GitHub →</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
