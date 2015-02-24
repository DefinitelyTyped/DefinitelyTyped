// Type definitions for tedious-connection-pool
// Project: https://github.com/pekim/tedious-connection-pool
// Definitions by: Cyprien Autexier <https://github.com/sandorfr>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./tedious-connection-pool.d.ts" />

"use strict";

import ConnectionPool = require("tedious-connection-pool");
import tedious = require("tedious");

var config: tedious.ConnectionConfig = {
	userName: "rogier",
	password: "rogiers password",
	server: "127.0.0.1",
	options: {
		database: "somedb",
		instance: "someinstance"
	}
};

var poolConfig : ConnectionPool.PoolConfig = {
	min: 1,
	max: 4
};

var pool: ConnectionPool = new ConnectionPool(poolConfig, config);

pool.on('error', (err: Error) => {
	console.error(err);
});

pool.acquire((err: Error, connection: ConnectionPool.PooledConnection) =>{
	console.log("hurray");
	connection.beginTransaction((error: Error): void => {}, "some name");
	connection.rollbackTransaction((error: Error): void => {});
	connection.commitTransaction((error: Error): void => {});


	var request = new tedious.Request("SELECT * FROM foo", (error: Error, rowCount: number): void => {
	});
	request.on("row", (row: tedious.ColumnValue[]): void => {
	});
	connection.execSql(request);

	connection.release();


	pool.drain();
});





