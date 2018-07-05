
// From https://hapijs.com/api/16.1.1#requestlogtags-data-timestamp

import * as Hapi from '../../';
const server = new Hapi.Server();
server.connection({ port: 80, routes: { log: true, security: false } });

server.on('request', (request, event, tags) => {

    if (tags.error) {
        console.log(event);
    }
});

const handler: Hapi.RouteHandler = function (request, reply) {

    request.log(['test', 'error'], 'Test event');
    return reply();
};
