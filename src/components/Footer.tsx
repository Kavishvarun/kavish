import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="nav-logo">Kavish.</Link>
          <p className="footer-desc">Building intelligent, user-centric web applications and AI solutions for the future.</p>
        </div>
        <div className="footer-links-group">
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/education">Education</Link></li>
              <li><Link to="/internship">Internship &amp; Training</Link></li>
              <li><Link to="/achievements">Achievements</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Designed &amp; built with ❤️ by <strong>Kavish Varun</strong> &copy; {new Date().getFullYear()}</p>
        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">IN</a>
          <a href="mailto:contact@example.com" aria-label="Email">EM</a>
        </div>
      </div>
    </footer>
  );
}
