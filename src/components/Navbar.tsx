import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav>
      {/* Mobile Menu Toggle Button */}
      <div
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
        <li><Link to="/skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</Link></li>
        <li><Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link></li>
        <li><Link to="/education" onClick={() => setIsMobileMenuOpen(false)}>Education</Link></li>
        <li><Link to="/internship" onClick={() => setIsMobileMenuOpen(false)}>Internship & Training</Link> </li>
        <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>

      </ul>
      <Link to="/contact" className="nav-cta">Hire Me ✦</Link>
    </nav>
  );
}
