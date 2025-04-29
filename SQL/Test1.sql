
SELECT DISTINCT first_name, gender
FROM employee_demographics;

SELECT *
FROM employee_salary
WHERE first_name = 'Ann';

SELECT *
FROM employee_salary
WHERE first_name LIKE "A%";

SELECT *
FROM employee_salary
WHERE salary > 50000;

SELECT *
FROM employee_salary
WHERE salary >= 50000;

SELECT *
FROM employee_demographics
WHERE gender = 'Female';

SELECT *
FROM employee_demographics
WHERE gender != 'Female';

SELECT *
FROM employee_demographics
WHERE birth_date > '1985-01-01'
OR gender = 'male';

SELECT *
FROM employee_demographics
WHERE (first_name = 'Leslie' AND age = 44) OR age > 55;

SELECT *
FROM employee_demographics
WHERE first_name LIKE '%e%';

SELECT *
FROM employee_demographics
WHERE first_name LIKE '_a%';

SELECT *
FROM employee_demographics
WHERE first_name LIKE '%a%';

SELECT *
FROM employee_demographics
WHERE first_name LIKE 'a___%';

SELECT *
FROM employee_demographics
WHERE birth_date LIKE '199%';
