
/// <reference path="any-db.d.ts" />

"use strict";

import anyDB = require("any-db");

var conn: anyDB.Connection = anyDB.createConnection("mysql://user:password@localhost/testdb");
var sql: string = "SELECT * FROM questions";

conn.query(sql, [1, "boo"]);

conn.query(sql).on("data", (row: Object[]): void => {
// nothing
});

conn.query(sql, [1, "s"], (error: Error, result: anyDB.ResultSet): void => {
	result.rows.length;
	result.fields.length;
});

conn.end();


var poolConfig: anyDB.PoolConfig = {
	min: 1,
	max: 200
};

var pool: anyDB.ConnectionPool = anyDB.createPool("mysql://user:password@localhost/testdb", poolConfig);

pool.query(sql).on("data", (row: Object[]): void => {
// nothing
});

pool.close((error: Error): void => {
});

