CREATE TEMPORARY TABLE temp_table(
first_name varchar(50),
last_name varchar(50),
favourite_movie varchar(100)
);

SELECT *
FROM temp_table;

INSERT INTO temp_table
VALUES('Shinei', 'Nouzen', '86');

SELECT *
FROM temp_table;

SELECT *
FROM employee_salary;

CREATE TEMPORARY TABLE Salary_Over_50k(
SELECT *
FROM employee_salary
WHERE salary >= 50000
);

SELECT *
FROM Salary_Over_50k;