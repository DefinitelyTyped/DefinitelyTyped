
// From https://hapijs.com/api/16.1.1#serverauthapi

import * as Hapi from '../../';
import * as Boom from '../../../../boom';
const server = new Hapi.Server();
server.connection({ port: 80 });

var scheme: Hapi.ServerAuthScheme = function (server, options) {

    return {
        api: {
            settings: {
                x: 5
            }
        },
        authenticate: function (request, reply) {

            const req = request.raw.req;
            const authorization = req.headers.authorization;
            if (!authorization) {
                return reply(Boom.unauthorized(null, 'Custom'));
            }

            return reply.continue({ credentials: { user: 'john' } });
        }
    };
};

server.auth.scheme('custom', scheme);
server.auth.strategy('default', 'custom');

console.log(server.auth.api.default.settings.x);    // 5

// Default

server.auth.default('default');

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {

        return reply(request.auth.credentials.user);
    }
});

// scheme

scheme = function (server, options) {

    return {
        authenticate: function (request, reply) {

            const req = request.raw.req;
            const authorization = req.headers.authorization;
            if (!authorization) {
                return reply(Boom.unauthorized(null, 'Custom'));
            }

            return reply.continue({ credentials: { user: 'john' } });
        }
    };
};

server.auth.scheme('custom', scheme);

// strategy

server.auth.scheme('custom', scheme);
server.auth.strategy('default', 'custom');

server.route({
    method: 'GET',
    path: '/',
    config: {
        auth: 'default',
        handler: function (request, reply) {

            return reply(request.auth.credentials.user);
        }
    }
});

// test

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {

        request.server.auth.test('default', request, (err, credentials) => {

            if (err) {
                return reply({ status: false });
            }

            return reply({ status: true, user: (credentials as any).name });
        });
    }
});
