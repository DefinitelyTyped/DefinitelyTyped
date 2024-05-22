import userAgent = require("express-ua-middleware");
import express = require("express");

const server = express();

const uaHandler = userAgent();
server.use((req, res, next) => uaHandler(req, res, next));
server.get("/", (req, res) => {
    req.userAgent; // $ExpectType UserAgent & UserAgentRaw
});
server.get("/", (req, res) => {
    req.userAgentFromString(req.headers["user-agent"]!); // $ExpectType UserAgent
});

server.listen;
