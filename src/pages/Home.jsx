import React, { useState } from "react";

import "./home.css";

import profileImage from "../assets/profile.png";

const Home = () => {
  const [aiOpen, setAiOpen] = useState(false);

  return (
    <section className="home">
      <div className="container">
        <div className="row align-items-center">
          {/* Left */}
          <div className="col-lg-6">
            <p>Hello, I'm</p>

            <h1>Debasis Patra</h1>

            <h2>Full Stack Developer</h2>

            <p>
              I build modern web applications using React, Node.js and modern
              web technologies.
            </p>

            <button>Hire Me</button>

            <button className="outline-btn">Let's Talk</button>

            <div className="social-icons mt-5">
              <a
                href="https://www.linkedin.com/in/debasis-patra-219a3b272"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="https://github.com/dippatra123"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>

              <a href="mailto:patradip6@gmail.com">
                <i className="bi bi-envelope-fill"></i>
              </a>

              <a
                href="https://www.facebook.com/dip.patra.56"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="https://www.instagram.com/patra.dip/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="col-lg-6 text-center d-flex justify-content-center align-items-center">
            <img
              src={profileImage}
              alt="Debasis Patra"
              className="profile-image"
            />
          </div>
        </div>
      </div>

      {/* ================= AI FLOATING BUTTON ================= */}

      <button
        className={`ai-floating-btn ${aiOpen ? "ai-open" : ""}`}
        onClick={() => setAiOpen(!aiOpen)}
        aria-label="Open AI Portfolio Assistant"
      >
        {aiOpen ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-robot"></i>
        )}
      </button>

      {/* ================= AI CHAT ================= */}

      {aiOpen && (
        <div className="ai-chat-box">
          <div className="ai-chat-header">
            <div>
              <h5>
                <i className="bi bi-robot"></i> Debasis AI
              </h5>

              <span>Portfolio Assistant</span>
            </div>
            <div className="chat-close-btn-header">
              <button onClick={() => setAiOpen(false)}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
          </div>

          <div className="ai-chat-body">
            <div className="ai-message">
              Hi! 👋
              <br />
              I'm Debasis's AI Portfolio Assistant.
              <br />
              Ask me about my skills, projects, experience or services.
            </div>

            <div className="ai-suggestions">
              <button>My Skills</button>

              <button>My Projects</button>

              <button>Experience</button>

              <button>Why Hire Me?</button>
            </div>
          </div>

          <div className="ai-chat-input">
            <input type="text" placeholder="Ask something..." />

            <button>
              <i className="bi bi-send-fill"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
