
// From https://hapijs.com/api/16.1.1#serverinjectoptions-callback

import * as Hapi from 'hapi';
const server = new Hapi.Server();
server.connection({ port: 80 });

const handler: Hapi.RouteHandler = function (request, reply) {

    return reply('Success!');
};

server.route({ method: 'GET', path: '/', handler: handler });

server.inject('/', (res) => {

    console.log(res.result);
});
