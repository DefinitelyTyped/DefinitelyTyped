import connectPgSimple = require("connect-pg-simple");
import session = require("express-session");
import { Store } from "express-session";
import * as pg from "pg";
import express = require('express');

const pgSession = connectPgSimple(session);

const pgPool = new pg.Pool({});
const store1: Store = new pgSession({
    pool: pgPool,
    tableName: "user_sessions",
    pruneSessionInterval: 300
});

const app = express();
app.use(session({
    store: store1,
    secret: "foo"
}));

const store2: Store = new pgSession({
    conString: "postgres://postgres@localhost:5432/foo",
    createTableIfMissing: true,
    ttl: 3600,
    schemaName: "someschema",
    pruneSessionInterval: false,
    errorLog: (...args) => console.error(...args)
});

const store3 = new pgSession({
    conObject: {
        host: "localhost",
        user: "database-user",
        max: 20,
        idleTimeoutMillis: 30000
    }
});

const store4 = new pgSession();

store4.close();

store4.pruneSessions();

store4.pruneSessions(err => console.log(err));

const store5 = new pgSession({
    disableTouch: true
});
