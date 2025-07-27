import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About <span>Project Z</span></h1>
        <p>
          Project Z is an AI-powered fashion price comparison tool. Upload a photo, and our AI finds similar items across top platforms — Amazon, Flipkart, AJIO, and Myntra — showing you the best prices instantly.
        </p>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <h3>Keerthana</h3>
            <p>Frontend Lead</p>
          </div>
          <div className="team-card">
            <h3>Shipani</h3>
            <p>Backend Developer</p>
          </div>
          <div className="team-card">
            <h3>Sundari</h3>
            <p>AI/ML Engineer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;