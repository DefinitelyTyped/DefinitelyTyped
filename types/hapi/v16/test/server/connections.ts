
// From https://hapijs.com/api/16.1.1#serverconnections

import * as Hapi from 'hapi';
var server = new Hapi.Server();
server.connection({ port: 80, labels: 'a' });
server.connection({ port: 8080, labels: 'b' });

// server.connections.length === 2

const a = server.select('a');

// a.connections.length === 1
