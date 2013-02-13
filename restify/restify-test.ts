/// <reference path="restify.d.ts" />

import restify = module("restify");

var server = restify.createServer({
  formatters: {
    'application/foo': function formatFoo(req, res, body) {
        if (body instanceof Error)
            return body.stack;

        if (body)
            return body.toString('base64');

        return body;
    }
  }
});
