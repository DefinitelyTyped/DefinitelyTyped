import request = require('promisify-supertest');
import express = require('express');

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
