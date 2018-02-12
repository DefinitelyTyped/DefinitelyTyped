// https://github.com/hapijs/hapi/blob/master/API.md#-requestlogtags-data
import { Lifecycle, Request, ResponseToolkit, Server, ServerOptions, ServerRoute } from "hapi";

const options: ServerOptions = {
    port: 8000,
};

const handlerFn: Lifecycle.Method = (request: Request, h: ResponseToolkit) => {
    request.log(['test', 'error'], 'Test event');
    return 'path: ' + request.path;
};

const serverRoute: ServerRoute = {
    path: '/',
    method: 'GET',
    handler: handlerFn
};

const server = new Server(options);
server.route(serverRoute);
server.start();
console.log('Server started at: ' + server.info.uri);

server.events.on('request', (request: Request, event: any, tags: any) => {
    console.log(tags);
    if (tags.error) {
        console.log(event);
    }
});
