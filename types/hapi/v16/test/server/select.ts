
// From https://hapijs.com/api/16.1.1#serverselectlabels

import * as Hapi from '../../';
const server = new Hapi.Server();
server.connection({ port: 80, labels: ['a', 'b'] });
server.connection({ port: 8080, labels: ['a', 'c'] });
server.connection({ port: 8081, labels: ['b', 'c'] });

const a = server.select('a');     // 80, 8080
const ac = a.select('c');         // 8080
