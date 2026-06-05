import "./Product.css";
import Categories from "../components/Categories";

function Products() {
  const products = [
    {
      name: "Gaming Keyboard",
      price: "NRS 4000",
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    },
    {
      name: "Wireless Mouse",
      price: "NRS 6000",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    },
    {
      name: "RGB Headset",
      price: "NRS 5000",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      name: "USB-C Hub",
      price: "NRS 4000",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    },
    {
      name: "Gaming Monitor",
      price: "NRS 50000",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    },
    {
      name: "Mechanical Keyboard",
      price: "NRS 2000",
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500",
    },

    // 🔥 EXTRA PRODUCTS
    {
      name: "Gaming Mouse Pad",
      price: "NRS 800",
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
    },
    
    
    {
      name: "SSD 512GB",
      price: "NRS 6000",
      image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=500",
    },
    {
      name: "Webcam HD 1080p",
      price: "NRS 3500",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500",
    },
    
    {
      name: "WiFi Router",
      price: "NRS 4500",
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=500",
    },
    {
      name: "USB Flash Drive 64GB",
      price: "NRS 900",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
    }
  ];

  return (
    <div className="products-page">

      <h1>Our Products</h1>

      {/* Categories Section */}
      <Categories />

      <div className="products-grid">

        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <button>Buy Now</button>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Products;