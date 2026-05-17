import "./Services.css";

function Services() {
  const services = [
    {
      title: "Computer Repair",
      description:
        "Complete repair service for laptops, desktops, and gaming PCs.",
      icon: "🖥️",
    },
    {
      title: "Custom Gaming PC Build",
      description:
        "Build high-performance gaming PCs with latest hardware.",
      icon: "🎮",
    },
    {
      title: "Accessories Installation",
      description:
        "SSD, RAM, GPU, cooling system, keyboard, and mouse installation.",
      icon: "⚙️",
    },
    {
      title: "Virus Removal",
      description:
        "Remove malware, viruses, and improve system performance.",
      icon: "🛡️",
    },
    {
      title: "Technical Support",
      description:
        "24/7 online and offline customer technical support.",
      icon: "📞",
    },
    {
      title: "Networking Setup",
      description:
        "Office and home WiFi, router, and LAN setup services.",
      icon: "🌐",
    },
  ];

  return (
    <div className="services-page">

      {/* HERO SECTION */}
      <div className="services-hero">
        <h1>Our  Services</h1>

        <p>
          We provide complete computer solutions for gaming,
          office, and personal use.
        </p>
      </div>

      {/* SERVICES CARDS */}
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>

            <h2>{service.title}</h2>

            <p>{service.description}</p>

            <button>Learn More</button>
          </div>
        ))}
      </div>

      {/* WHY CHOOSE US */}
      <div className="why-us">
        <h1>Why Choose Us?</h1>

        <div className="why-container">
          <div className="why-box">
            <h2>✔ Expert Technicians</h2>
            <p>Experienced computer hardware specialists.</p>
          </div>

          <div className="why-box">
            <h2>✔ Affordable Pricing</h2>
            <p>Best service at reasonable prices.</p>
          </div>

          <div className="why-box">
            <h2>✔ Fast Service</h2>
            <p>Quick repair and installation support.</p>
          </div>

          <div className="why-box">
            <h2>✔ Trusted Quality</h2>
            <p>Thousands of satisfied customers.</p>
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="support-section">
        <h1>Need Help?</h1>

        <p>Contact our support team anytime.</p>

        <button>Contact Support</button>
      </div>

    </div>
  );
}

export default Services;