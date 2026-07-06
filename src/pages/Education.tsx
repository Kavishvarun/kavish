import profileImage from '../assets/images/SAMS.png';
import profileImage2 from '../assets/images/dsce_1.jpg';
import ScrollReveal from '../components/ScrollReveal';
export default function Education() {
    const educationData = [
        {
            institution: 'Syed Ammal Matriculation Boys and Girls Higher Secondary school',
            degree: 'SSLC',
            score: '403/500 (80.6%)',
            year: '2019-2020',
            image: profileImage,
        },
        {
            institution: 'Syed Ammal Matriculation Boys and Girls Higher Secondary school',
            degree: 'HSE',
            score: '500.83/600 (83.47%)',
            year: '2020-2021',
            image: profileImage,
        },
        {
            institution: 'Dhanalakshmi Srinivasan College of Engineering',
            degree: 'B.TECH ARTIFICIAL INTELLIGENCE AND DATA SCIENCE',
            score: 'CGPA: 7.0143/10',
            year: '2021-2025',
            image: profileImage2,
        },
    ];

    return (
        <section id="Education">
            <h2 className="section-title">Education</h2>
            <p className="section-desc">These are the Places. Where i build my career brick by brick, and Shape my future .</p>

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
                                <h3 className="section-title">{edu.degree}</h3>
                                <p style={{ color: 'var(--muted)', fontWeight: '600' }}>{edu.score}</p>
                                <p style={{ color: 'var(--muted)', marginTop: 'auto', paddingTop: '1rem' }}>{edu.year}</p>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}


