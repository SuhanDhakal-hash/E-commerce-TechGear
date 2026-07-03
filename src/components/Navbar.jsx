import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  // Check if user or admin is logged in
  const isUserLoggedIn = localStorage.getItem("user");
  const isAdminLoggedIn = localStorage.getItem("admin");

  const isLoggedIn = isUserLoggedIn || isAdminLoggedIn;

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
    localStorage.removeItem("role");

    alert("Logged out successfully!");

    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <h2>TECHGEAR.ACC</h2>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/services">Services</Link>
        </li>

        <li>
          <Link to="/features">Features</Link>
        </li>
      </ul>

      {/* Right Side Buttons */}
      <div className="navbar-buttons">
        <button className="cart-btn">
          <FaShoppingCart />
        </button>

        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="login-btn">
                Login
              </button>
            </Link>

            <Link to="/register">
              <button className="register-btn">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;