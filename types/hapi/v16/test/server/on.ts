
// From https://hapijs.com/api/16.1.1#serveroncriteria-listener
// From https://hapijs.com/api/16.1.1#server-events

import * as Hapi from 'hapi';

const server = new Hapi.Server();
server.connection({ port: 80 });

server.event('test');
server.on('test', (update: Update) => console.log(update));
type Update = string;
var toSend: Update = 'hello';
server.emit('test', toSend);

server.on('log', (event, tags) => {

    if (tags.error) {
        console.log('Server error: ' + (event.data || 'unspecified'));
    }
});

server.on('request', (request, event, tags) => {

    if (tags.received) {
        console.log('New request: ' + request.id);
    }
});

server.on('request-error', (request, err) => {

    console.log('Error response (500) sent for request: ' + request.id + ' because: ' + err.message);
});

server.on('response', (request) => {

    console.log('Response sent for request: ' + request.id);
});

server.on('route', (route, connection, server) => {

    console.log('New route added: ' + route.path);
});
