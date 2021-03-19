import { types, Client, CustomTypesConfig } from "pg";
import Cursor from "pg-cursor";

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

const cursor = new Cursor("SELECT $1::text as name", ["brianc"]);
const handle = client.query(cursor);
function handler(err: Error | undefined, rows: any[]) {
    if (err) throw err;
    if (rows.length === 0) return;
    console.log(rows);
    handle.read(100, handler);
}
handle.read(100, handler);

const customTypes: CustomTypesConfig = {
    getTypeParser: () => () => "aCustomTypeParser!",
};

client.query(new Cursor("SELECT $1::text", ["brianc"], { types: customTypes }));
