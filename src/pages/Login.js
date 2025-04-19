import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://segwase.onrender.com/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/upload");
    } catch (err) {
      alert("Login failed! Please check your credentials.");
    }
  };

  return (
    <div className="mcp-login-container">
      <div className="mcp-login-card">
        <h1>🔐 Data Admin Login</h1>
        <p className="subtext">Access your Segwise Dashboard</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="📧 Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="🔑 Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login ➜</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
