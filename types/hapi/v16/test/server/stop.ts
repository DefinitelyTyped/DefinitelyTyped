
// From https://hapijs.com/api/16.1.1#serverstopoptions-callback

import * as Hapi from '../../';
const server = new Hapi.Server();
server.connection({ port: 80 });

server.stop({ timeout: 60 * 1000 }, (err) => {

    console.log('Server stopped');
});
