-- Lists the number of Records with the same score in the table (second_table)
SELECT score, COUNT(score) AS number FROM second_table
	GROUP BY score
	ORDER BY number DESC;
