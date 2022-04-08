
// From https://hapijs.com/api/16.1.1#serverstartcallback

import * as Hapi from 'hapi';
import * as Hoek from 'hapi../../hoek';
const server = new Hapi.Server();
server.connection({ port: 80 });

server.start((err) => {

    Hoek.assert(!err, err!);
    console.log('Server started at: ' + server.info!.uri);
});
