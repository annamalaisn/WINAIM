create database ims;
use ims;

CREATE TABLE Suppliers (
    supplier_id INT PRIMARY KEY auto_increment,
    supplier_name VARCHAR(255) NOT NULL,
    contact_name VARCHAR(255),
    phone VARCHAR(20),
    email VARCHAR(100)
);

CREATE TABLE Products (
    product_id INT PRIMARY KEY auto_increment,
    product_name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    supplier_id INT,
    FOREIGN KEY (supplier_id) REFERENCES Suppliers(supplier_id)
);

CREATE TABLE Warehouses (
    warehouse_id INT PRIMARY KEY auto_increment,
    warehouse_name VARCHAR(255) NOT NULL,
    location VARCHAR(255)
);

CREATE TABLE Stock (
    stock_id INT PRIMARY KEY auto_increment,
    product_id INT,
    warehouse_id INT,
    quantity INT,
    FOREIGN KEY (product_id) REFERENCES Products(product_id),
    FOREIGN KEY (warehouse_id) REFERENCES Warehouses(warehouse_id)
);

INSERT INTO Suppliers (supplier_id, supplier_name, contact_name, phone, email)
VALUES
(1, 'Tech Solutions Inc.', 'John Doe', '+1234567890', 'john.doe@techsolutions.com'),
(2, 'Gadgets Galore Ltd.', 'Jane Smith', '+1987654321', 'jane.smith@gadgetsgalore.com'),
(3, 'Electronics World', 'Mark Johnson', '+1122334455', 'mark.johnson@electronicsworld.com');

INSERT INTO Warehouses (warehouse_id, warehouse_name, location)
VALUES
(1, 'Main Warehouse', 'New York, NY'),
(2, 'Distribution Center', 'Los Angeles, CA'),
(3, 'Regional Warehouse', 'Chicago, IL');

INSERT INTO Products (product_id, product_name, description, price, supplier_id)
VALUES
(1, 'Laptop', 'High-performance laptop', 1200, 1),
(2, 'Smartphone', 'Latest model smartphone', 800, 2),
(3, 'Tablet', 'Lightweight tablet', 500, 1),
(4, 'Headphones', 'Noise-cancelling headphones', 150, 3),
(5, 'Keyboard', 'Mechanical gaming keyboard', 100, 2),
(6, 'Monitor', '27-inch LED monitor', 300, 3),
(7, 'Printer', 'All-in-one printer', 200, 1),
(8, 'Mouse', 'Wireless mouse', 30, 2),
(9, 'Camera', 'DSLR camera', 1000, 3),
(10, 'External SSD', 'Portable external SSD', 150, 1);

INSERT INTO Stock (stock_id, product_id, warehouse_id, quantity)
VALUES
(1, 1, 1, 50),
(2, 2, 2, 100),
(3, 3, 1, 75),
(4, 4, 3, 200),
(5, 5, 2, 80),
(6, 6, 3, 50),
(7, 7, 1, 30),
(8, 8, 2, 120),
(9, 9, 3, 40),
(10, 10, 1, 60);
