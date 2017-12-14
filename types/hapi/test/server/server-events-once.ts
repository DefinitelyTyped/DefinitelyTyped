// from https://github.com/hapijs/hapi/blob/master/API.md#-servereventsoncecriteria-listener
import {Request, ResponseToolkit, Server, ServerRoute} from "hapi";

const serverRoute: ServerRoute = {
    path: '/',
    method: 'GET',
    handler: (request: Request, h: ResponseToolkit) => {
        return 'oks: ' + request.path;
    }
};

const server = new Server({
    port: 8000,
});
server.route(serverRoute);
server.event('test1');
server.event('test2');
server.events.once('test1', (update: any) => {console.log(update);});
server.events.once('test2', (...args: any[]) => {console.log(args);});
server.events.emit('test1', 'hello-1');
server.events.emit('test2', 'hello-2');       // Ignored

server.start();
console.log('Server started at: ' + server.info.uri);
