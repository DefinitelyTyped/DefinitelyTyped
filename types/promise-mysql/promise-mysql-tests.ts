import * as mysql from 'promise-mysql';

// single connection test

let connection: mysql.Connection;

mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "password",
    database: "test",
}).then((con) => {
    connection = con;
    return connection.query("SELECT COUNT(*) AS cnt FROM countries WHERE name LIKE 'C%';");
}).then((result) => {
    if (result[0].cnt > 0)
        return connection.query("SELECT name FROM countries WHERE name LIKE 'C%';");
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
}).then(() => {
    if (connection && connection.end)
        connection.end();
});

// pooled connections test

const pool = mysql.createPool({
    host: "localhost",
    user: "user",
    password: "password",
    database: "test",
    connectionLimit: 10,
});

let connection1: mysql.PoolConnection;
let countries: any[];

pool.getConnection().then((con) => {
    connection1 = con;
    return connection1.query("SELECT id FROM countries WHERE name LIKE 'C%';");
}).then((result) => {
    countries = result;
    return connection1.beginTransaction();
}).then(() => {
    const promises: Array<Promise<any>> = [];
    for (const country of countries)
        promises.push(connection1.query("UPDATE provinces SET view_count = view_count + 1 WHERE country_id = ?", country.id));
    return Promise.all(promises);
}).then(() => {
    return connection1.commit();
}).catch((err) => {
    console.log(err);
}).then(() => {
    if (connection1 && connection1.release)
        pool.releaseConnection(connection1);
});

let connection2: mysql.PoolConnection;

pool.getConnection().then((con) => {
    connection2 = con;
    return connection2.query("SELECT id FROM flags;");
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
}).then(() => {
    if (connection2 && connection2.release)
        pool.releaseConnection(connection2);
});

pool.query("SELECT `name` FROM hobbits").then((rows) => {
    console.log(rows);
});
