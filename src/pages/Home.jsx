import "../App.css";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Vortex RGB Keyboard",
    desc: "Hot-swappable switches with customizable lighting.",
    price: "NRS 4000",
    img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
  },
  {
    name: "Precision Pro Mouse",
    desc: "25k DPI sensor with ergonomic thumb rest.",
    price: "NRS 6000",
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
  },
  {
    name: "Hyper-Link USB-C Hub",
    desc: "7-in-1 connectivity with 100W Power Delivery.",
    price: "NRS 4000",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
  },
  {
    name: "Studio-Grade Headset",
    desc: "Spatial audio with noise-canceling mic.",
    price: "NRS 5000",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
];

function Home() {
  return (
    <div className="app">

      
      <nav className="navbar">

        <div className="logo">TG TECHGEAR ACC.</div>

        <input
          type="text"
          placeholder="Search accessories..."
          className="search"
        />

        <ul className="nav-links">
          <Link to="/products"><li>Products</li></Link>

          <Link to="/services"><li>Services</li></Link>

          <Link to="/features"><li>Features</li></Link>
        </ul>

        <Link to="/register">
          <button className="register-btn">Register</button>
        </Link>

        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>

      </nav>

      
      <section className="hero">

        <div className="hero-left">
          <img
            src="https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=1000"
            alt="keyboard"
          />
        </div>

        <div className="hero-right">

          <h1>Level Up Your Setup.</h1>

          <p>
            Premium mechanical keyboards, precision mice,
            and high-speed hubs designed for pros.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Shop New Arrivals
            </button>

            <button className="secondary-btn">
              View Deals
            </button>

          </div>

        </div>

      </section>

   

      
      <section className="products-section">

        <h2>Featured Products</h2>

        <div className="products-grid">

          {products.map((item, index) => (
            <div className="product-card" key={index}>

              <img src={item.img} alt={item.name} />

              <h3>{item.name}</h3>

              <p>{item.desc}</p>

              <span>{item.price}</span>

            </div>
          ))}

        </div>

      </section>

  
      <section className="features-section">

        <h2>Services & Features</h2>

        <div className="features-grid">

          <div className="feature-card">
            <h3>⚡ Fast Shipping</h3>
            <p>Orders processed within 24 hours globally.</p>
          </div>

          <div className="feature-card">
            <h3>🛠 Pro Installation</h3>
            <p>Remote setup assistance for all complex peripherals.</p>
          </div>

          <div className="feature-card">
            <h3>🛡 2-Year Warranty</h3>
            <p>Extended protection on all electronic components.</p>
          </div>

          <div className="feature-card">
            <h3>💬 24/7 Tech Support</h3>
            <p>Live chat with hardware experts anytime.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;