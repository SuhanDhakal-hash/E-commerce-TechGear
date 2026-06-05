import{Link} from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div>
          <h3>TECHGEAR.ACC</h3>
          <p>Your trusted computer accessories store</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/features">Features</Link></li>
          </ul>
        </div>

        <div>
          
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 TECHGEAR.ACC. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;