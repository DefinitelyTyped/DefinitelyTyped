// https://github.com/hapijs/hapi/blob/master/API.md#-serverplugins
import { Plugin, Server, ServerRegisterOptions } from "hapi";

const plugin1: Plugin<any> = {
    name: 'example1',
    register: async (server: Server, options: ServerRegisterOptions) => {
        server.expose('util', () => console.log('something'));
    }
};

const plugin2: Plugin<any> = {
    name: 'example2',
    register: async (server: Server, options: ServerRegisterOptions) => {
        server.expose('util', () => console.log('something'));
    }
};

const server = new Server({
    port: 8000,
});

server.start();
server.register(plugin1);
server.register(plugin2);
