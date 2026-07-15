export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact <span className="contact-title-grad">Me</span></h2>
      <p className="section-desc">Have questions? I'd love to hear from you. Get in touch with me today!</p>

      <div className="contact-grid">
        {/* About Me Details replacing the map */}
        <div className="contact-card">
          <h3>About Me</h3>

          <div className="contact-item">
            <div className="contact-icon">👤</div>
            <div className="contact-info">
              <h4>Name</h4>
              <p>Kavish Varun</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-info">
              <h4>Address</h4>
              <p>2/190, Sethupathi College opposite, Achunthanvayal, Ramanathapuram - 623502</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📅</div>
            <div className="contact-info">
              <h4>DOB</h4>
              <p> 15 /10/2003</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">🎓</div>
            <div className="contact-info">
              <h4>Education</h4>
              <p>B.Tech, Artificial Intelligence and Data Science </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">🎓</div>
            <div className="contact-info">
              <h4>College</h4>
              <p>Dhanalakshmi Srinivasan college of Engineering </p>
            </div>
          </div>
        </div>

        {/* Contact Links */}
        <div className="contact-card">
          <h3>Get In Touch</h3>

          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div className="contact-info">
              <h4>Phone</h4>
              <p>+91 96269 56200</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">💬</div>
            <div className="contact-info">
              <h4>WhatsApp</h4>
              <a href="https://wa.me/9626956200" target="_blank" rel="noreferrer">+91 96269 56200</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div className="contact-info">
              <h4>Email</h4>
              <a href="mailto:kavishkavish227@gmail.com">kavishkavish227@gmail.com</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" /></div>
            <div className="contact-info">
              <h4>Linkedin</h4>
              <a href="https://www.linkedin.com/in/kavish-varun-006174228/">KAVISH VARUN</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📷</div>
            <div className="contact-info">
              <h4>Instagram</h4>
              <a href="https://www.instagram.com/kavish_varun/?hl=en" target="_blank" rel="noopener noreferrer">kavish_varun</a>
            </div>
          </div>
        </div>

        {/* Enquiry Form */}
        {/* <div className="contact-card">
          <h3>Send Your Enquiry</h3>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Phone Number (Optional)" />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="btn-submit">Submit Enquiry</button>
          </form>
        </div> */}
      </div>
    </section>
  );
}
