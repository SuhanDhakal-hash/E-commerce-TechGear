import "./Login.css";
import Navbar from "../Component/Navbar";

function Login() {
  return (
    <div className="login-container">
      <Navbar />

      <div className="login-box">

        <h1>Welcome Back to TECHGEAR ACC.</h1>

        <input type="email" placeholder="Email" />

        <input type="password" placeholder="Password" />

        <label>
          <input type="checkbox" />
          Remember me
        </label>
        

        <button>Login</button>

      </div>

    </div>
  );
}

export default Login;