
// From https://hapijs.com/api/16.1.1#servertablehost

import * as Hapi from '../../';
const server = new Hapi.Server();
server.connection({ port: 80, host: 'example.com' });
server.route({ method: 'GET', path: '/example', handler: function (request, reply) { return reply(); } });

const table = server.table();
