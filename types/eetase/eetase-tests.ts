// Adapted from the README

import eetase = require('eetase');
import http = require('http');

// The Node.js HTTP server is an EventEmitter.
// Normally works using server.on('request', handler);
const server = http.createServer();

// Mutates the server instance but doesn't touch
// the instance's prototype.
// Note: eetase actually directly modifies the input object,
// so we could ignore the return value. However, Typescript
// doesn't allow us to model that.
const eeServer = eetase(server);

// The Node.js HTTP server now works as an
// AsyncStreamEmitter
(async () => {
    // Use array destructuring to get the req object.
    // This is needed because emitter.emit(eventName, ...)
    // can have multiple arguments.
    // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
    for await (const [req] of eeServer.listener('request')) {
        // $ExpectType any
        req;
    }
})();
