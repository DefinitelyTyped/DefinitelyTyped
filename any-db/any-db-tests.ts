
/// <reference path="any-db.d.ts" />

"use strict";

import anyDB = require("any-db");

var conn: anyDB.Connection = anyDB.createConnection("mysql://user:password@localhost/testdb");
var sql: string = "SELECT * FROM questions";
conn.query(sql).on("data", (row: Object[]): void => {
// nothing
});
conn.end();
