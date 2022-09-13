// https://github.com/hapijs/hapi/blob/master/API.md#-servertablehost
import { Request, ResponseToolkit, Server, ServerOptions } from "hapi";

const options: ServerOptions = {
    port: 8000,
};

const server = new Server(options);
server.app.key = 'value2';

server.route({
    path: '/',
    method: 'GET',
    handler(request, h) {
        return h.response("Hello World");
    }
});

server.start();
const table = server.table();
console.log(table);
console.log(table[0].method);
console.log(table[0].path);
console.log(table[0].vhost);
console.log(table[0].realm);
console.log(table[0].settings);
console.log(table[0].fingerprint);
console.log(table[0].auth);
console.log('Server started at: ' + server.info.uri);
