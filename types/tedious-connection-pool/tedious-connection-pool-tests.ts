import ConnectionPool = require("tedious-connection-pool");
import tedious = require("tedious");

const config: tedious.ConnectionConfig = {
    server: "127.0.0.1",
    options: {
        database: "somedb",
        instanceName: "someinstance"
    },
    authentication: {
        type: 'default',
        options: {
            userName: "rogier",
            password: "rogiers password"
        }
    }
};

const poolConfig: ConnectionPool.PoolConfig = {
    min: 1,
    max: 4
};

const pool: ConnectionPool = new ConnectionPool(poolConfig, config);

pool.on('error', (err: Error) => {
    console.error(err);
});

pool.once('error', (err: Error) => {
    console.error(err);
});

pool.removeAllListeners();

pool.acquire((err: Error, connection: ConnectionPool.PooledConnection) => {
    console.log("hurray");
    connection.beginTransaction((error: Error): void => {}, "some name");
    connection.rollbackTransaction((error: Error): void => {});
    connection.commitTransaction((error: Error): void => {});

    const request = new tedious.Request("SELECT * FROM foo", (error: Error, rowCount: number): void => {
    });
    request.on("row", (row: tedious.ColumnValue[]): void => {
    });
    connection.execSql(request);

    connection.release();

    pool.drain();
});
