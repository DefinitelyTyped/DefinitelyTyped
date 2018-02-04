// https://github.com/hapijs/hapi/blob/master/API.md#-serverpathrelativeto
import { Plugin, Server, ServerRegisterOptions, ServerRoute } from "hapi";

const server = new Server({
    port: 8000,
});

const serverRouteOption: ServerRoute = {
    path: '/file',
    method: 'GET',
    handler: {
        file: './test.html'
    }
};

const plugin: Plugin = {
    name: 'example',
    register: async (server: Server, options: ServerRegisterOptions) => {
        // Assuming the Inert plugin was registered previously
        server.path(__dirname + '../static');
        server.route(serverRouteOption);
    }
};

server.start();
server.register(plugin);

server.events.on('start', () => {
    console.log('Server started at: ' + server.info.uri);
});
