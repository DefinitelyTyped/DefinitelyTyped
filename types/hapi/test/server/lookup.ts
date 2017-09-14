
// From https://hapijs.com/api/16.1.1#serverlookupid

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

const route = server.lookup('root');
