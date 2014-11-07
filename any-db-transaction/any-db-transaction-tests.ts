
/// <reference path="../any-db/any-db.d.ts" />
/// <reference path="any-db-transaction.d.ts" />

"use strict";

import anyDB = require("any-db");
import begin = require("any-db-transaction");

var conn: anyDB.Connection = anyDB.createConnection("mysql://user:password@localhost/testdb");


var transaction = begin(conn);
var transaction2 = begin(transaction);

begin(conn, { autoRollback: true });
begin(conn, (error: Error, result: begin.Transaction): void => {
});

transaction.query("SELECT * FROM MyTable");

transaction.commit();
transaction.commit((error: Error): void => {
});

transaction.rollback();
transaction.rollback((error: Error): void => {
});

