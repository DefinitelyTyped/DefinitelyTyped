
// From https://hapijs.com/api/16.1.1#requestsetmethodmethod

import * as Hapi from 'hapi';
const server = new Hapi.Server();
server.connection({ port: 80 });

const get: Hapi.RouteHandler = function (request, reply) {

    const dbTail = request.tail('write to database');

    var db: any;
    db.save('key', 'value', () => {

        dbTail();
    });

    return reply('Success!');
};

server.route({ method: 'GET', path: '/', handler: get });

server.on('tail', (request) => {

    console.log('Request completed including db activity');
});
