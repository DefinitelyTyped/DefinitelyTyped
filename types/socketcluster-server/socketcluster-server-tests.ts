// Adapted from README

import http = require('http');
import AuthEngine = require('ag-auth');
import socketClusterServer = require('socketcluster-server');
import { Secret, VerifyOptions, Jwt, SignOptions } from 'jsonwebtoken';

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

// Adapted from API overview

agServer.setMiddleware(agServer.MIDDLEWARE_INBOUND, async middlewareStream => {
    // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
    for await (const action of middlewareStream) {
        switch (action.type) {
            case action.TRANSMIT:
                if (!action.data) {
                    const error = new Error('Transmit action must have a data object');
                    error.name = 'InvalidActionError';
                    action.block(error);
                    continue;
                }
                break;
            case action.INVOKE:
                if (!action.data) {
                    const error = new Error('Invoke action must have a data object');
                    error.name = 'InvalidActionError';
                    action.block(error);
                    continue;
                }
                break;
            case action.PUBLISH_IN:
                {
                    if (action.channel === 'chat' && !action.authTokenExpiredError) {
                        if (typeof action.data === 'string') {
                            action.allow(action.data.replace('bad-word', '***'));
                            continue;
                        }
                    }
                }
                break;
        }

        action.allow();
    }
});

// Various server options

agServer = socketClusterServer.attach(httpServer, {
    wsEngine: require('ws')
});

agServer = socketClusterServer.attach(httpServer, {
    wsEngine: 'ws'
});

agServer = socketClusterServer.attach(httpServer, {
    authEngine: new AuthEngine()
});

class CustomAuthEngine implements socketClusterServer.AGServer.AuthEngineType {
    verifyToken(signedToken: string | null, key: Secret, options?: VerifyOptions): Promise<Jwt> {
        throw new Error('Method not implemented.');
    }

    signToken(token: string | object | Buffer, key: Secret, options?: SignOptions): Promise<string | undefined> {
        throw new Error('Method not implemented.');
    }
}

agServer = socketClusterServer.attach(httpServer, {
    authEngine: new CustomAuthEngine()
});
