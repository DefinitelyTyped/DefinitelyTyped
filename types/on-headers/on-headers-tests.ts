import * as http from 'http';
import onHeaders = require('on-headers');

http.createServer((req, res) => {
    onHeaders(res, function addPoweredBy() {
        if (!this.getHeader('X-Powered-By')) {
            this.setHeader('X-Powered-By', 'Node.js');
        }
    });

    res.setHeader('Content-Type', 'text/plain');
    res.end('hello!');
}).listen(3000);
