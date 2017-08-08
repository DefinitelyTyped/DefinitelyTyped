import tedious = require("tedious");

var config: tedious.ConnectionConfig = {
	userName: "rogier",
	password: "rogiers password",
	server: "127.0.0.1",
	options: {
		database: "somedb",
		instanceName: "someinstance",
	}
};

var connection = new tedious.Connection(config);
connection.on("connect", (): void => {
	console.log("hurray");
});

connection.beginTransaction((error: Error): void => {}, "some name");
connection.rollbackTransaction((error: Error): void => {});
connection.commitTransaction((error: Error): void => {});
connection.saveTransaction((error: Error): void => {});
connection.transaction((error: Error, done: (error?: Error) => void): void => {
	done();
	done(error);
}, "some name", tedious.ISOLATION_LEVEL.NO_CHANGE);
connection.transaction((error: Error, done: (error?: Error) => void): void => {});

var request = new tedious.Request("SELECT * FROM foo", (error: Error, rowCount: number): void => {
});
request.on("row", (row: tedious.ColumnValue[]): void => {
});
connection.execSql(request);

var requestError = new tedious.RequestError();
requestError.message = 'test';
requestError.code = 1;
requestError = new tedious.RequestError('test', 50005);

var connectionError = new tedious.ConnectionError();
connectionError.message = 'test';
connectionError.code = 1;
connectionError = new tedious.ConnectionError('test', 50005);
