create database employee_management; 
use employee_management;
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    department_id INT,
    hire_date DATE
);
CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(100)
);
CREATE TABLE salaries (
    employee_id INT,
    salary DECIMAL(10, 2),
    from_date DATE,
    to_date DATE,
    PRIMARY KEY (employee_id, from_date),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);
INSERT INTO employees (employee_id, first_name, last_name, department_id, hire_date) VALUES
(1, 'John', 'Doe', 101, '2020-01-15'),
(2, 'Jane', 'Smith', 102, '2019-03-10'),
(3, 'Emily', 'Jones', 101, '2021-07-22'),
(4, 'Michael', 'Brown', 103, '2018-11-05'),
(5, 'Sarah', 'Davis', 102, '2022-04-17'),
(6, 'David', 'Wilson', 104, '2023-02-25'),
(7, 'Laura', 'Taylor', 101, '2020-06-30'),
(8, 'James', 'Anderson', 103, '2023-09-12'),
(9, 'Olivia', 'Thomas', 104, '2021-12-01'),
(10, 'Robert', 'Moore', 102, '2019-05-20');
INSERT INTO departments (department_id, department_name) VALUES
(101, 'Human Resources'),
(102, 'Finance'),
(103, 'Engineering'),
(104, 'Marketing');
INSERT INTO salaries (employee_id, salary, from_date, to_date) VALUES
(1, 50000.00, '2020-01-15', '2020-12-31'),
(1, 55000.00, '2021-01-01', '2021-12-31'),
(2, 60000.00, '2019-03-10', '2019-12-31'),
(2, 62000.00, '2020-01-01', '2020-12-31'),
(3, 48000.00, '2021-07-22', '2021-12-31'),
(4, 70000.00, '2018-11-05', '2019-12-31'),
(5, 52000.00, '2022-04-17', '2022-12-31'),
(6, 58000.00, '2023-02-25', '2023-12-31'),
(7, 50000.00, '2020-06-30', '2020-12-31'),
(8, 75000.00, '2023-09-12', '2024-06-15'),
(9, 62000.00, '2021-12-01', '2022-12-31'),
(10, 56000.00, '2019-05-20', '2020-05-20');
SELECT employee_id, first_name, last_name, department_id, hire_date
FROM employees
WHERE hire_date >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)
LIMIT 1000;
SELECT d.department_id, d.department_name, SUM(s.salary) AS total_salary_expenditure
FROM departments d
JOIN employees e ON d.department_id = e.department_id
JOIN salaries s ON e.employee_id = s.employee_id
GROUP BY d.department_id, d.department_name;
SELECT e.employee_id, e.first_name, e.last_name, d.department_name, s.salary
FROM employees e
JOIN departments d ON e.department_id = d.department_id
JOIN (
    SELECT employee_id, salary
    FROM salaries
    ORDER BY salary DESC
    LIMIT 5
) s ON e.employee_id = s.employee_id
ORDER BY s.salary DESC;

