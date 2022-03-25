import { types, Client, CustomTypesConfig } from "pg";
import { CursorQueryConfig, ResultCallback } from "pg-cursor";
import Cursor = require("pg-cursor");

// https://github.com/brianc/node-pg-types
// tslint:disable-next-line no-unnecessary-callback-wrapper
types.setTypeParser(20, val => Number(val));

const client = new Client({
    host: "my.database-server.com",
    port: 5334,
    user: "database-user",
    password: "secretpassword!!",
    application_name: "DefinitelyTyped",
    keepAlive: true,
});

const user: string | undefined = client.user;
const database: string | undefined = client.database;
const port: number = client.port;
const host: string = client.host;
const password: string | undefined = client.password;
const ssl: boolean = client.ssl;

const cursorConfig: CursorQueryConfig = {
    rowMode: undefined,
    types: undefined,
};

const cursor = new Cursor<string>("SELECT $1::text as name", ["brianc"]);
const handle = client.query(cursor);

// Implements event emitter
cursor.on('something', () => {});

const handleFn: ResultCallback<string> = (err: Error | undefined, rows: string[]) => {
    if (err) throw err;
    if (rows.length === 0) return;
    console.log(rows);
    handle.read(100, handleFn);
};

handle.read(100, handleFn);

const customTypes: CustomTypesConfig = {
    getTypeParser: () => () => "aCustomTypeParser!",
};

client.query(new Cursor("SELECT $1::text", ["brianc"], { types: customTypes }));
