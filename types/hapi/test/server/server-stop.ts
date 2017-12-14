// https://github.com/hapijs/hapi/blob/master/API.md#-await-serverstopoptions
import {Server} from "hapi";

const server = new Server({
    port: 8000,
});

server.start();
server.events.on('start', () => {
    console.log('Server started at: ' + server.info.uri);
});
server.events.on('stop', () => {
    console.log('Server stoped.');
});
setTimeout(() => {
    server.stop({ timeout: 10 * 1000 });
}, 5 * 1000);
