import * as pg from "pg";

var conString = "postgres://username:password@localhost/database";

// https://github.com/brianc/node-pg-types
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
        }
        else {
            done();
        }
        console.log(result.rows[0]["number"]);
        return null;
    });
    return null;
});

// Simple
var client = new pg.Client(conString);
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

var config = {
  user: 'foo', //env var: PGUSER
  database: 'my_db', //env var: PGDATABASE
  password: 'secret', //env var: PGPASSWORD
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  Promise,
};
var pool = new pg.Pool(config);

pool.connect((err, client, done) => {
  if(err) {
    return console.error('error fetching client from pool', err);
  }
  client.query('SELECT $1::int AS number', ['1'], (err, result) => {
    done();

    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].number);
  });
});

pool.on('error', (err, client) => {
  console.error('idle client error', err.message, err.stack)
})
