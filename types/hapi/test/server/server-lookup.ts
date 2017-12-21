// https://github.com/hapijs/hapi/blob/master/API.md#-serverlookupid
import {RequestRoute, Server} from "hapi";

const server = new Server({
    port: 8000,
});

server.route({
    path: '/',
    method: 'GET',
    config: {
        id: 'root',
        handler: () => 'ok'
    }
});

const route:RequestRoute = server.lookup('root');
console.log(route);

server.start();
