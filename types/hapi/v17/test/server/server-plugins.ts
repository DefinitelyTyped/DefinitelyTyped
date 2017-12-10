// https://github.com/hapijs/hapi/blob/master/API.md#-serverplugins
import {Plugin, Server, ServerRegisterOptions} from "hapi";

const plugin:Plugin = {
    name: 'example',
    register: (server:Server, options:ServerRegisterOptions) => {

        server.expose('key', 'value');
        server.plugins.example.other = 'other';

        console.log(server.plugins.example.key);      // 'value'
        console.log(server.plugins.example.other);    // 'other'
    }
};

const server = new Server({
    port: 8000,
});
server.start();
server.register(plugin);
