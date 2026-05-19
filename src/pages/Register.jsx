import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="logo">TeachGear</h1>
        <h2>Create Your Account</h2>

        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <button type="submit">Register</button>
        </form>

        <p className="login-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;