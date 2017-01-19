import http = require('http')
import onHeaders = require('on-headers')

http.createServer(onRequest)
    .listen(3000);

function onRequest(req: http.IncomingMessage, res: http.ServerResponse) {
    onHeaders(res, addPoweredBy);
    res.setHeader('Content-Type', 'text/plain')
    res.end('hello!');
}

function addPoweredBy(): void {
    // set if not set by end of request
    if (!this.getHeader('X-Powered-By')) {
        this.setHeader('X-Powered-By', 'Node.js');
    }
}
