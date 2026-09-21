import React, { useState } from "react";

import "./about.css";

const About = () => {
  const [aiOpen, setAiOpen] = useState(false);

  return (
    <section className="about-page mt-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-12 col-lg-6 col-md-6">
            <div className="about-header">
              <p className="about-subtitle">GET TO KNOW ME</p>

              <h1>About Me</h1>

              <p className="about-intro">
                I'm a Full Stack Developer who enjoys building modern,
                responsive, and reliable web applications from frontend to
                backend.
              </p>
            </div>

            <div className="about-content">
              <p className="text-light">
                Hi, I'm <strong className="text-primary">Debasis Patra</strong>.
                I enjoy turning ideas into practical web applications with clean
                interfaces and well-structured backend systems. I primarily work
                with React.js, JavaScript, HTML, CSS, Bootstrap, and Tailwind
                CSS to create responsive and user-friendly experiences.
              </p>

              <p className="text-light">
                On the backend, I work with Node.js and Express.js to build REST
                APIs, handle authentication, manage sessions and cookies, and
                connect applications with databases such as MySQL. I also have
                experience working with tools such as Git, GitHub and Postman.
              </p>

              <p className="text-light">
                I enjoy working on real-world projects where I can solve
                problems, improve application performance, and learn new
                technologies. My goal is to continuously improve as a developer
                while building applications that are useful, scalable, and easy
                to maintain.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-12 col-lg-6 col-md-6">
            <div className="skills-wrapper">
              {/* Frontend */}
              <div className="skill-card">
                <h3 className="display-flex align-items-center gap-2">
                  <i className="devicon-react-original"></i>
                  Frontend
                </h3>

                <div className="skill-list">
                  <span>
                    <i className="devicon-react-original"></i>
                    React.js
                  </span>

                  <span>
                    <i className="devicon-javascript-plain"></i>
                    JavaScript
                  </span>

                  <span>
                    <i className="devicon-html5-plain"></i>
                    HTML5
                  </span>

                  <span>
                    <i className="devicon-css3-plain"></i>
                    CSS3
                  </span>

                  <span>
                    <i className="devicon-bootstrap-plain"></i>
                    Bootstrap
                  </span>

                  <span>
                    <i className="devicon-tailwindcss-original"></i>
                    Tailwind CSS
                  </span>
                </div>
              </div>

              {/* Backend */}
              <div className="skill-card">
                <h3>
                  <i className="bi bi-server"></i>
                  Backend
                </h3>

                <div className="skill-list">
                  <span>
                    <i className="devicon-nodejs-plain"></i>
                    Node.js
                  </span>

                  <span>
                    <i className="devicon-express-original"></i>
                    Express.js
                  </span>

                  <span>
                    <i className="devicon-mysql-plain"></i>
                    MySQL
                  </span>

                  <span>
                    <i className="bi bi-braces"></i>
                    REST API
                  </span>

                  <span>
                    <i className="bi bi-key-fill"></i>
                    JWT Authentication
                  </span>

                  <span>
                    <i className="bi bi-shield-lock-fill"></i>
                    Session & Cookie Authentication
                  </span>
                </div>
              </div>

              {/* Tools */}
              <div className="skill-card">
                <h3>
                  <i className="bi bi-tools"></i>
                  Tools
                </h3>

                <div className="skill-list">
                  <span>
                    <i className="devicon-git-plain"></i>
                    Git
                  </span>

                  <span>
                    <i className="devicon-github-original"></i>
                    GitHub
                  </span>

                  <span>
                    <i className="devicon-vscode-plain"></i>
                    VS Code
                  </span>

                  <span>
                    <i className="devicon-npm-original-wordmark"></i>
                    npm
                  </span>

                  <span>
                    <i className="devicon-postman-plain"></i>
                    Postman
                  </span>

                  <span>
                    <i className="bi bi-arrow-repeat"></i>
                    CI/CD
                  </span>
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
