/// <reference path="pg.d.ts" />
import pg = require("pg");
var conString = "postgres://username:password@localhost/database";

// Client pooling
pg.connect(conString, (err, client, done) => {
    if (err) {
        return console.error("Error fetching client from pool", err);
    }
    client.query("SELECT $1::int AS number", ["1"], (err, result) => {
        done();
        if (err) {
            return console.error("Error running query", err);
        }
        console.log(result.rows[0]["number"]);
        return null;
    });
    return null;
});

// Simple
var client = new pg.Client(conString);
client.connect((err) => {
    if (err) {
        return console.error("Could not connect to postgres", err);
    }
    client.query("SELECT NOW() AS 'theTime'", (err, result) => {
        if (err) {
            return console.error("Error running query", err);
        }
        console.log(result.rows[0]["theTime"]);
        client.end();
        return null;
    });
    return null;
});