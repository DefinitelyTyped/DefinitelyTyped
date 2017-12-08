// from https://github.com/hapijs/hapi/blob/master/API.md#-servereventsoncecriteria-listener
import {Request, ResponseToolkit, Server, ServerOptions, ServerRoute} from "hapi";

const options: ServerOptions = {
    port: 8000,
};

const serverRoute: ServerRoute = {
    path: '/',
    method: 'GET',
    handler: function (request: Request, h: ResponseToolkit) {
        return 'oks: ' + request.path;
    }
};

const server = new Server(options);
server.route(serverRoute);
server.event('test1');
server.event('test2');
server.events.once('test1', function(update: any) {console.log(update);});
server.events.once('test2', function(...args: any[]) {console.log(args);});
server.events.emit('test1', 'hello-1');
server.events.emit('test2', 'hello-2');       // Ignored

server.start();
console.log('Server started at: ' + server.info.uri);
