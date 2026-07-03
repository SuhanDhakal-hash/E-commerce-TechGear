import React from "react";
import "./CustomerDashboard.css";
import Sidebar from"../components/Sidebar";
function CustomerDashboard() {
  const user = {
    
  };

  const orders = [
    { id: 1, product: "Laptop", status: "Delivered" },
    { id: 2, product: "Keyboard", status: "Pending" },
    { id: 3, product: "Mouse", status: "Shipped" }
  ];

  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>

      <div className="profile-card">
        <h2>Profile Information</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        
      </div>

      <div className="stats-container">
        <div className="card">
          <h3>Total Orders</h3>
          <p>{orders.length}</p>
        </div>

        <div className="card">
          <h3>Wishlist</h3>
          <p>0</p>
        </div>

        <div className="card">
          <h3>Cart Items</h3>
          <p>0</p>
        </div>
      </div>

      <div className="orders-section">
        <h2>Recent Orders</h2>

        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.product}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerDashboard;