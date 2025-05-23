SELECT first_name, last_name, age,
CASE
	WHEN age <= 30 THEN 'Young'
    WHEN age BETWEEN 31 and 50 THEN 'Not Young'
    WHEN age >= 50 THEN 'Old'
END AS Age_Bracket
FROM employee_demographics;

SELECT first_name, last_name, salary,
CASE
	WHEN salary < 50000 THEN salary * 1.05
	WHEN salary > 50000 THEN salary * 1.07 
END AS Increase_Salary,
CASE
	WHEN dept_id = 6 THEN salary * 0.10
	ELSE 0
END AS Bonus
FROM employee_salary;

SELECT first_name, last_name, salary, Increase_Salary, Bonus,
  Increase_Salary + Bonus AS New_Salary
FROM (
  SELECT first_name, last_name, salary,
    CASE
      WHEN salary < 50000 THEN salary * 1.05
      WHEN salary > 50000 THEN salary * 1.07 
    END AS Increase_Salary,
    CASE
      WHEN dept_id = 6 THEN salary * 0.10
      ELSE 0
    END AS Bonus
  FROM employee_salary
) sub; /*sub is placeholder name*/

SELECT *
FROM employee_salary;

SELECT *
FROM parks_departments;