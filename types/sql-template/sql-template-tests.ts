import SQL = require("sql-template");

const query = SQL`INSERT INTO table (column) VALUES (${"value"})`;
SQL.transformers["in"]([], "", () => "");

SQL.insert("table", {column: "value"});
SQL.insert_bulk("table", ["column"], [["value"]]);

SQL.update("table", {column: "value"});
SQL.update("table", {column: "value"}, true);
SQL.update("table", {column: "value2"}, {column: "value1"});
SQL.update("table", {column: "value2"}, SQL`column = ${"value1"}`);

SQL.select("table");
SQL.select("table", {column: "value"});
SQL.select("table", {column: "value"}, "a, b");
SQL.select("table", {column: "value"}, "a, b", "GROUP BY x");

SQL.search_blob("column", "value");
SQL.search_blob("column", "value #1", "user_id");
SQL.search_blob("column", "value #1", "user_id", "LIKE");
