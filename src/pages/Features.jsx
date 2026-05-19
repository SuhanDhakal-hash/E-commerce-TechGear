import "./Features.css";

function Features() {
  const features = [
    {
      title: "Fast Performance",
      description: "Optimized system for smooth and fast browsing experience.",
      icon: "⚡",
    },
    {
      title: "Secure Login",
      description: "Safe and protected user authentication system.",
      icon: "🔐",
    },
    {
      title: "Easy Navigation",
      description: "Simple and user-friendly interface for all users.",
      icon: "🧭",
    },
    {
      title: "High Quality Products",
      description: "Only genuine computer accessories and parts.",
      icon: "💎",
    },
    {
      title: "24/7 Support",
      description: "Always available customer support system.",
      icon: "📞",
    },
    {
      title: "Responsive Design",
      description: "Works perfectly on mobile, tablet, and desktop.",
      icon: "📱",
    },
  ];

  return (
    <div className="features-page">

      {/* HEADER */}
      <div className="features-hero">
        <h1>Our Features</h1>
        <p>We provide modern and powerful features for the best experience.</p>
      </div>

      {/* FEATURES LIST */}
      <div className="features-container">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Features;