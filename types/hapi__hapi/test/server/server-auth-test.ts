// https://github.com/hapijs/hapi/blob/master/API.md#-await-serverauthteststrategy-request
//      https://github.com/hapijs/hapi/blob/master/API.md#-serverauthschemename-scheme
import { Request, ResponseToolkit, Server, ServerAuthScheme, ServerAuthSchemeOptions } from "@hapi/hapi";
import * as Boom from "@hapi/boom";

declare module '@hapi/hapi' {
    interface AuthCredentials {
        name?: string;
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
            return h.authenticated({ credentials: { name: 'john', } });
        }
    };
};

server.auth.scheme('custom', scheme);
server.auth.strategy('default', 'custom');

server.route({
    method: 'GET',
    path: '/',
    handler: async (request: Request, h: ResponseToolkit) => {
        try {
            const { credentials } = await request.server.auth.test('default', request);
            return { status: true, user: credentials.name };
        } catch (err) {
            return { status: false };
        }
    }
});

server.start();
