
// From https://hapijs.com/api/16.1.1#path-parameters

import * as Hapi from '../../';
const server = new Hapi.Server();
server.connection({ port: 80 });

const getAlbum: Hapi.RouteHandler = function (request, reply) {

    return reply('You asked for ' +
        (request.params.song ? request.params.song + ' from ' : '') +
        request.params.album);
};

server.route({
    path: '/{album}/{song?}',
    method: 'GET',
    handler: getAlbum
});

// Example 2

const getPerson: Hapi.RouteHandler = function (request, reply) {

    const nameParts = request.params.name.split('/');
    return reply({ first: nameParts[0], last: nameParts[1] });
};

server.route({
    path: '/person/{name*2}',   // Matches '/person/john/doe'
    method: 'GET',
    handler: getPerson
});
