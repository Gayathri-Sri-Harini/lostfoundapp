import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h2>About Lost & Found</h2>
      <p>
        Welcome to <strong>Lose & Found</strong> — your trusted place to report or
        search for missing items within your community or college.
      </p>
      <p>
        Whether it’s a phone, wallet, ID card, or keys, this platform connects
        people who have <em>lost</em> something with those who have <em>found</em> it.
      </p>

      <div className="about-features">
        <div className="feature-card">
          <h3>🔍 Easy Search</h3>
          <p>Filter items by category, location, or date.</p>
        </div>
        <div className="feature-card">
          <h3>📝 Quick Posts</h3>
          <p>Post lost or found items in seconds.</p>
        </div>
        <div className="feature-card">
          <h3>🔒 Secure Access</h3>
          <p>Only logged-in users can post or contact item owners.</p>
        </div>
      </div>

      <p className="about-footer">
        Made with ❤️ by <strong>Harini</strong> — helping people one item at a time.
      </p>
    </div>
  );
}

export default About;
