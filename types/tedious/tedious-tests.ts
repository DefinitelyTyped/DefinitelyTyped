import tedious = require("tedious");

var config: tedious.ConnectionConfiguration = {
    server: "127.0.0.1",
    options: {
        database: "somedb",
        instanceName: "someinstance",
        cryptoCredentialsDetails: {
            minVersion: "TLSv1",
        },
        useColumnNames: true,
        multiSubnetFailover: false,
    },
    authentication: {
        type: "default",
        options: {
            userName: "rogier",
            password: "rogiers password",
            clientId: "00000000-0000-0000-0000-000000000000",
            tenantId: "00000000-0000-0000-0000-000000000000",
        },
    },
};

var connection = new tedious.Connection(config);
connection.connect((error: Error): void => {});
connection.on("connect", (): void => {
    console.log("hurray");
});

connection.beginTransaction((error: Error): void => {}, "some name");
connection.rollbackTransaction((error: Error): void => {});
connection.commitTransaction((error: Error): void => {});
connection.saveTransaction((error: Error): void => {}, "some saveponit");
connection.transaction((err: Error, txDone: (err: Error, done: (err?: Error, ...args: object[]) => void) => void) => {
    txDone(err, (err, ...args) => {
        if (err) {
            throw err;
        }
        console.log(args);
    });
}, tedious.ISOLATION_LEVEL.NO_CHANGE);

var request = new tedious.Request("SELECT * FROM foo", (error: Error, rowCount: number): void => {
});
request.on("row", (row: tedious.ColumnValue[] | Record<string, tedious.ColumnValue>): void => {
    console.log(row);
});
connection.execSql(request);

var requestError = new tedious.RequestError("test");
requestError.message = "test";
requestError.code = "ETIMEOUT";
requestError = new tedious.RequestError("test", "ETIMEOUT");

var connectionError = new tedious.ConnectionError("test");
connectionError.message = "test";
connectionError.code = "ETIMEOUT";
connectionError = new tedious.ConnectionError("test", "ETIMEOUT");
