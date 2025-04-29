/* Stored Procedures */

SELECT *
FROM employee_salary
WHERE salary >= 50000;

CREATE PROCEDURE Large_salaries()
SELECT *
FROM employee_salary
WHERE salary >= 50000;

CALL Large_salaries();

DELIMITER $$
CREATE PROCEDURE Large_salaries3()
BEGIN
	SELECT *
	FROM employee_salary
	WHERE salary >= 50000;
	SELECT *
	FROM employee_salary
	WHERE salary >= 10000;
END $$
DELIMITER ;

CALL Large_salaries3();


DELIMITER $$
CREATE PROCEDURE Large_salaries4(p_emp_id INT)
BEGIN
	SELECT salary
	FROM employee_salary
    WHERE employee_id = p_emp_id
	;
END $$
DELIMITER ;

CALL Large_salaries4(1)


