// https://github.com/hapijs/hapi/blob/master/API.md#-serveroptions
import * as Hapi from '@hapi/hapi';

const server = Hapi.server({
    port: 8000,
});

server.route({
    path: '/',
    method: 'GET',
    handler(request, h) {
        return 'Hello World';
    }
});

server.start();

console.log('Server started at: ' + server.info.uri);
