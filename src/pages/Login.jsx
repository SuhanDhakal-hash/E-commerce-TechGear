import "./Login.css";

function Login() {
  return (
    <div className="login-container">

      <div className="login-box">

        <h1>Welcome Back to TECHGEAR ACC.</h1>

        <input type="email" placeholder="Email" />

        <input type="password" placeholder="Password" />

        <button>Login</button>

      </div>

    </div>
  );
}

export default Login;