// https://github.com/hapijs/hapi/blob/master/API.md#-serverauthdefaultoptions
//      https://github.com/hapijs/hapi/blob/master/API.md#-serverauthschemename-scheme
import { Request, ResponseToolkit, Server, ServerAuthScheme, ServerAuthSchemeOptions } from "@hapi/hapi";
import * as Boom from "@hapi/boom";

declare module '@hapi/hapi' {
    interface UserCredentials {
        a: number;
    }
}

const server = new Server({
    port: 8000,
});

const scheme: ServerAuthScheme = (server, options) => {
    return {
        authenticate(request, h) {
            const req = request.raw.req;
            const authorization = req.headers.authorization;
            if (!authorization) {
                throw Boom.unauthorized(null, 'Custom');
            }
            return h.authenticated({ credentials: { user: { a: 1 }, scope: ['test'] } });
        }
    };
};

server.auth.scheme('custom', scheme);
server.auth.strategy('default', 'custom');
server.auth.default('default');

server.route({
    method: 'GET',
    path: '/',
    handler(request, h) {
        return request.auth.credentials.user || 'not authed';
    }
});

server.start();
