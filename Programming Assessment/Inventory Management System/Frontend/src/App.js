import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import './App.css';

// Register the required elements
ChartJS.register(ArcElement, Tooltip, Legend);

const App = () => {
  const [stockData, setStockData] = useState([
    { stockId: 1, productId: 1, warehouseId: 1, quantity: 50 },
    { stockId: 2, productId: 2, warehouseId: 2, quantity: 100 },
    { stockId: 3, productId: 1, warehouseId: 3, quantity: 75 },
    { stockId: 4, productId: 3, warehouseId: 3, quantity: 200 },
    { stockId: 5, productId: 5, warehouseId: 2, quantity: 80 },
    { stockId: 6, productId: 6, warehouseId: 3, quantity: 50 },
    { stockId: 7, productId: 1, warehouseId: 1, quantity: 30 },
    { stockId: 8, productId: 2, warehouseId: 2, quantity: 120 },
    { stockId: 9, productId: 3, warehouseId: 3, quantity: 40 },
    { stockId: 10, productId: 4, warehouseId: 2, quantity: 60 }
  ]);

  const pieData = {
    labels: stockData.map(data => `Product ${data.productId}`),
    datasets: [{
      data: stockData.map(data => data.quantity),
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40',
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0'
      ]
    }]
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="dashboard-bar">Dashboard</div>
        <button className="menu-item">Products</button>
        <button className="menu-item">Suppliers</button>
        <button className="menu-item">Warehouse</button>
        <button className="menu-item">Stock levels</button>
      </div>
      <div className="main">
        <div className="header">
          <div className="user-info">User: Trial Admin (ADMINISTRATOR)</div>
          <button className="sign-out">Sign out</button>
        </div>
        <div className="stock-section">
          <div className="stock-list">
            <table>
              <thead>
                <tr>
                  <th>Stock Id</th>
                  <th>Product Id</th>
                  <th>Warehouse Id</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {stockData.map(stock => (
                  <tr key={stock.stockId}>
                    <td>{stock.stockId}</td>
                    <td>{stock.productId}</td>
                    <td>{stock.warehouseId}</td>
                    <td>{stock.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="chart-container">
            <Pie data={pieData} style={{ maxWidth: '400px', maxHeight: '400px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
