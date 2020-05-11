// https://github.com/hapijs/hapi/blob/master/API.md#-servermatchmethod-path-host
import { RequestRoute, Server } from "@hapi/hapi";

const server = new Server({
    port: 8000,
});

server.route({
    path: '/',
    method: 'GET',
    options: {
        id: 'root',
        handler: () => 'ok'
    }
});

const route: RequestRoute | null = server.match('get', '/');

if (route !== null) {
	console.log(route.path);
}

server.start();
