// https://github.com/hapijs/hapi/blob/master/API.md#-servermethodmethods
import { Server, ServerMethodConfigurationObject, ServerMethod } from '@hapi/hapi';

declare module '@hapi/hapi' {
    interface ServerMethods {
        add(a: number, b: number): number;
    }
}

const server = new Server({
    port: 8000,
});
server.start();

const add = (a: number, b: number): number => {
    return a + b;
};

const methodObject: ServerMethodConfigurationObject = {
    name: 'sum',
    method: add,
    options: {
        cache: {
            expiresIn: 2000,
            generateTimeout: 100,
        },
        generateKey: (a: string | undefined) => a === undefined ? null : a,
    },
};

server.method(methodObject);
server.method('log', console.log);

server.methods.add(2, 4);
server.methods.log('foo');
