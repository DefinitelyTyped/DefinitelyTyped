
import * as supertest from 'supertest';
import * as express from 'express';

const app = express();

supertest(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '20')
  .expect(201)
  .end((err, res) => {
    if (err) throw err;
  });

// cookie scenario
const request = supertest(app);
const agent = supertest.agent();
request
  .post('/login')
  .end((err: any, res: supertest.Response) => {
    if (err) throw err;
    agent.saveCookies(res);

    const req = request.get('/admin');
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

    client.get('/admin')
      .expect(200, (err: any, res: supertest.Response) => {
        if (err) throw err;
      });
  });

// functional expect
supertest(app)
  .get('/')
  .expect(hasPreviousAndNextKeys)
  .end((err: any, res: supertest.Response) => {
    if (err) throw err;
  });

function hasPreviousAndNextKeys(res: supertest.Response) {
  if (!('next' in res.body)) return "missing next key";
  if (!('prev' in res.body)) throw new Error("missing prev key");
}

// object expect
supertest(app)
  .get('/')
  .expect(200, { foo: 'bar' })
  .end((err: any, res: supertest.Response) => {
    if (err) throw err;
  });
