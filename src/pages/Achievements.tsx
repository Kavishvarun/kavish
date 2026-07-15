import profileImage from '../assets/images/Course .jpeg';
import profileImage2 from '../assets/images/Aicra.jpeg';
import profileImage3 from '../assets/images/12.jpeg';
import profileImage4 from '../assets/images/cdb.jpeg';
import profileImage5 from '../assets/images/Cpt.jpeg';
import profileImage6 from '../assets/images/web.jpeg';
import ScrollReveal from '../components/ScrollReveal';
export default function Achievements() {
  const AchivementsData = [
    {
      institution: 'DHANALAKSHMI SRINIVASAN COLLEGE OF ENGINEERING',
      degree: 'B.TECH ARTIFICIAL INTELLIGENCE AND DATA SCIENCE',
      score: 'COURSE COMPLETION CERTIFICATE',
      year: '2021-2025',
      image: profileImage,
    },
    {
      institution: 'DHANALAKSHMI SRINIVASAN COLLEGE OF ENGINEERING',
      degree: 'ARTIFICIAL INTELLIGENCE WITH IOT',
      score: 'AICRA',
      year: '2025',
      image: profileImage2,
    },
    {
      institution: 'Syed Ammal Matriculation Higher Secondary School',
      degree: 'HSE',
      score: '12th Mark Sheet',
      year: '2020-2021',
      image: profileImage3,
    },
    {
      institution: 'CODEBIND TECHNOLOGIES',
      degree: 'ANDROID APP DEVELOPMENT',
      score: 'GOOD',
      year: '2022',
      image: profileImage4,
    },
    {
      institution: 'CODEBIND TECHNOLOGIES',
      degree: 'CORPORATE TRAINING TEST',
      score: 'GOOD',
      year: '2022',
      image: profileImage5,
    },
    {
      institution: 'CODEBIND TECHNOLOGIES',
      degree: 'WEB DEVELOPMENT',
      score: 'GOOD',
      year: '2022',
      image: profileImage6,
    },
  ];

  return (
    <section id="Achievements">
      <h2 className="section-title">ACHIEVEMENTS</h2>
      <p className="section-desc">These Are Mile stones were I Achieved In my life till now .</p>

      <div className="education-grid">
        {AchivementsData.map((Ach, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="education-card">
              <div className="education-image-wrapper">
                <img
                  src={Ach.image}
                  alt={Ach.institution}
                  className="education-image"
                />
              </div>
              <div className="education-content">
                <div className="eyebrow">{Ach.institution}</div>
                <h3 className="section-title">{Ach.degree}</h3>
                <p style={{ color: 'var(--muted)', fontWeight: '600' }}>{Ach.score}</p>
                <p style={{ color: 'var(--muted)', marginTop: 'auto', paddingTop: '1rem' }}>{Ach.year}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}


