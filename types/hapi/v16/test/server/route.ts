
// From https://hapijs.com/api/16.1.1#serverrouteoptions

import * as Hapi from 'hapi';
const server = new Hapi.Server();
server.connection({ port: 80 });

server.route({ method: 'GET', path: '/', handler: function (request, reply) { return reply('ok'); } });
server.route([
    { method: 'GET', path: '/1', handler: function (request, reply) { return reply('ok'); } },
    { method: 'GET', path: '/2', handler: function (request, reply) { return reply('ok'); } }
]);
