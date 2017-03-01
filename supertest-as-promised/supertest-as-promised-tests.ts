
/// <reference types="jasmine" />

import * as request from 'supertest-as-promised';
import * as express from 'express';

var app = express();

// chain your requests like you were promised:
request(app)
  .get("/user")
  .expect(200)
  .then(res => {
    return request(app)
      .post("/kittens")
      .send({ userId: res})
      .expect(201);
  })
  .then(res => {
    // ...
  });


// Usage
request(app)
  .get("/kittens")
  .expect(200)
  .then(res => {
    // ...
  });

describe("GET /kittens", () => {
  it("should work", () => {
    return request(app).get("/kittens").expect(200);
  });
});


// Agents
var agent = request.agent(app);
agent
  .get("/ugly-kitteh")
  .expect(404)
  .then(() => {
    // ...
  });


// Promisey goodness
request(app)
  .get("/kittens")
  .expect(201)
  .then(res => { /* ... */ })
  // I'm a real promise now!
  .catch(err => { /* ... */ });

request(app)
  .get("/kittens")
  .expect(201)
  .toPromise()
  // I'm a real promise now!
  .delay(10)
  .then(res => { /* ... */ });
