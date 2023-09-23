import * as mysqlSession from "express-mysql-session";
import * as session from "express-session";

// $ExpectType typeof MySQLStoreClass
const MySQLStore = mysqlSession(session);

const sessionStore = new MySQLStore({
    host: "host",
    port: 3306,
    user: "user",
    password: "password",
    database: "database",
    clearExpired: true,
    checkExpirationInterval: 60000,
    expiration: 60000,
    createDatabaseTable: true,
    endConnectionOnClose: true,
    disableTouch: true,
    charset: "charset",
    schema: {
        tableName: "table",
        columnNames: {
            session_id: "session_id",
            expires: "expires",
            data: "data",
        },
    },
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 10,
});

session({
    secret: "session-secret",
    store: sessionStore,
});

// @ts-expect-error
sessionStore._expirationInterval;

// $ExpectType Promise<void>
sessionStore.onReady();

// $ExpectType Promise<void>
sessionStore.createDatabaseTable();

// $ExpectType Promise<any>
sessionStore.get("session-id");
sessionStore.get("session-id", (error, session) => {});

// $ExpectType Promise<void>
sessionStore.set("session-id", { key: "value" });
sessionStore.set("session-id", { key: "value" }, error => {});

// $ExpectType Promise<void>
sessionStore.close();
sessionStore.close(() => {});

// $ExpectType Promise<number>
sessionStore.length();
sessionStore.length((error, length) => length.toFixed());

sessionStore.load("session-id", (error, session) => {});

sessionStore.on("connect", () => {});
