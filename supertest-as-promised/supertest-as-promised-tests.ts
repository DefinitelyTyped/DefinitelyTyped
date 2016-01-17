/// <reference path="supertest-as-promised.d.ts" />
/// <reference path="../express/express.d.ts" />
/// <reference path="../jasmine/jasmine.d.ts" />

import * as request from 'supertest-as-promised';
import * as express from 'express';

var app = express();

// chain your requests like you were promised:
request(app)
  .get("/user")
  .expect(200)
  .then(function (res) {
    return request(app)
      .post("/kittens")
      .send({ userId: res})
      .expect(201);
  })
  .then(function (res) {
    // ...
  });


// Usage
request(app)
  .get("/kittens")
  .expect(200)
  .then(function (res) {
    // ...
  });

describe("GET /kittens", function () {
  it("should work", function () {
    return request(app).get("/kittens").expect(200);
  });
});


// Agents
var agent = request.agent(app);
agent
  .get("/ugly-kitteh")
  .expect(404)
  .then(function () {
    // ...
  })


// Promisey goodness
request(app)
  .get("/kittens")
  .expect(201)
  .then(function (res) { /* ... */ })
  // I'm a real promise now!
  .catch(function (err) { /* ... */ })

request(app)
  .get("/kittens")
  .expect(201)
  .toPromise()
  // I'm a real promise now!
  .delay(10)
  .then(function (res) { /* ... */ })
