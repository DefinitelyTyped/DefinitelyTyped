// From: https://github.com/hapijs/shot#example

// Load modules

import Http = require('http');
import Shot = require('shot');

// Declare internals

const internals: any = {};

internals.main = () => {
    const dispatch = (req: Http.IncomingMessage, res: Http.ServerResponse) => {
        const reply = 'Hello World';
        res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': reply.length });
        res.end(reply);
    };

    const server = Http.createServer(dispatch);

    Shot.inject(dispatch, { method: 'get', url: '/', headers: { test: 'asd', test2: ['a', 'b'] } }, (res) => {
        console.log(res.payload);
    });
};

internals.main();
