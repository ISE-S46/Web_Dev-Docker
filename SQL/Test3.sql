SELECT gender, AVG(age)
FROM employee_demographics
GROUP BY gender
HAVING AVG(age) > 40;

SELECT occupation, AVG(salary) as AVG_salary
FROM employee_salary
WHERE occupation LIKE "%manager%"
GROUP BY occupation
HAVING AVG_salary > 40000;

SELECT *
FROM employee_demographics
LIMIT 3;

SELECT *
FROM employee_demographics
ORDER BY first_name
LIMIT 2, 1;

SELECT gender, AVG(age) AS Avg_age
FROM employee_demographics
GROUP BY gender;

SELECT gender, AVG(age) AS Avg_age
FROM employee_demographics
GROUP BY gender
HAVING Avg_age > 40;

SELECT *
FROM employee_demographics
ORDER BY first_name
LIMIT 3;