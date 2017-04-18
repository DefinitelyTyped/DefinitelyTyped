'use strict';

import * as Hapi from 'hapi';

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

// TODO check error can be of type string
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info!.uri}`);
});
