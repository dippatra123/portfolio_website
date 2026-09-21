import React, { useState } from "react";
import "./project.css";
import resume from "../assets/resume.pdf";
const Projects = () => {
  const [aiOpen, setAiOpen] = useState(false);
  return (
    <section className="projects-page">
      <div className="container">
        {/* Page Header */}
        <div className="projects-header">
          <p className="projects-subtitle">MY WORK</p>
          <h1>Projects</h1>
          <p className="projects-intro">
            Some of the real-world applications I have worked on as a Full Stack
            Developer.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {/* ================= PROJECT 1 ================= */}
          <div className="project-card">
            <div className="project-top">
              <span className="project-number">01</span>

              <div className="project-icon">
                <i className="bi bi-lightning-charge-fill"></i>
              </div>
            </div>

            <h2>Electrical Power Consumption Dashboard</h2>

            <p>
              A web-based dashboard for monitoring and analyzing electrical
              power consumption. The system provides data visualization,
              statistics, and consumption trends to help users understand power
              usage.
            </p>

            <div className="project-features">
              <span>Power Monitoring</span>
              <span>Data Visualization</span>
              <span>Charts</span>
              <span>Consumption Analysis</span>
            </div>

            <div className="project-tech">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>Bootstrap</span>
              <span>MySQL</span>
              <span>Express.js</span>
              <span>Node.js</span>
              <span>REST API</span>
            </div>

            <div className="project-buttons">
              <a href="#" className="project-btn">
                <i className="bi bi-eye"></i>
                View Project
              </a>

              <a
                href="https://github.com/dippatra123/powerConsumtionDashboard"
                className="project-btn outline"
              >
                <i className="devicon-github-original"></i>
                GitHub
              </a>
            </div>
          </div>

          {/* ================= PROJECT 2 ================= */}
          <div className="project-card">
            <div className="project-top">
              <span className="project-number">02</span>

              <div className="project-icon">
                <i className="bi bi-filetype-json"></i>
              </div>
            </div>

            <h2>AI-Powered Photo to JSON Data Converter</h2>

            <p>
              An AI-powered application that extracts structured information
              from uploaded images and converts it into JSON data. It also
              supports manual stock entry, stock reconciliation, and Excel
              report generation.
            </p>

            <div className="project-features">
              <span>AI Data Extraction</span>
              <span>Image Upload</span>
              <span>JSON Conversion</span>
              <span>Stock Entry</span>
              <span>Reconciliation</span>
              <span>Excel Report</span>
            </div>

            <div className="project-tech">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MySQL</span>
              <span>AI</span>
            </div>

            <div className="project-buttons">
              <a href="#" className="project-btn">
                <i className="bi bi-eye"></i>
                View Project
              </a>

              <a href="#" className="project-btn outline">
                <i className="devicon-github-original"></i>
                GitHub
              </a>
            </div>
          </div>

          {/* ================= PROJECT 3 ================= */}
          <div className="project-card">
            <div className="project-top">
              <span className="project-number">03</span>

              <div className="project-icon">
                <i className="bi bi-qr-code"></i>
              </div>
            </div>

            <h2>QR-Based Production Time Tracking System</h2>

            <p>
              A production tracking system that uses QR codes to record
              production activities and track the time spent on different
              processes. The system helps monitor production progress and
              generate useful reports.
            </p>

            <div className="project-features">
              <span>QR Code Scanning</span>
              <span>Production Tracking</span>
              <span>Time Tracking</span>
              <span>Process Monitoring</span>
              <span>Reports</span>
            </div>

            <div className="project-tech">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MySQL</span>
              <span>REST API</span>
            </div>

            <div className="project-buttons">
              <a href="#" className="project-btn">
                <i className="bi bi-eye"></i>
                View Project
              </a>

              <a
                href="https://github.com/dippatra123/cpil_hotpress_qrcode_project"
                className="project-btn outline"
              >
                <i className="devicon-github-original"></i>
                GitHub
              </a>
            </div>
          </div>

          {/* ================= EXPERIENCE ================= */}
          <div className="experience-card">
            <div className="experience-top">
              <div>
                <p className="experience-subtitle">MY EXPERIENCE</p>

                <h2>
                  <i className="bi bi-briefcase-fill"></i>
                  Professional Experience
                </h2>
              </div>

              <a
                href={resume}
                download="Debasis_Patra_Resume.pdf"
                className="resume-download-btn"
              >
                <i className="bi bi-download"></i>
                Download Resume
              </a>
            </div>

            <div className="experience-content">
              <h3>Full Stack Developer</h3>

              <h4>Century Plyboard India Limited</h4>

              <span className="experience-date">13/06/2024 – Present</span>

              <p>
                Developing and maintaining full-stack web applications that
                support internal business operations, data management,
                reporting, and workflow automation. Working across frontend,
                backend, databases, authentication, and AI-powered features.
              </p>

              <ul>
                <li>
                  Developed responsive and user-friendly web applications using
                  <strong>
                    {" "}
                    React.js, JavaScript, Bootstrap, and Tailwind CSS
                  </strong>
                  .
                </li>

                <li>
                  Designed and implemented <strong>RESTful APIs</strong> using
                  <strong> Node.js and Express.js</strong> for business
                  applications.
                </li>

                <li>
                  Integrated and managed application data using
                  <strong> MySQL</strong>, including database queries and data
                  processing.
                </li>

                <li>
                  Implemented secure authentication and session management using
                  <strong> JWT, cookies, and sessions</strong>.
                </li>

                <li>
                  Developed{" "}
                  <strong>
                    AI-powered data extraction and JSON conversion
                  </strong>{" "}
                  functionality to automate data-processing workflows.
                </li>

                <li>
                  Built features for{" "}
                  <strong>
                    stock management, inventory reconciliation, and business
                    data tracking
                  </strong>
                  .
                </li>

                <li>
                  Developed{" "}
                  <strong>Excel-based report generation and data export</strong>{" "}
                  functionality for operational reporting.
                </li>

                <li>
                  Collaborated with business teams to understand requirements
                  and convert them into practical software solutions.
                </li>
              </ul>
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
    </section>
  );
};

export default Projects;
