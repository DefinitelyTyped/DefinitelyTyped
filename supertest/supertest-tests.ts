/// <reference path="supertest.d.ts" />
/// <reference path="../express/express.d.ts" />

import supertest = require('supertest')
import express = require('express');

var app = express();

supertest(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '20')
  .expect(201)
  .end((err, res) => {
    if (err) throw err;
  });

// cookie scenario
var request = supertest(app);
var agent = supertest.agent();
request
  .post('/login')
  .end((err, res) => {
    if (err) throw err;
    agent.saveCookies(res);

    var req = request.get('/admin');
    agent.attachCookies(req);
    req.expect(200, (err, res) => {
      if (err) throw err;
    });
  });

// cookie scenario, new version
var client = supertest.agent(app);
client
  .post('/login')
  .end((err, res) => {
    if (err) throw err;

    client.get('/admin')
      .expect(200, (err, res) => {
        if (err) throw err;
      });
  });

// functional expect
supertest(app)
  .get('/')
  .expect(hasPreviousAndNextKeys)
  .end((err, res) => {
    if (err) throw err;
  });

function hasPreviousAndNextKeys(res: supertest.Response) {
  if (!('next' in res.body)) return "missing next key";
  if (!('prev' in res.body)) throw new Error("missing prev key");
}

