import { identify } from 'sql-query-identifier';

identify(`
  INSERT INTO Persons (PersonID, Name) VALUES (1, 'Jack');
  SELECT * FROM Persons;
`);

identify(`CREATE INDEX part_of_name ON customer (name(10));`, {strict: false});
