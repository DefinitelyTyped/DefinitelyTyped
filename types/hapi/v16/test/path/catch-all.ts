
// From https://hapijs.com/api/16.1.1#catch-all-route

import * as Hapi from '../../';
const server = new Hapi.Server();
server.connection({ port: 80 });

server.route({
    method: '*',
    path: '/{p*}',
    handler: function (request, reply) {

        return reply('The page was not found').code(404);
    }
});
