import { Link } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-container">

      <aside className="sidebar">
        <h2>TechStore</h2>

        <ul>
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/admin/products">Products</Link></li>
          <li><Link to="/admin/orders">Orders</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
          
        </ul>
      </aside>

      <main className="content">
        <h1>Admin Dashboard</h1>

        <div className="cards">

          <div className="card">
            <h3>Total Products</h3>
            <p>0</p>
          </div>

          <div className="card">
            <h3>Total Orders</h3>
            <p>0</p>
          </div>

          <div className="card">
            <h3>Total Users</h3>
            <p>0</p>
          </div>

          <div className="card">
            <h3>Total Revenue</h3>
            <p>NRS 0</p>
          </div>

        </div>
      </main>

    </div>
  );
}

export default AdminDashboard;