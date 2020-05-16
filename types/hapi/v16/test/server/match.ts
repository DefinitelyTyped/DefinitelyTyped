
// From https://hapijs.com/api/16.1.1#servermatchmethod-path-host

import * as Hapi from 'hapi';
const server = new Hapi.Server();
server.connection();
server.route({
    method: 'GET',
    path: '/',
    config: {
        handler: function (request, reply) {

            return reply();
        },
        id: 'root'
    }
});

const route = server.match('get', '/');
