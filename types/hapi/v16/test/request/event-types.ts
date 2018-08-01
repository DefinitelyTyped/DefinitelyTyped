
// From https://hapijs.com/api/16.1.1#requestsetmethodmethod

import * as Hapi from '../../';
const Crypto = require('crypto');
const server = new Hapi.Server();
server.connection({ port: 80 });

const onRequest: Hapi.ServerExtRequestHandler = function (request, reply) {

    const hash = Crypto.createHash('sha1');
    request.on('peek', (chunk) => {

        hash.update(chunk);
    });

    request.once('finish', () => {

        console.log(hash.digest('hex'));
    });

    request.once('disconnect', () => {

        console.error('request aborted');
    });

    return reply.continue();
};

server.ext('onRequest', onRequest);
