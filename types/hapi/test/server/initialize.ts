
// From https://hapijs.com/api/16.1.1#serverinitializecallback

import * as Hapi from 'hapi';
const Hoek = require('hoek');
const server = new Hapi.Server();
server.connection({ port: 80 });

server.initialize((err) => {

    Hoek.assert(!err, err);
});
