import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

    
      <div className="navbar-logo">
        <h2>TECHGEAR</h2>
      </div>

      
      

      
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

      
      <div className="navbar-buttons">

        <button className="cart-btn">
          <FaShoppingCart />
        </button>

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

      </div>

    </nav>
  );
}

export default Navbar;