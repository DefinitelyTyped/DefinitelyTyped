// https://github.com/hapijs/hapi/blob/master/API.md#-servereventevents
import {Server} from "hapi";

const server = new Server({
    port: 8000,
});
server.event('test');
server.events.on('test', (update:any) => console.log(update));
server.events.emit('test', 'hello');

server.start();
