
// From https://hapijs.com/api/16.1.1#serverinfo

import assert = require('assert');
import * as Hapi from '../../';
const server = new Hapi.Server();
var options: Hapi.ServerConnectionOptions = { port: 80 };
server.connection(options);

if(server.info) assert(server.info.port === 80);

options = { port: 8080 };
server.connection(options);

assert(server.info === null);
assert(server.connections[1].info.port === 8080);
