// https://github.com/hapijs/hapi/blob/master/API.md#-serverextevent-method-options
import { Request, ResponseToolkit, Server, ServerOptions, ServerRoute } from "hapi";

const options: ServerOptions = {
    port: 8000,
};

const serverRoute: ServerRoute = {
    path: '/test',
    method: 'GET',
    handler(request, h) {
        return 'ok: ' + request.path;
    }
};

const server = new Server(options);
server.route(serverRoute);

server.ext("onRequest", (request, h) => {
    request.setUrl('/test');
    return h.continue;
});

server.start();
console.log('Server started at: ' + server.info.uri);
