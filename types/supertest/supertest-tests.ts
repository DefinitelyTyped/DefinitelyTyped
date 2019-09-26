import supertest = require('supertest');
import express = require('express');

const app = express();
const request: supertest.SuperTest<supertest.Test> = supertest(app);

(request
  .get('/user') as supertest.Test)
  .expect('Content-Type', /json/)
  .expect('Content-Length', '20')
  .expect(201)
  .end((err, res) => {
    if (err) throw err;
  });

// cookie scenario
const agent = supertest.agent();
request
  .post('/login')
  .end((err: any, res: supertest.Response) => {
    if (err) throw err;
    agent.saveCookies(res);

    const req = request.get('/admin') as supertest.Test;
    agent.attachCookies(req);
    req.expect(200, (err: any, res: supertest.Response) => {
      if (err) throw err;
    });
  });

// cookie scenario, new version
const client = supertest.agent(app);
client
  .post('/login')
  .end((err: any, res: supertest.Response) => {
    if (err) throw err;

    (client.get('/admin') as supertest.Test)
      .expect(200, (err: any, res: supertest.Response) => {
        if (err) throw err;
      });
  });

// allow passing trusted CA as option to TestAgent
supertest.agent(app, {
  ca: 'test ca',
});

// functional expect
(request
  .get('/') as supertest.Test)
  .expect(hasPreviousAndNextKeys)
  .end((err: any, res: supertest.Response) => {
    if (err) throw err;
  });

function hasPreviousAndNextKeys(res: supertest.Response) {
  if (!('next' in res.body)) return "missing next key";
  if (!('prev' in res.body)) throw new Error("missing prev key");
}

// functional expect without response type
(request
  .get('/') as supertest.Test)
  .expect(res => {
    if (!('next' in res.body)) return "missing next key";
    if (!('prev' in res.body)) throw new Error("missing prev key");
  })
  .end((err: any, res: supertest.Response) => {
    if (err) throw err;
  });

// object expect
(request
  .get('/') as supertest.Test)
  .expect(200, { foo: 'bar' })
  .end((err: any, res: supertest.Response) => {
    if (err) throw err;
  });
