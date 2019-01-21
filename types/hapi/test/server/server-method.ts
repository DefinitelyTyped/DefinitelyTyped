// https://github.com/hapijs/hapi/blob/master/API.md#-servermethodmethods
import { Server, ServerMethodConfigurationObject } from "hapi";

const server = new Server({
    port: 8000,
});
server.start();

const add = (a: any, b: any): number => {
    return a + b;
};

const methodObject: ServerMethodConfigurationObject = {
    name: 'sum',
    method: add,
    options: {
        cache: {
            expiresIn: 2000,
            generateTimeout: 100
        },
        generateKey: (a: string | undefined) => a === undefined ? null : a
    }
};

server.method(methodObject);
