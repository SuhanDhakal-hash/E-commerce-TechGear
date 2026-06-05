import "./Login.css";
import {useNavigate} from "react-router-dom";
import React, { useState } from "react";
function Login() {
  const [role, setRole] = useState("");
  const navigate=useNavigate();
 const handleLogin = (e) => {
e.preventDefault();
console.log("login clicked");
    if(role=="admin")
    {
      navigate("/admin");
    }
    else {
      navigate("/AdminDashboard")
    }
    };
  return (
    <div className="login-container">
      

      <div className="login-box">
<h1>Welcome Back</h1>
<p>Login to your TECHGEAR account</p>

        <input type="email" placeholder="Email" />

        <input type="password" placeholder="Password" />
<select value={role} onChange={(e)=>setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <label>
          <input type="checkbox" />
          Remember me
        </label>
        

        <button onClick={handleLogin}>Login</button>

      </div>

    </div>
  );
} 

export default Login;