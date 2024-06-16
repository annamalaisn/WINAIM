--------DB Exercise 1-------
create table employees(employee_id number, first_name varchar(20), last_name varchar(20), department_id number, hire_date date)

create table departments(department_id number, department_name varchar(20))

create table salaries(employee_id number, salaries number, from_date date, to_date date)

------1.
select * from employees where EXTRACT(YEAR FROM hire_date)=EXTRACT(YEAR FROM sysdate)-1

------2.
select c.department_id,c.department_name,sum(a.salary) Total_Salary_Expenditure
from salaries a
inner join employees b on a.employee_id=b.employee_id
inner join departments c on b.department_id=c.department_id
group by c.department_id,c.department_name

-----3.
select * from (
SELECT e.employee_id, e.first_name, e.last_name, d.department_name,s.salary
,row_number()over(order by s.salary desc)rn
FROM employees e
JOIN departments d ON e.department_id = d.department_id
JOIN salaries s on e.employee_id = s.employee_id
)a
where rn <= 5;
