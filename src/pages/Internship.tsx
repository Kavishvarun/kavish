import profileImage from '../assets/images/WD_1.jpg';
import profileImage2 from '../assets/images/What_is_IoT.jpg';
import ScrollReveal from '../components/ScrollReveal';
export default function Internship() {
  const educationData = [
    {
      institution: 'CODEBIND TECHNOLOGIES PVT LTD',
      COURSE: 'WEB DESIGN and DEVELOPMENT',
      status: 'Completed',
      duration: '2 Months',
      image: profileImage,
    },
    {
      institution: 'EMIGLITZ TECHNOLOGIES PVT LTD',
      COURSE: 'IOT(INTERNET OF THINGS',
      status: 'Completed',
      duration: '2 Months',
      image: profileImage2,
    },
    {
      institution: 'BLEND VIDYA EDTECH PRIVATE LIMITED',
      COURSE: 'IOT(INTERNET OF THINGS & TEAM MANAGEMENT ',
      status: 'Completed',
      duration: '3 Months',
      image: profileImage2,
    },
  ];

  return (
    <section id="Internship & Training">
      <h2 className="section-title">Internship & Training</h2>
      <p className="section-desc">KEEP UPGRADING AND UPDATING MY SELF BY TRAINING THESE TECHNOLOGIES .</p>

      <div className="education-grid">
        {educationData.map((edu, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="education-card">
              <div className="education-image-wrapper">
                <img
                  src={edu.image}
                  alt={edu.institution}
                  className="education-image"
                />
              </div>
              <div className="education-content">
                <div className="eyebrow">{edu.institution}</div>
                <h3 className="section-title">{edu.COURSE}</h3>
                <p style={{ color: 'var(--muted)', fontWeight: '600' }}>{edu.status}</p>
                <p style={{ color: 'var(--muted)', marginTop: 'auto', paddingTop: '1rem' }}>{edu.duration}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}


