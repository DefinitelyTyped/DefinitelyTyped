
// From https://hapijs.com/api/16.1.1#serveroncecriteria-listener

import * as Hapi from '../../';

const server = new Hapi.Server();
server.connection({ port: 80 });

server.event('test');
server.once('test', (update: Update) => console.log(update));
type Update = string;
var toSend: Update = 'hello';
server.emit('test', toSend);
server.emit('test', toSend);       // Ignored
