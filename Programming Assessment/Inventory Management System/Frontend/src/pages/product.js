import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([
    { productId: '1', productName: 'Laptop', description: 'High-Performance laptop', price: '1200.00', supplierId: '1' },
    { productId: '2', productName: 'Smartphone', description: 'Latest model smartphone', price: '800.00', supplierId: '2' },
    { productId: '3', productName: 'Tablet', description: 'Lightweight tablet', price: '500.00', supplierId: '1' },
    { productId: '4', productName: 'Headphones', description: 'Noise-canceling headphones', price: '150.00', supplierId: '3' },
    { productId: '5', productName: 'Monitor', description: 'Mechanical gaming keyboard', price: '100.00', supplierId: '2' },
    { productId: '6', productName: 'Printer', description: '27-inch LED monitor', price: '300.00', supplierId: '2' },
    { productId: '7', productName: 'Mouse', description: 'All-in-one printer', price: '200.00', supplierId: '1' },
    { productId: '8', productName: 'Camera', description: 'Wireless mouse', price: '30.00', supplierId: '2' }
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
                  <th>Product Id</th>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Supplier Id</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.productId} onClick={() => handleSelectProduct(product)}>
                    <td>{product.productId}</td>
                    <td>{product.productName}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.supplierId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="product-details">
            <div className="form-group">
              <label>Product Id</label>
              <input name="productId" value={selectedProduct ? selectedProduct.productId : ''} onChange={handleChange} readOnly />
            </div>
            <div className="form-group">
              <label>Product Name</label>
              <input name="productName" value={selectedProduct ? selectedProduct.productName : ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input name="description" value={selectedProduct ? selectedProduct.description : ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input name="price" value={selectedProduct ? selectedProduct.price : ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Supplier Id</label>
              <input name="supplierId" value={selectedProduct ? selectedProduct.supplierId : ''} onChange={handleChange} />
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
