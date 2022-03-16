-- groups rows together when they have the same scores and displays the number of occurrences
SELECT `score`, COUNT(`score`) 'number' FROM `second_table` GROUP BY `score` ORDER BY `number` DESC;
