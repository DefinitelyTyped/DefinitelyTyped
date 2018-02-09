// https://github.com/hapijs/hapi/blob/master/API.md#-serverbindcontext
import { Plugin, Request, ResponseToolkit, Server, ServerRegisterOptions } from "hapi";

const server = new Server({
    port: 8000,
});
const handler = (request: Request, h: ResponseToolkit) => {
    return h.context.message;    // Or h.context.message
};

const plugin: Plugin<any> = {
    name: 'example',
    register: async (server: Server, options: ServerRegisterOptions) => {
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
