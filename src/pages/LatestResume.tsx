import resumePdf from '../assets/images/resume .pdf';

export default function LatestResume() {
  return (
    <section id="latest-resume">
      <h2 className="section-title">Latest <span className="contact-title-grad">Resume</span></h2>
      <p className="section-desc">Here is my latest resume.</p>
      
      <div className="resume-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <div 
          style={{ width: '100%', maxWidth: '800px', height: '80vh', textAlign: 'center' }}
          onMouseEnter={() => window.dispatchEvent(new Event('hide-custom-cursor'))}
          onMouseLeave={() => window.dispatchEvent(new Event('show-custom-cursor'))}
        >
          <iframe 
            src={`${resumePdf}#toolbar=0&navpanes=0&scrollbar=0`}
            width="100%" 
            height="100%" 
            style={{ border: 'none', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            title="Resume"
          />
        </div>
      </div>
    </section>
  );
}
