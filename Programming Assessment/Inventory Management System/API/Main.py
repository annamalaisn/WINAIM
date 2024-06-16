from fastapi import FastAPI

from util.dbConnection import DBConnection

app = FastAPI()


def get_connection():
    connection = DBConnection.get_connection()
    cursor = connection.cursor()
    return connection, cursor


@app.get("/view_all_products")
async def view_all_product():
    connection, cursor = get_connection()
    query = f"select * from Products"
    cursor.execute(query)
    res = cursor.fetchall()
    return res


@app.get("/view_all_suppliers")
async def view_all_suppliers():
    connection, cursor = get_connection()
    query = f"select * from Suppliers"
    cursor.execute(query)
    res = cursor.fetchall()
    return res


@app.get("/view_all_stock")
async def view_all_stock():
    connection, cursor = get_connection()
    query = f"select * from Stock"
    cursor.execute(query)
    res = cursor.fetchall()
    return res


@app.get("/view_warehouses")
async def view_warehouses():
    connection, cursor = get_connection()
    query = f"select * from Warehouses"
    cursor.execute(query)
    res = cursor.fetchall()
    return res


@app.post("/create_suppliers")
async def create_suppliers(supplier_name, contact_name, phone, email):
    connection, cursor = get_connection()
    query = f"insert into Suppliers (supplier_name, contact_name, phone, email) values ('{supplier_name}', '{contact_name}', {phone}, '{email}');"
    cursor.execute(query)
    connection.commit()


@app.post("/create_product")
async def create_product(product_name, description, price, supplier_id):
    connection, cursor = get_connection()
    query = f"insert into Products (product_name, description, price, supplier_id) values ('{product_name}', '{description}', {price}, {supplier_id});"
    cursor.execute(query)
    connection.commit()


@app.post("/create_warehouses")
async def create_warehouses(warehouse_name, location):
    connection, cursor = get_connection()
    query = f"insert into Warehouses (warehouse_name, location) values ('{warehouse_name}', '{location}');"
    cursor.execute(query)
    connection.commit()


@app.post("/create_stock")
async def create_stock(product_id, warehouse_id, quantity):
    connection, cursor = get_connection()
    query = f"insert into Stock (product_id, warehouse_id, quantity) values ({product_id}, {warehouse_id}, {quantity});"
    cursor.execute(query)
    connection.commit()


@app.put("/update_suppliers")
async def update_suppliers(supplier_id, supplier_name, contact_name, phone, email):
    connection, cursor = get_connection()
    query = f"update Suppliers set supplier_name = '{supplier_name}', contact_name = '{contact_name}', phone = '{phone}', email = '{email}' where supplier_id = {supplier_id};"
    cursor.execute(query)
    connection.commit()


@app.put("/update_product")
async def update_product(product_id, product_name, description, price, supplier_id):
    connection, cursor = get_connection()
    query = f"update Products set product_name = '{product_name}', description = '{description}', price = {price}, supplier_id = {supplier_id} where product_id = {product_id};"
    cursor.execute(query)
    connection.commit()


@app.put("/update_warehouses")
async def update_warehouses(warehouse_id, warehouse_name, location):
    connection, cursor = get_connection()
    query = f"update Warehouses set warehouse_name = '{warehouse_name}', location = '{location}' where warehouse_id = {warehouse_id};"
    cursor.execute(query)
    connection.commit()


@app.put("/update_stock")
async def update_stock(stock_id, product_id, warehouse_id, quantity):
    connection, cursor = get_connection()
    query = f"update Stock set product_id = {product_id}, warehouse_id = {warehouse_id}, quantity = {quantity} where stock_id = {stock_id};"
    cursor.execute(query)
    connection.commit()


@app.delete("/delete_warehouses")
async def delete_warehouses(warehouse_id):
    connection, cursor = get_connection()
    query = f"delete from Warehouses where warehouse_id = {warehouse_id};"
    cursor.execute(query)
    connection.commit()


@app.delete("/delete_stock")
async def delete_stock(stock_id):
    connection, cursor = get_connection()
    query = f"delete from Stock where stock_id = {stock_id};"
    cursor.execute(query)
    connection.commit()


@app.delete("/delete_product")
async def delete_product(product_id):
    connection, cursor = get_connection()
    query = f"delete from Products where product_id = {product_id};"
    cursor.execute(query)
    connection.commit()


@app.delete("/delete_suppliers")
async def delete_suppliers(supplier_id):
    connection, cursor = get_connection()
    query = f"delete from Suppliers where supplier_id = {supplier_id};"
    cursor.execute(query)
    connection.commit()






















