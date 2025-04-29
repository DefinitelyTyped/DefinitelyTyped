import pg from "pg";

const client = new pg.Client({
    host: "my.database-server.com",
    port: 5334,
    user: "database-user",
    password: "secretpassword!!",
    application_name: "DefinitelyTyped",
    keepAlive: true,
});
client.setTypeParser(20, val => Number(val));
client.getTypeParser(20);

const res = new pg.Result("array", pg.types);
res.rows.forEach(row => row);
