
/// <reference path="tedious.d.ts" />

"use strict";

import tedious = require("tedious");

var config: tedious.ConnectionConfig = {
	userName: "rogier",
	password: "rogiers password",
	server: "127.0.0.1",
	options: {
		database: "somedb",
		instance: "someinstance"
	}
}

var connection = new tedious.Connection(config);
connection.on("connect", (): void => {
	console.log("hurray");
});

connection.beginTransaction((error: Error): void => {}, "some name");
connection.rollbackTransaction((error: Error): void => {});
connection.commitTransaction((error: Error): void => {});


var request = new tedious.Request("SELECT * FROM foo", (error: Error, rowCount: number): void => {
});
request.on("row", (row: tedious.ColumnValue[]): void => {
});
connection.execSql(request);


