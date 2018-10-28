// from https://github.com/hapijs/hapi/blob/master/API.md#-servereventsoncecriteria-listener
import { Request, ResponseToolkit, Server, ServerRoute } from "hapi";

const serverRoute: ServerRoute = {
    path: '/',
    method: 'GET',
    handler(request, h) {
        return 'oks: ' + request.path;
    }
};

declare module 'hapi' {
    interface ServerEvents {
        once(event: 'test1', listener: (update: string) => void): this;
        once(event: 'test2', listener: (...updates: string[]) => void): this;
    }
}

const server = new Server({
    port: 8000,
});
server.route(serverRoute);
server.event('test1');
server.event('test2');
server.events.once('test1', update => { console.log(update); });
server.events.once('test2', (...args) => { console.log(args); });
server.events.emit('test1', 'hello-1');
server.events.emit('test2', 'hello-2');       // Ignored

server.start();
console.log('Server started at: ' + server.info.uri);
