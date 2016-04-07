/// <reference path="promise-pg.d.ts" />

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
