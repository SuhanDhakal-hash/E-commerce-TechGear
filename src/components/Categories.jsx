import { Link } from "react-router-dom";
import "./Categories.css";

const categories = [
  {
    id: 1,
    name: "Mouse",
    icon: "🖱️",
    path: "/products?category=mouse",
  },
  {
    id: 2,
    name: "Keyboard",
    icon: "⌨️",
    path: "/products?category=keyboard",
  },
  {
    id: 3,
    name: "Headset",
    icon: "🎧",
    path: "/products?category=headset",
  },
  {
    id: 4,
    name: "Accessories",
    icon: "💻",
    path: "/products?category=accessories",
  },
];

function Categories() {
  return (
    <section className="category-section">

      <h2>Shop by Category</h2>

      <div className="category-grid">

        {categories.map((category) => (
          <Link
            to={category.path}
            className="category-card"
            key={category.id}
          >

            <div className="category-icon">
              {category.icon}
            </div>

            <h3>{category.name}</h3>

          </Link>
        ))}

      </div>

    </section>
  );
}

export default Categories;