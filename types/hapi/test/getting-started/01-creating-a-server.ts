// From https://hapijs.com/tutorials/getting-started#creating-a-server

'use strict';

import Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info!.uri}`);
});
