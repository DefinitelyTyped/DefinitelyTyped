import tedious = require("tedious");

var config: tedious.ConnectionConfig = {
    server: "127.0.0.1",
    options: {
        database: "somedb",
        instanceName: "someinstance",
        cryptoCredentialsDetails: {
            minVersion: "TLSv1"
        },
        useColumnNames: true
    },
    authentication: {
        type: "default",
        options: {
            userName: "rogier",
            password: "rogiers password",
            clientId: "00000000-0000-0000-0000-000000000000",
            tenantId: "00000000-0000-0000-0000-000000000000"
        }
    }
};

var connection = new tedious.Connection(config);
connection.connect((error: Error): void => {});
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
request.on("row", (row: Record<string, tedious.ColumnValue>): void => {
});
connection.execSql(request);

var requestError = new tedious.RequestError();
requestError.message = 'test';
requestError.code = "ETIMEOUT";
requestError = new tedious.RequestError('test', "ETIMEOUT");

var connectionError = new tedious.ConnectionError();
connectionError.message = 'test';
connectionError.code = "ETIMEOUT";
connectionError = new tedious.ConnectionError('test', "ETIMEOUT");
