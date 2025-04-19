import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "MCP",
  });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/auth/register", user);
      navigate("/login");
    } catch (err) {
      alert("Registration failed!");
    }
  };

  return (
    <div className="mcp-register-container">
      <div className="mcp-register-card">
        <h1>📝 Data Admin Signup</h1>
        <p className="subtext">
        Create your account to manage creative assets, track campaign performance, and analyze ad metrics
        </p>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="👤 Full Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="📧 Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="🔑 Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
          <button className="button" type="submit">Register ➜</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
