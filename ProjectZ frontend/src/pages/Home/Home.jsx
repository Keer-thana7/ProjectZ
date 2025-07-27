import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to Project Z</h1>
        <p className="hero-subtitle">
          Revolutionizing fashion discovery with the power of AI.
        </p>
        <a href="/upload" className="hero-cta">Try Now</a>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Project Z?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Upload & Detect</h3>
            <p>Simply upload an image and let our AI identify fashion items instantly.</p>
          </div>
          <div className="feature-card">
            <h3>Compare Prices</h3>
            <p>We fetch prices from top platforms like Amazon, Flipkart, and Myntra.</p>
          </div>
          <div className="feature-card">
            <h3>Find the Best Match</h3>
            <p>Choose the best deal and buy smart with confidence.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
