import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([
    { productId: '1', productName: 'Tech Solution Inc', description: 'John Dhoe', price: '+1234567890', supplierId: 'john.doe@techsolution.com' },
    { productId: '2', productName: 'Gadgets Galore Ltd', description: 'Jane Smith', price: '+1987654321', supplierId: 'jane.smith@gadgetsgalore.com' },
    { productId: '3', productName: 'Electronic World', description: 'Mark Johnson', price: '+1122334455', supplierId: 'mark.johnson@electronicworld.com' }
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
                  <th>Supplier Id</th>
                  <th>Supplier Name</th>
                  <th>Contact Name</th>
                  <th>Phone</th>
                  <th>email</th>
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
              <label>Supplier Id</label>
              <input name="productId" value={selectedProduct ? selectedProduct.productId : ''} onChange={handleChange} readOnly />
            </div>
            <div className="form-group">
              <label>Supplier Name</label>
              <input name="productName" value={selectedProduct ? selectedProduct.productName : ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Contact No</label>
              <input name="description" value={selectedProduct ? selectedProduct.description : ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input name="price" value={selectedProduct ? selectedProduct.price : ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
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
