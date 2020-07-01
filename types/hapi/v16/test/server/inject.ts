
// From https://hapijs.com/api/16.1.1#serverinjectoptions-callback

import * as Hapi from 'hapi';
const server = new Hapi.Server();
server.connection({ port: 80 });

const handler: Hapi.RouteHandler = function (request, reply) {

    return reply('Success!');
};

server.route({ method: 'GET', path: '/', handler: handler });

server.inject('/', (res) => {
    const num: number = res.statusCode;
    const result = res.result as {aField: string};
    console.log(res.result);
});
