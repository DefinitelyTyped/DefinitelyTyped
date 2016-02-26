/// <reference path="promisify-supertest.d.ts" />
/// <reference path="../express/express.d.ts" />

import * as request from 'promisify-supertest';
import * as express from 'express';

let app = express();

request(app)
	.get('/')
  .expect(200)
	.end()
	.then(function(res) {
    // blah blah blah
  })
	.catch(function(err) {
    throw err;
  });
