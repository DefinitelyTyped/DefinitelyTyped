/// <reference path="urlrouter.d.ts" />

import http = require("http");
import urlrouter = require("urlrouter");

var result = urlrouter((app) => {
	app.get('/', (req, res, next) => {
		res.end('hello urlrouter');
	});
	app.get('/user/:id([0-9]+)', (req, res, next) => {
		res.end('hello user ' + req.params.id);
	});
});

var req: urlrouter.ServerRequest;
var res: urlrouter.ServerResponse;
function next() { }

result(req, res, next);
