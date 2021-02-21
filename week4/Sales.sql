SELECT * FROM Employees;
SELECT * FROM customers;
SELECT * FROM Orders;
SELECT * FROM Order_Details;





SELECT Employees.EmpFirstName, Employees.EmpLastName, Employees.EmployeeID, SUM(QuotedPrice)
 AS TotalSales, (AVG(QuotedPrice)) AS OrderedAveragePrice, SUM(QuantityOrdered) AS TotalOrders
FROM Order_Details
JOIN Orders ON Order_Details.OrderNumber = Orders.OrderNumber
JOIN Employees ON Employees.EmployeeID = Orders.EmployeeID
GROUP BY Orders.EmployeeID 
ORDER BY OrderedAveragePrice DESC; 
 
 
