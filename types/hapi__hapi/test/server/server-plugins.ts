// https://github.com/hapijs/hapi/blob/master/API.md#-serverplugins
import { Plugin, Server, ServerRegisterOptions } from "@hapi/hapi";

interface Plugin1 {
    one: 1;
}

interface Plugin2 {
    two: 2;
}

interface Plugin3 {
    three: 3;
}

interface Plugin4 {
    four: 4;
}

declare module '@hapi/hapi' {
    interface PluginProperties {
        example: {
            other: string;
            key: string;
        };
    }
}

const plugin1: Plugin<Plugin1> = {
    name: 'plugin1',
    register: async (server: Server, options: Plugin1) => {
        server.expose('key', 'value');
        server.plugins.example.other = 'other';
        console.log(server.plugins.example.key);      // 'value'
        console.log(server.plugins.example.other);    // 'other'
    },
};

const plugin2: Plugin<Plugin2> = {
    name: 'plugin2',
    register: async (server: Server, options: Plugin2) => {},
    dependencies: {
        plugin1: '*',
    },
    requirements: {
        node: '>=8',
        hapi: '>=1337',
    },
};

const plugin3: Plugin<Plugin3> = {
    name: 'plugin3',
    register: async (server: Server, options: Plugin3) => {},
    dependencies: ['plugin2'],
};

const plugin4: Plugin<Plugin4> = {
    name: 'plugin4',
    register: (server: Server, options: Plugin4) => {},
    dependencies: 'plugin3',
};

const server = new Server({
    port: 8000,
});

server.start();
server.register(plugin1);

server.register({
    plugin: plugin1,
    options: {one: 1}
});

server.register([
    {
        plugin: plugin2,
        options: {two: 2}
    },
    {
        plugin: plugin3,
        options: {three: 3}
    },
    {
        plugin: plugin1,
        options: {one: 1}
    },
    {
        plugin: plugin2,
        options: {two: 2}
    },
    {
        plugin: plugin3,
        options: {three: 3}
    },
    {
        plugin: plugin1,
        options: {one: 1}
    },
    {
        plugin: plugin2,
        options: {two: 2}
    },
    {
        plugin: plugin3,
        options: {three: 3}
    },
    {
        plugin: plugin1,
        options: {one: 1}
    },
    {
        plugin: plugin4,
        options: {four: 4}
    }
]);
