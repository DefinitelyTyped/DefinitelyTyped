import { createServer } from "node:http";
import body = require("body");
import form = require("body/form");
import json = require("body/json");
import any = require("body/any");

declare let str: string;
declare let error: Error;
declare let unknown: unknown;

// Text Body
createServer((req, res) => {
  body(req, (err, bodyPayload) => {
    str = bodyPayload;
    error = err;
  });

  body(req, res, (err, bodyPayload) => {
    str = bodyPayload;
    error = err;
  });

  body(req, res, { limit: 10 }, (err, bodyPayload) => {
    str = bodyPayload;
    error = err;
  });

  res.end();
});

// Form Body
createServer((req, res) => {
  form(req, (err, bodyPayload) => {
    str = bodyPayload;
    error = err;
  });

  form(req, res, (err, bodyPayload) => {
    str = bodyPayload;
    error = err;
  });

  form(req, res, { limit: 10, querystring: { parse: (queryString, cb) => { }} }, (err, bodyPayload) => {
    unknown = bodyPayload;
    error = err;
  });

  res.end();
});

// JSON Body
createServer((req, res) => {
  json(req, (err, bodyPayload) => {
    str = bodyPayload;
    error = err;
  });

  json(req, res, (err, bodyPayload) => {
    str = bodyPayload;
    error = err;
  });

  json(req, res, { limit: 10 }, (err, bodyPayload) => {
    unknown = bodyPayload;
    error = err;
  });

  res.end();
});

// Any Body
createServer((req, res) => {
  any(req, (err, bodyPayload) => {
    str = bodyPayload;
    error = err;
  });

  any(req, res, (err, bodyPayload) => {
    str = bodyPayload;
    error = err;
  });

  any(req, res, { limit: 10, querystring: { parse: (queryString, cb) => { }} }, (err, bodyPayload) => {
    unknown = bodyPayload;
    error = err;
  });

  res.end();
});
