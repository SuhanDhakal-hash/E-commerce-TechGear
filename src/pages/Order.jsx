import React, { useState } from "react";
import "./Order.css";

function Orders() {
  const [orders] = useState([
    {
      id: 1001,
      customer: "John Doe",
      total: 0,
      status: "Pending",
    },
    {
      id: 1002,
      customer: "Jane Smith",
      total: 0,
      status: "Delivered",
    },
    {
      id: 1003,
      customer: "Mike Johnson",
      total: 0,
      status: "Shipped",
    },
  ]);

  return (
    <div className="orders-container">
      <h1>Order Management</h1>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total ($)</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.customer}</td>
              <td>${order.total}</td>
              <td>{order.status}</td>
              <td>
                <button className="view-btn">View</button>
                <button className="update-btn">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;