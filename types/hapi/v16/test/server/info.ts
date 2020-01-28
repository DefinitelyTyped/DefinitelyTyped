// From https://hapijs.com/api/16.1.1#serverinfo

import * as Hapi from 'hapi';

// Declaring shims removes assert dependency. These tests are never executed, only typechecked, so this is fine.
declare function assert(value: boolean): void;

const server = new Hapi.Server();
var options: Hapi.ServerConnectionOptions = { port: 80 };
server.connection(options);

if(server.info) assert(server.info.port === 80);

options = { port: 8080 };
server.connection(options);

assert(server.info === null);
assert(server.connections[1].info.port === 8080);
