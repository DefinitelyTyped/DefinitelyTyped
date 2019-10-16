import * as hapi from '@hapi/hapi';
import * as crumb from '@hapi/crumb';

const server = new hapi.Server({ port: 8000 });

server.register({
    plugin: crumb,
    options: {
        key: 'csrf-token',
        size: 50,
        autoGenerate: true,
        addToViewContext: true,
        cookieOptions: {
            path: '/',
        },
        headerName: 'X-CSRF-Token',
        restful: true,
        skip: () => false,
        enforce: true,
        logUnauthorized: false,
    }
});

server.route({
    method: 'get',
    path: '/',
    handler: async (_, h) => {
        return h.continue;
    },
});

server.route({
    method: 'get',
    path: '/custom',
    options: {
        plugins: {
            crumb: {
                key: 'x-csrf-token',
                source: 'query',
                restful: true,
            },
        },
    },
    handler: async (_, h) => {
        return h.continue;
    },
});
