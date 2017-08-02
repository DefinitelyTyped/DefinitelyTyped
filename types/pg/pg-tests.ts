import * as pg from "pg";

const conString = "postgres://username:password@localhost/database";

// https://github.com/brianc/node-pg-types
// tslint:disable-next-line no-unnecessary-callback-wrapper
pg.types.setTypeParser(20, val => Number(val));

// Client pooling
pg.defaults.ssl = true;
pg.connect(conString, (err, client, done) => {
    if (err) {
        return console.error("Error fetching client from pool", err);
    }
    client.query("SELECT $1::int AS number", ["1"], (err, result) => {
        if (err) {
            done(err);
            return console.error("Error running query", err);
        } else {
            done();
        }
        console.log(result.rows[0]["number"]);
        return null;
    });
    return null;
});

// Simple
const client = new pg.Client(conString);
client.connect(err => {
    if (err) {
        return console.error("Could not connect to postgres", err);
    }
    client.query("SELECT NOW() AS 'theTime'", (err, result) => {
        if (err) {
            return console.error("Error running query", err);
        }
        console.log(result.rowCount);
        console.log(result.rows[0]["theTime"]);
        client.end();
        return null;
    });
    return null;
});
client.on('end', () => console.log("Client was disconnected."));

// client pooling

const config = {
    user: 'foo',
    database: 'my_db',
    password: 'secret',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
    Promise,
};
const pool = new pg.Pool(config);

pool.connect((err, client, done) => {
    if (err) {
        return console.error('error fetching client from pool', err);
    }
    client.query('SELECT $1::int AS number', ['1'], (err, result) => {
        done();

        if (err) {
            return console.error('error running query', err);
        }
        console.log(result.rows[0].number);
    });
});

pool.on('error', (err, client) => {
    console.error('idle client error', err.message, err.stack);
});

pool.end();
pool.end(() => {
    console.log("pool is closed");
});

// Promise

function query(sql: string, binds?: any[]): void {
    // binds: any[] | undefined
    pool.query(sql, binds)
        .then((result: pg.QueryResult) => {
            console.log(result.rows[0].number);
        })
        .catch((err: any) => {
            console.error('error running query', err);
        });
}
