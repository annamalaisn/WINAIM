import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([
    { productId: '1', productName: 'Main Warehouse', description: 'New York,NY', price: 'New York,NY', supplierId: 's001' },
    { productId: '2', productName: 'Distribution Center', description: 'Los Angeles,CA', price: 'Los Angeles,CA', supplierId: 's002' },
    { productId: '3', productName: 'Regional Warehouse', description: 'Chicago,IL', price: 'Chicago,IL', supplierId: 's003' },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct({ ...selectedProduct, [name]: value });
  };

  const handleClear = () => {
    setSelectedProduct(null);
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
        <div className="products-section">
          <div className="product-list">
            <table>
              <thead>
                <tr>
                  <th>Warehouse_Id</th>
                  <th> Warehouse_Name</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.productId} onClick={() => handleSelectProduct(product)}>
                    <td>{product.productId}</td>
                    <td>{product.productName}</td>
                    <td>{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="product-details">
            <div className="form-group">
              <label>Warehouse_Id</label>
              <input name="productId" value={selectedProduct ? selectedProduct.productId : ''} onChange={handleChange} readOnly />
            </div>
            <div className="form-group">
              <label>Warehouse_Name</label>
              <input name="productName" value={selectedProduct ? selectedProduct.productName : ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input name="price" value={selectedProduct ? selectedProduct.price : ''} onChange={handleChange} />
            </div>
            <div className="button-group">
              <button>Add</button>
              <button>Edit</button>
              <button>Delete</button>
              <button onClick={handleClear}>Clear</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
