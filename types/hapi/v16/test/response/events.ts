
// From https://hapijs.com/api/16.1.1#response-events

import * as Hapi from 'hapi';
const Crypto = require('crypto');
const server = new Hapi.Server();
server.connection({ port: 80 });

const preResponse: Hapi.ServerExtRequestHandler = function (request, reply) {

    const response = request.response!;
    if (response.isBoom) {
        return reply();
    }

    const hash = Crypto.createHash('sha1');
    response.on('peek', (chunk) => {

        hash.update(chunk);
    });

    response.once('finish', () => {

        console.log(hash.digest('hex'));
    });

    return reply.continue();
};

server.ext('onPreResponse', preResponse);
