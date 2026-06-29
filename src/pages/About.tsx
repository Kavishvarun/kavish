import profileImage from '../assets/images/kavish_2.jpeg';
export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-visual">
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px', margin: '0 auto' }}>
            <img
              src={profileImage}
              alt="Kavish Varun"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '24px',
                display: 'block',
                boxShadow: '0 20px 40px rgba(108,43,217,0.2)',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
        <div className="about-text">
          <div className="eyebrow">About Me</div>
          <h2 className="section-title">Developer.<br />Designer.<br />AI Enthusiast.</h2>
          <p>I'm Kavish Varun, a B.Tech student specializing in Artificial Intelligence and Data Science. I live at the intersection of intelligent systems and creative design — building AI models that solve real problems and crafting interfaces people love.</p>
          <p>From training deep learning models that help the visually impaired navigate the world, to designing and shipping production websites for real clients — I believe the best AI product is both technically powerful and beautifully usable.</p>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>GitHub Profile ↗</a>
        </div>
      </div>
    </section>
  );
}
