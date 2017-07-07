
// From https://hapijs.com/api/16.1.1#serverstatename-options

import * as Hapi from 'hapi';
const server = new Hapi.Server();
server.connection({ port: 80 });

// Set cookie definition

server.state('session', {
    ttl: 24 * 60 * 60 * 1000,     // One day
    isSecure: true,
    path: '/',
    encoding: 'base64json'
});

// Set state in route handler

const handler: Hapi.RouteHandler = function (request, reply) {

    let session = request.state.session;
    if (!session) {
        session = { user: 'joe' };
    }

    session.last = Date.now();

    return reply('Success').state('session', session);
};

// Example 2

server.on('request-internal', (request, event, tags) => {

    if (tags.error && tags.state) {
        console.error(event);
    }
});
