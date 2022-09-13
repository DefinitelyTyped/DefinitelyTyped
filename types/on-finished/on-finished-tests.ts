import onFinished = require('on-finished');
import { createServer, ServerResponse } from 'http';

createServer((req, res) => {
    onFinished(req, (err, req) => {
        err; // $ExpectType Error | null
        req; // $ExpectType IncomingMessage
    });

    onFinished(res, (err, res) => {
        err; // $ExpectType Error | null
        const reponse: ServerResponse = res;
    });

    // $ExpectType boolean
    onFinished.isFinished(req);
    // $ExpectType boolean
    onFinished.isFinished(res);
});
