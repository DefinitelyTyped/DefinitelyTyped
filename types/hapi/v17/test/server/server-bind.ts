// https://github.com/hapijs/hapi/blob/master/API.md#-serverbindcontext
import { Lifecycle, Plugin, Request, ResponseToolkit, Server, ServerRegisterOptions } from "hapi";

const server = new Server({
    port: 8000,
});
const handler: Lifecycle.Method = (request, h) => {
    return h.context.message;    // Or h.context.message
};

const plugin: Plugin<any> = {
    name: 'example',
    register: async (server, options) => {
        const bind = {
            message: 'hello'
        };
        server.bind(bind);
        server.route({ method: 'GET', path: '/', handler });
    }
};

server.start();
server.register(plugin);

server.events.on('start', () => {
    console.log('Server started at: ' + server.info.uri);
});
