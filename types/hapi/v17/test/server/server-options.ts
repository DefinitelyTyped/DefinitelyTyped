// https://github.com/hapijs/hapi/blob/master/API.md#-server-options
import { Plugin, RouteOptions, Server, ServerOptions, ServerRegisterOptions } from "hapi";
import { MimosOptions, MimosOptionsValue } from "mimos";

const mimeOptions: MimosOptions = {
    override: {
        'node/module': {
            source: 'iana',
            compressible: true,
            extensions: ['node', 'modsule', 'npm'],
            type: 'node/module'
        },
        'application/javascript': {
            source: 'iana',
            charset: 'UTF-8',
            compressible: true,
            extensions: ['js', 'javascript'],
            type: 'text/javascript'
        },
        'text/html': {
            predicate: (mime: MimosOptionsValue) => {
                if (1 === 1) {
                    // mime.foo = 'test';
                } else {
                    // mime.foo = 'bar';
                }
                return mime;
            }
        }
    }
};

const plugin: Plugin<any> = {
    name: 'example',
    register: async (server: Server, options: ServerRegisterOptions) => {
        server.expose('key', 'value');
        server.plugins.example.other = 'other';
        console.log(server.plugins.example.key);      // 'value'
        console.log(server.plugins.example.other);    // 'other'
    }
};

const routeOptions: RouteOptions = {
    compression: {
        test: {
            some: 'option'
        }
    },
    files: {
        relativeTo: __dirname
    },
    cors: {
        origin: ['http://test.example.com', 'http://www.example.com', 'http://*.a.com']
    },
};

declare module 'hapi' {
    interface ServerOptionsApp {
        key1?: string;
        key2?: string;
        any_thing?: string;
    }
}

const options: ServerOptions = {
    address: '0.0.0.0',
    app: {
        key1: 'value1',
        key2: 'value2',
        any_thing: 'any_value',
    },
    autoListen: true,
    cache: {
        engine: require('catbox-memory'),
        name: 'test',
        shared: true,
        partition: 'hapi-cache',
        any_thing_1: 'any_thing_1',
        any_thing_2: 'any_thing_2'
    },
    compression: {
        minBytes: 1024
    },
    debug: {
        request: ['implementation']
    },
    host: 'localhost',
    listener: undefined,
    load: { sampleInterval: 0 },
    mime: mimeOptions,
    plugins: plugin,
    port: 8000,
    router: {
        isCaseSensitive: true,
        stripTrailingSlash: false
    },
    routes: routeOptions,
    state: {
        strictHeader: true,
        ignoreErrors: false,
        isSecure: true,
        isHttpOnly: true,
        isSameSite: 'Strict',
        encoding: 'none'
    },
    tls: true
};

const server = new Server(options);
server.start();

server.events.on('start', () => {
    console.log('Server started at: ' + server.info.uri);
});
