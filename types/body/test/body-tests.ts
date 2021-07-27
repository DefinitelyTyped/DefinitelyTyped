import { createServer } from "http";
import textBody = require("body");
import formBody = require("body/form");
import jsonBody = require("body/json");
import anyBody = require("body/any");

declare let str: string;
declare let error: Error;
declare let unknown: unknown;

// Text Body
createServer((req, res) => {
  textBody(req, (err, bodyPayload) => {
    str = bodyPayload;
    error = err;
  });

  textBody(req, res, (err, bodyPayload) => {
    str = bodyPayload;
    error = err;
  });

  textBody(req, res, { limit: 10 }, (err, bodyPayload) => {
    str = bodyPayload;
    error = err;
  });

  res.end();
});

// Form Body
createServer((req, res) => {
  formBody(req, (err, bodyPayload) => {
    unknown = bodyPayload;
    error = err;
  });

  formBody(req, res, (err, bodyPayload) => {
    unknown = bodyPayload;
    error = err;
  });

  formBody(req, res, { limit: 10, querystring: { parse: (queryString, cb) => { }} }, (err, bodyPayload) => {
    unknown = bodyPayload;
    error = err;
  });

  res.end();
});

// JSON Body
createServer((req, res) => {
  jsonBody(req, (err, bodyPayload) => {
    unknown = bodyPayload;
    error = err;
  });

  jsonBody(req, res, (err, bodyPayload) => {
    unknown = bodyPayload;
    error = err;
  });

  jsonBody(req, res, { limit: 10 }, (err, bodyPayload) => {
    unknown = bodyPayload;
    error = err;
  });

  res.end();
});

// Any Body
createServer((req, res) => {
  anyBody(req, (err, bodyPayload) => {
    unknown = bodyPayload;
    error = err;
  });

  anyBody(req, res, (err, bodyPayload) => {
    unknown = bodyPayload;
    error = err;
  });

  anyBody(req, res, { limit: 10, querystring: { parse: (queryString, cb) => { }} }, (err, bodyPayload) => {
    unknown = bodyPayload;
    error = err;
  });

  res.end();
});
