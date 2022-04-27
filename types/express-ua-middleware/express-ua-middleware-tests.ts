import userAgent = require('express-ua-middleware');
import express = require('express');

const server = express();

server.use(userAgent);
server.get('/', (req, res) => {
    req.userAgent; // $ExpectType UserAgent & UserAgentRaw
});
server.get('/', (req, res) => {
    req.userAgentFromString(req.headers['user-agent']!); // $ExpectType UserAgent
});

server.listen;
