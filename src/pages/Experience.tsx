import profileImage from '../assets/images/Rajakala.png';
import profileImage2 from '../assets/images/Prathitha.png';
import ScrollReveal from '../components/ScrollReveal';
export default function Experience() {
  const educationData = [
    {
      Company_name: 'Rajakala Printers',
      Role: 'Administrative Cordinator Managing Team',
      Duration: '2025 - present',
      Image: profileImage,
    },
    {
      Company_name: 'Prathitha Digital Printers',
      Role: 'Graphic Designer',
      Duration: '2026 - present',
      Image: profileImage2,
    },
  ];

  return (
    <section id="Experience">
      <h2 className="section-title">Experience</h2>
      <p className="section-desc">These are the Places. Where i learn Gain Experience About Real World.</p>

      <div className="education-grid">
        {educationData.map((edu, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="education-card">
              <div className="education-image-wrapper" style={{ height: 'auto', background: 'var(--off)', padding: '1rem' }}>
                <img
                  src={edu.Image}
                  alt={edu.Company_name}
                  className="education-image"
                  style={{ objectFit: 'contain', height: 'auto', maxHeight: '250px' }}
                />
              </div>
              <div className="education-content">
                <div className="eyebrow">{edu.Company_name}</div>
                <h3 className="section-title">{edu.Role}</h3>
                <p style={{ color: 'var(--muted)', fontWeight: '600' }}>{edu.Duration}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}


