import * as request from 'supertest-as-promised';
import * as express from 'express';

declare function describe(desc: string, f: () => void): void;
declare function it(desc: string, f: () => void): void;

const app = express();

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

request(app).get("/kittens").expect(200);

// Agents
const agent = request.agent(app);
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
