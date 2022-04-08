import { Request, Server, RequestAuth } from "@hapi/hapi";
import * as Boom from "@hapi/boom";

const server = new Server({
    port: 8000,
});

server.auth.scheme('custom', () => ({
    authenticate() {
        throw Boom.unauthorized(null, 'hurr');
    },
    async verify(_auth: RequestAuth) {
        throw Boom.unauthorized(null, 'durr');
    }
}));
server.auth.strategy('default', 'custom');

server.route({
    method: 'GET',
    path: '/',
    async handler(request: Request) {
        request.server.auth.verify(request);
    }
});

server.start();
