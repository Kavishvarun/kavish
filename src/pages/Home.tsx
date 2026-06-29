import { Link } from 'react-router-dom';
import profileImage from '../assets/images/kavish.jpeg';

export default function Home() {
  return (
    <section className="hero" style={{ flexDirection: 'row', alignItems: 'center', gap: '4rem', display: 'flex', flexWrap: 'wrap' }}>
      <div className="hero-content" style={{ flex: 1, minWidth: '300px' }}>
        <div className="hero-tag"><span className="dot"></span> B.Tech AI &amp; Data Science</div>
        <h1>
          <span className="hi">Hi, I'm</span><br/>
          <span className="grad-name">Kavish Varun.</span><br/>
          <span className="hi">I build AI that</span><br/>
          <span className="hi">matters.</span>
        </h1>
        <div className="badges-row">
          <span className="float-badge fb1">🧠 Machine Learning</span>
          <span className="float-badge fb2">⚛️ React / Next.js</span>
          <span className="float-badge fb3">👁️ Computer Vision</span>
          <span className="float-badge fb4">📊 Data Science</span>
          <span className="float-badge fb5">💬 NLP / LLMs</span>
        </div>
        <p className="hero-sub">AI/ML developer &amp; creative designer — I turn complex data into intelligent systems and ideas into polished, real-world digital products.</p>
        <div className="hero-ctas">
          <Link to="/projects" className="btn-primary">View My Work ↓</Link>
          <Link to="/contact" className="btn-outline">Get in Touch</Link>
        </div>
        <div className="hero-stats">
          <div className="stat"><span className="stat-num">2+</span><span className="stat-label">Live Projects</span></div>
          <div className="stat-divider"></div>
          <div className="stat"><span className="stat-num">8+</span><span className="stat-label">Skills</span></div>
          <div className="stat-divider"></div>
          <div className="stat"><span className="stat-num">AI</span><span className="stat-label">Core Focus</span></div>
          <div className="stat-divider"></div>
          <div className="stat"><span className="stat-num">∞</span><span className="stat-label">Curiosity</span></div>
        </div>
      </div>
      <div className="hero-image" style={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: '300px' }}>
        <img src={profileImage} alt="Kavish Varun" style={{ width: '100%', maxWidth: '400px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(108,43,217,0.2)', objectFit: 'cover' }} />
      </div>
    </section>
  );
}
