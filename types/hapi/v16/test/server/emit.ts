
// From https://hapijs.com/api/16.1.1#serveremitcriteria-data-callback

import * as Hapi from 'hapi';
const server = new Hapi.Server();
server.connection({ port: 80 });

server.event('test');
server.on('test', (update: Update) => console.log(update));
type Update = string;
var toSend: Update = 'hello';
server.emit('test', toSend);
