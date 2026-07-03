import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Login clicked");

    if (role === "admin") {
      
      localStorage.setItem("admin", "true");
      localStorage.setItem("role", "admin");

      alert("Admin Login Successful!");

      navigate("/AdminDashboard");
    } 
    else if (role === "user") {
      
      localStorage.setItem("user", "true");
      localStorage.setItem("role", "user");

      alert("Customer Login Successful!");

      navigate("/CustomerDashboard");
    } 
    else {
      alert("Please select a role.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome Back</h1>
        <p>Login to your TECHGEAR account</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">Customer</option>
          </select>

          <label>
            <input type="checkbox" />
            Remember me
          </label>

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;