// from https://github.com/johnbrett/hapi-auth-bearer-token

import { Server } from 'hapi';
import * as AuthBearer from 'hapi-auth-bearer-token';

const server = new Server({ port: 8080 });

const start = async () => {
    await server.register(AuthBearer);

    server.auth.strategy('simple', 'bearer-access-token', {
        allowQueryToken: true,              // optional, false by default
        validate: (async (request, token, h) => {
            // here is where you validate your token
            // comparing with token from your database for example
            const isValid = token === '1234';

            const credentials = { token };
            const artifacts = { test: 'info' };

            return { isValid, credentials, artifacts };
        }) as AuthBearer.Validate
    });

    server.auth.default('simple');

    server.route({
        method: 'GET',
        path: '/',
        handler: async (request, h) => {
            return { info: 'success!' };
        }
    });

    await server.start();

    return server;
};

start()
    .then((server) => console.log(`Server listening on ${server.info.uri}`))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
