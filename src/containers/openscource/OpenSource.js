// OpenSource.js

import React from "react";
import "./OpenSource.scss";

const OpenSource = () => {
  return (
    <div className="open-source-section">
      <h1 className="project-title">
        Open Source Projects{" "}
        <a href="https://www.linkedin.com/in/dodiya-sahdev/" target="_blank">
          Visit my LinkedIn profile
        </a>
      </h1>

      <p className="project-description">
        Please visit my LinkedIn for my amazing and creative projects:
        <a href="https://www.linkedin.com/in/dodiya-sahdev/" target="_blank">
          Visit my LinkedIn profile
        </a>
      </p>

      {/* Frontend Projects */}
      <div className="frontend-section">
        <h2>Front-end Projects:</h2>
        <div className="repo-cards-div-main">
          <div className="project-card">
            <h3>Crypto-App-React</h3>
            <p>
              Real-time cryptocurrency tracker built with React.
              Fetches data from 100+ coins with API.
              Graphs for dynamic visualizations.
              Includes a section for live prices.
            </p>
            <a href="https://cryptoexchangebydodiyasahdev.netlify.app/" target="_blank">Live Demo</a>
          </div>

          <div className="project-card">
            <h3>E-Commerce (small scale)</h3>
            <p>
              Sleek and effective small-scale e-commerce app.
              User-friendly interface for a seamless shopping experience.
              Simple and elegant design.
            </p>
            <a href="https://ecommercesitebysahdevdodiya.netlify.app/" target="_blank">Live Demo</a>
          </div>

          <div className="project-card">
            <h3>React App with Chakra UI</h3>
            <p>
              Basic idea similar to YouTube app with React and Chakra UI.
              View and upload videos locally; backend support to be added later.
            </p>
            <a href="https://miniyoutubebysahdev.netlify.app/" target="_blank">Live Demo</a>
          </div>
        </div>
      </div>

      {/* Backend Projects */}
      <div className="backend-section">
        <h2>Backend Projects:</h2>
        <div className="repo-cards-div-main">
          <div className="project-card">
            <h3>Authorization & Authentication Web Dev</h3>
            <p>
              Pure Backend project implementing JWT token and cookies.
              Sign-in and login functionality for three roles: admin, student, viewer.
              Robust authentication and authorization using AuthN and AuthZ.
            </p>
            <a href="https://authorization-authentication-webdev.netlify.app/" target="_blank">Live Demo</a>
          </div>

          <div className="project-card">
            <h3>File Uploader</h3>
            <p>
              File uploader project utilizing Cloudinary for storage.
              Uploads from local to server, then server to Cloudinary.
              Sends email notifications after each upload.
            </p>
            <a href="https://fileuploaderbysahdev.netlify.app/" target="_blank">Live Demo</a>
          </div>

          {/* Add more backend projects here */}
        </div>
        <p className="additional-note">
          Check out more backend projects on my GitHub page:
          <a href="https://github.com/YourGitHubUsername" target="_blank">
            GitHub Page
          </a>
        </p>
      </div>

      {/* Machine Learning Projects */}
      <div className="ml-section">
        <h2>Machine Learning Projects:</h2>
        <div className="repo-cards-div-main">
          <div className="project-card">
            <h3>Self-Driving Car Theory & Model</h3>
            <p>
              Dive into the world of self-driving cars with a theoretical overview.
              Includes a model trained on 50k+ photos.
            </p>
            <a href="LINK" target="_blank">Live Demo</a>
          </div>

          <div className="project-card">
            <h3>Casino Dice Slot Machine</h3>
            <p>
              Simple yet thrilling gambling app.
              Experience the excitement of a casino dice slot machine.
            </p>
            <a href="LINK" target="_blank">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
