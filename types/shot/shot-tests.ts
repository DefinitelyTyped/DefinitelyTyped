// From: https://github.com/hapijs/shot#example

// Load modules

import { IncomingMessage, ServerResponse, createServer } from 'http';
import { inject } from 'shot';

// Declare internals

async function main() {
    const dispatch = (req: IncomingMessage, res: ServerResponse) => {
        const reply = 'Hello World';
        res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': reply.length });
        res.end(reply);
    };

    const server = createServer(dispatch);

    console.log((await inject(dispatch, { method: 'get', url: '/', headers: { test: 'asd', test2: ['a', 'b'] } })).payload);
}
