// https://github.com/hapijs/hapi/blob/master/API.md#catch-all-route
import { Request, ResponseToolkit, Server, ServerOptions } from "hapi";

const options: ServerOptions = {
    port: 8000,
};
const server = new Server(options);

server.route({ method: '*', path: '/{p*}', handler(request, h) {
    return h.response('The page was not found').code(404);
}});

server.start();
console.log('Server started at: ' + server.info.uri);
