import sql = require("sql-tagged-template-literal");

const userInput = `Robert'); DROP TABLE Students;--`;
const twoDimensionalArray = [[`a`, 1], [`b`, 2], [`c`, 3]];

// $ExpectType string
sql`INSERT INTO awesome_table (sweet_column) VALUES (${userInput})`;

// $ExpectType string
sql`SELECT ${null} IS NULL`;

// $ExpectType string
sql`SELECT ${"what's up"} AS lulz`;

// $ExpectType string
sql`SELECT ${13} AS totally_lucky`;

// $ExpectType string
sql`SELECT ${true} = ${false}`;

// $ExpectType string
sql`INSERT INTO document_store (json_column) VALUES (${{ fancy: "yes'm" }})`;

// $ExpectType string
sql`WHERE name IN(${[`Alice`, userInput]})`;

// $ExpectType string
sql`INSERT INTO tablez (letter, number) VALUES ${twoDimensionalArray}`;
