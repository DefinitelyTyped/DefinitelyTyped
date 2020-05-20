import PgEars = require("pg-ears");

const pgEars = PgEars({
    checkInterval: 10000,
    maxAttempts: 6 * 60 * 24,
    host: "example.com",
    port: 5432,
    database: "example",
    user: "postgres",
    password: ""
});
