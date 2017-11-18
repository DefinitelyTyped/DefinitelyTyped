// From: https://github.com/hapijs/shot#example

// Load modules

import Http = require('http');
import Shot = require('shot');

// Declare internals

const internals: any = {};

internals.main = function () {

    const dispatch = function (req: Http.IncomingMessage, res: Http.ServerResponse) {

        const reply = 'Hello World';
        res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': reply.length });
        res.end(reply);
    };

    const server = Http.createServer(dispatch);

    Shot.inject(dispatch, { method: 'get', url: '/' }, (res) => {

        console.log(res.payload);
    });
};

internals.main();
