import "./Product.css";
import Categories from "../Component/Categories";


function Products() {

  const products = [
    {
      name: "Gaming Keyboard",
      price: "NRS 4000",
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    },

    {
      name: "Wireless Mouse",
      price: "NRS 6000",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    },

    {
      name: "RGB Headset",
      price: "NRS 5000",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },

    {
      name: "USB-C Hub",
      price: "NRS 4000",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    },

    {
      name: "Gaming Monitor",
      price: "NRS 50000",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    },

    {
      name: "Mechanical Keyboard",
      price: "2000",
      image:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500",
    },
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