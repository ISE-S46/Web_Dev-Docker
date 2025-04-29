/*CTE*/
WITH CTE_Example AS
(
SELECT 
	gender, 
    AVG(salary) AS avg_sal, 
    MAX(salary) AS max_sal, 
    MIN(salary) AS min_sal, 
    COUNT(salary) AS count_sal
FROM employee_demographics dem
JOIN employee_salary sal
	ON dem.employee_id = sal.employee_id
GROUP BY gender
)
SELECT AVG(avg_sal)
FROM CTE_Example
;

/*sub query*/
SELECT AVG(avg_sal)
FROM (
	SELECT 
		gender, 
		AVG(salary) AS avg_sal, 
		MAX(salary) AS max_sal, 
		MIN(salary) AS min_sal, 
		COUNT(salary) AS count_sal
	FROM employee_demographics dem
	JOIN employee_salary sal
		ON dem.employee_id = sal.employee_id
	GROUP BY gender
) ex_subq;

SELECT AVG(avg_sal)
FROM CTE_Example; /*this will give error due to there being no table name CTE_Example in database*/

/*Join table with CTE*/
WITH CTE_Example AS
(
SELECT 
	employee_id,
	gender, 
    birth_date
FROM employee_demographics 
WHERE birth_date > '1985-01-01'
),
CTE_Example2 AS (
SELECT employee_id, salary
FROM employee_salary
WHERE salary > 50000
)
SELECT *
FROM CTE_Example
JOIN CTE_Example2
	ON CTE_Example.employee_id = CTE_Example2.employee_id
;

WITH CTE_Example (Gender, avg_sal, max_sal, min_sal, count_sal) AS
(
SELECT 
	gender, AVG(salary), MAX(salary), MIN(salary), COUNT(salary)
FROM employee_demographics dem
JOIN employee_salary sal
	ON dem.employee_id = sal.employee_id
GROUP BY gender
)
SELECT *
FROM CTE_Example
;
