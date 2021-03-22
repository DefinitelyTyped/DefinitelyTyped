// https://github.com/hapijs/hapi/blob/master/API.md#-serverplugins
import { Plugin, Server, ServerRegisterOptions } from "hapi";

declare module 'hapi' {
    interface PluginProperties {
        example1: {
            util(): void;
        };
        example2: {
            util(): void;
        };
    }
}

const plugin1: Plugin<any> = {
    name: 'example1',
    async register(server: Server, options: ServerRegisterOptions) {
        server.expose('util', () => console.log('something'));
    }
};

const plugin2: Plugin<any> = {
    name: 'example2',
    async register(server: Server, options: ServerRegisterOptions) {
        server.expose('util', () => console.log('something'));
    }
};

const server = new Server({
    port: 8000,
});

server.start();
server.register(plugin1);
server.register(plugin2);

server.plugins.example1.util();
server.plugins.example2.util();
