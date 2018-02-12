// https://github.com/hapijs/hapi/blob/master/API.md#-serverauthdefaultoptions
//      https://github.com/hapijs/hapi/blob/master/API.md#-serverauthschemename-scheme
import { Request, ResponseToolkit, Server, ServerAuthScheme, ServerAuthSchemeOptions } from "hapi";
import * as Boom from "boom";

const server = new Server({
    port: 8000,
});

const scheme: ServerAuthScheme = (server: Server, options: ServerAuthSchemeOptions) => {
    return {
        authenticate: (request: Request, h: ResponseToolkit) => {
            const req = request.raw.req;
            const authorization = req.headers.authorization;
            if (!authorization) {
                throw Boom.unauthorized(null, 'Custom');
            }
            return h.authenticated({ credentials: { user: 'john' } });
        }
    };
};

server.auth.scheme('custom', scheme);
server.auth.strategy('default', 'custom');
server.auth.default('default');

server.route({
    method: 'GET',
    path: '/',
    handler: (request: Request, h: ResponseToolkit) => {
        return request.auth.credentials.user;
    }
});

server.start();
