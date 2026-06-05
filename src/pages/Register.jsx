import React from "react";
import "./Register.css";
import Navbar from "../components/Navbar";

function Register() {
  return(
    
    <div className="register-container">
      
      <div className="register-box">
<h1 className="logo">TECHGEAR.ACC</h1>        
<h2>Create Your Account</h2>

        <form>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email/Username" required />
          <input type="text" placeholder="Address" required />
          <input type="city" placeholder="City" required />
          <input type="text" placeholder="Gender" required />
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