import React, { useState } from "react";
import "./contactme.css";

const Contactme = () => {
  // ================= FORM STATE =================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // ================= HANDLE SUBMIT =================
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    alert("Message submitted successfully!");

    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact">
      {/* ================= CONTACT HEADING ================= */}

      <div className="container">
        <div className="contact-heading">
          <span>CONTACT ME</span>

          <h1>
            Let's <strong>Work Together</strong>
          </h1>

          <p>
            Have a project in mind, a job opportunity, or just want to say
            hello? Feel free to get in touch with me.
          </p>
        </div>
      </div>

      {/* ================= CONTACT CARDS ================= */}

      <div className="container">
        <div className="row contact-cards">
          {/* ================= EMAIL ================= */}

          <div className="col-lg-3 col-md-6 col-12">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="bi bi-envelope-fill"></i>
              </div>

              <div>
                <h4>Email</h4>

                <a href="mailto:patradip6@gmail.com">patradip6@gmail.com</a>
              </div>
            </div>
          </div>

          {/* ================= PHONE ================= */}

          <div className="col-lg-3 col-md-6 col-12">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="bi bi-telephone-fill"></i>
              </div>

              <div>
                <h4>Phone</h4>

                <a href="tel:+919874140224">+91 9874140224</a>
              </div>
            </div>
          </div>

          {/* ================= LOCATION ================= */}

          <div className="col-lg-3 col-md-6 col-12">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </div>

              <div>
                <h4>Location</h4>

                <p>West Bengal, India</p>
              </div>
            </div>
          </div>

          {/* ================= WEBSITE ================= */}

          <div className="col-lg-3 col-md-6 col-12">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="bi bi-globe2"></i>
              </div>

              <div>
                <h4>Website</h4>

                <a
                  href="https://portfoliowebsite-seven-liard.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  My Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAP + FORM ================= */}

      <div className="container">
        <div className="row contact-main">
          {/* ================= GOOGLE MAP ================= */}

          <div className="col-lg-6 col-md-12 col-12">
            <div className="contact-map-wrapper">
              <div className="section-title">
                <h4>
                  Find Me <strong>Here</strong>
                </h4>
              </div>

              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps?q=Kolkata,West+Bengal,India&output=embed"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                  }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Debasis Patra Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}

          <div className="col-lg-6 col-md-12 col-12">
            <div className="contact-form-wrapper">
              <div className="section-title">
                <h4>
                  Send Me a <strong>Message</strong>
                </h4>
              </div>

              <form onSubmit={handleSubmit}>
                {/* ================= NAME ================= */}

                <div className="form-group">
                  <label htmlFor="name">Your Name</label>

                  <div className="input-wrapper">
                    <i className="bi bi-person"></i>

                    <input
                      id="name"
                      className="form-control"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>
                </div>

                {/* ================= EMAIL ================= */}

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>

                  <div className="input-wrapper">
                    <i className="bi bi-envelope"></i>

                    <input
                      id="email"
                      className="form-control"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                </div>

                {/* ================= PHONE ================= */}

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>

                  <div className="input-wrapper">
                    <i className="bi bi-telephone"></i>

                    <input
                      id="phone"
                      className="form-control"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Your Phone Number"
                      required
                    />
                  </div>
                </div>

                {/* ================= SUBJECT ================= */}

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>

                  <div className="input-wrapper">
                    <i className="bi bi-chat-left-text"></i>

                    <input
                      id="subject"
                      className="form-control"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter Subject"
                      required
                    />
                  </div>
                </div>

                {/* ================= MESSAGE ================= */}

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>

                  <div className="input-wrapper textarea-wrapper">
                    <i className="bi bi-pencil-square"></i>

                    <textarea
                      id="message"
                      className="form-control"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter Your Message"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                </div>

              
                <button type="submit" className="contact-send-btn">
                  <span>Send Message</span>

                  <i className="bi bi-send-fill"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactme;
