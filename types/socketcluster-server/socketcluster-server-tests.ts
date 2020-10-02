// Adapted from README

import http = require('http');
import socketClusterServer = require('socketcluster-server');

const httpServer = http.createServer();
let agServer = socketClusterServer.attach(httpServer);

(async () => {
    // Handle new inbound sockets.
    // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
    for await (const { socket } of agServer.listener('connection')) {
        (async () => {
            // Set up a loop to handle and respond to RPCs for a procedure.
            // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
            for await (const req of socket.procedure('customProc')) {
                if (req.data.bad) {
                    const error = new Error('Server failed to execute the procedure');
                    error.name = 'BadCustomError';
                    req.error(error);
                } else {
                    req.end('Success');
                }
            }
        })();

        (async () => {
            // Set up a loop to handle remote transmitted events.
            // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
            for await (const data of socket.receiver('customRemoteEvent')) {
                // $ExpectType any
                data;
            }
        })();
    }
})();

httpServer.listen(8000);

agServer = socketClusterServer.attach(httpServer, {
    protocolVersion: 1,
    path: '/socketcluster/',
});

agServer = socketClusterServer.attach(httpServer, {});
