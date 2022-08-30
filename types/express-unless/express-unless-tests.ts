import express = require("express");
import unless = require("express-unless");

var app = express();

var middleware: unless.RequestHandler = function(req, res, next) {
    next();
};
middleware.unless = unless;
app.use(middleware.unless({ method: "OPTIONS" }));
app.use(middleware.unless(req => req.path === "test"));

app.use(middleware.unless({ path: "/index", useOriginalUrl: true }));
app.use(middleware.unless({ path: /home/g, ext: ".jpg" }));
app.use(middleware.unless({ path: { url: "/index" }, ext: [ ".html", ".htm" ] }));
app.use(middleware.unless({ path: { url: "/index", methods: [ "GET", "POST" ] } }));
app.use(middleware.unless({ path: [ "/index", "/home", /home/i, { url: "/main", methods: [ "GET" ] }, { url: /home/i } ] }));
app.use(middleware.unless({ path: [ "/index", "/home", /home/i, { url: "/main", method: "GET" }, { url: /home/i } ] }));
app.use(middleware.unless({ path: [ "/index", "/home", /home/i, { url: "/main", method: [ "GET" ] }, { url: /home/i } ] }));

app.use(unless(middleware, { method: "OPTIONS" }));
