// from https://hapijs.com/tutorials/cookies?lang=en_US
import { Server, ServerOptions, ServerRoute, ServerStateCookieOptions } from "hapi";

const options: ServerOptions = {
    port: 8000,
};

const serverRoute: ServerRoute = {
    path: '/say-hello',
    method: 'GET',
    handler(_request, h) {
        h.state('test', { test: true });
        return h.response('Hello').state('data', { firstVisit: false });
    }
};

const server = new Server(options);
server.route(serverRoute);

const stateOption: ServerStateCookieOptions = {
    ttl: 24 * 60 * 60 * 1000, // One day
    isSecure: false,
    isHttpOnly: false,
    encoding: 'base64json',
};
server.state('data', stateOption);
server.start();
console.log('Server started at: ' + server.info.uri);
