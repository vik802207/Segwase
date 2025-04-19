import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="glass-card">
        <h1 className="home-title">📦 Segwise Tool</h1>
        <p className="home-subtitle">Real-Time CSV Data Search and Filtering Tool</p>

        <div className="role-section">
          <div className="role-card">
            <h2 className="role-heading">👨‍💻 Data Admin</h2>
            <div className="button-group">
              <button className="fancy-btn" onClick={() => navigate("/login")}>
                Login
              </button>
              <button className="fancy-btn" onClick={() => navigate("/register")}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
