/* =================== USAGE ===================
import * as express from "express";
import listEndpoints from "express-list-endpoints";

const app = express();

app.route('/')
  .all(function namedMiddleware(req, res) {
    // Handle request
  })
  .get(function(req, res) {
    // Handle request
  })
  .post(function(req, res) {
    // Handle request
  });

app.route('/about')
  .get(function(req, res) {
    // Handle request
  });

console.log(listEndpoints(app));

// It omits the 'all' verbs.
[{
    path: '/',
    methods: ['GET', 'POST'],
    middlewares: ['namedMiddleware', 'anonymous', 'anonymous']
  },
  {
    path: '/about',
    methods: ['GET'],
    middlewares: ['anonymous']
}]

 =============================================== */

import express = require("express");

declare function listEndpoints(app: express.Express): listEndpoints.Endpoint[];

declare namespace listEndpoints {
    interface Endpoint {
        path: string;
        methods: string[];
        middlewares: string[];
    }
}

export = listEndpoints;
