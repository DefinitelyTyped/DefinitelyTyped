// https://github.com/hapijs/hapi/blob/master/API.md#-await-serverstart
import {Server} from "hapi";

const server = new Server({
    port: 8000,
});
server.start();

server.events.on('start', () => {
    console.log('Server started at: ' + server.info.uri);
});
