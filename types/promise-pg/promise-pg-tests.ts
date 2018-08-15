import * as Q from 'q';
import * as pg from 'promise-pg';

var conString = "postgres://username:password@localhost/database";

// https://github.com/brianc/node-pg-types
pg.raw.types.setTypeParser(20, (val) => Number(val));

// Client pooling
pg.connect(conString)
  .spread(function (client: pg.Client, done: () => void) {
    client.query("SELECT $1::int AS number", ["1"]).promise
      .then(function (result) {
        // done
      }, function (err) {
        console.error("Error running query", err);
      })
      .finally(done);
  }, function (err) {
    return console.error("Error fetching client from pool", err);
  }).done();

// Simple
var client = new pg.Client(conString);
client.connect()
  .spread(function (client: pg.Client, done: () => void) {
    client.query("SELECT NOW() AS 'theTime'").promise
      .then(function (result) {
        console.log(result.rows[0]["theTime"]);
        client.end();
        return null;
      }, function (err) {
        return console.error("Error running query", err);
      });
  }, function (err) {
    return console.error("Could not connect to postgres", err);
  }).done();

// Using buffer query option
pg.connect(conString)
  .spread(function (client: pg.Client, done: () => void) {
    client.query({
      text: "SELECT * FROM users",
      buffer: true
    }).promise.then(
      function (result) { console.log(result.rows.length + " rows returned"); },
      function (err): void { console.error("Error running query", err); throw err; },
      function (user: any) {} // called for each returned row
    ).finally(done);
  }).done();

// Transactions
pg.connect(conString)
  .spread(function (client: pg.Client, done: () => void) {
    var INSERT = "INSERT INTO users(name, t_birth, country) VALUES ($1, $2, $3)";

    console.log("Transaction I:");
    var trans = client.transaction(function () {
      return Q.all([{
          text: INSERT,
          values: ["Jake1", "now()", "Oo"]
        }, {
          text: INSERT,
          values: ["Cake2", null, "Küche"]
        }, {
          text: INSERT,
          values: ["Mike3", "now()", null]
        }].map(function (q) { return client.query(q).promise; }));
    }).then(function() {
      console.log("Good - Committed Transaction I.");
    }, function (err) {
      console.log("Bad  - Rolled back Transaction I.", err);
    });

    trans.finally(function () {
      client.transaction(function () {
        return Q.all([{
          text: INSERT,
          values: ["Jake", "now()", "Oo"]
        }, {
          text: INSERT, // Bad, name is NOT NULL
          values: [null, null, "Küche"]
        }, {
          text: INSERT,
          values: ["Mike", "now()", null]
        }].map(function (q) { return client.query(q).promise; }));
      }).then(function () {
        console.log("Bad  - Committed Transaction II.");
      }, function (err) {
        console.log("Good - Rolled back Transaction II.", err.message);
      }).finally(done).done();
    });
  }).done();
