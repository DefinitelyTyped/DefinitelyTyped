/// <reference types="node" />
import fresh = require('fresh');
import * as http from 'http';

const reqHeaders = { 'if-none-match': '"foo"' };
const resHeaders = { etag: '"bar"' };
// $ExpectType boolean
fresh(reqHeaders, resHeaders);

const server = http.createServer((req, res) => {
    if (isFresh(req, res)) {
        res.statusCode = 304;
        res.end();
        return;
    }

    res.statusCode = 200;
    res.end('hello, world!');
});

function isFresh(req: http.IncomingMessage, res: http.ServerResponse) {
    return fresh(req.headers, {
        etag: res.getHeader('ETag'),
        'last-modified': res.getHeader('Last-Modified')
    });
}

server.listen(3000);
