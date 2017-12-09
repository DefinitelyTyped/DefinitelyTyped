//  https://github.com/hapijs/hapi/blob/master/API.md#-serverdecoratetype-property-method-options
import {Server} from "hapi";

const server = new Server({
    port: 8000,
});

/*
const serverRoute: ServerRoute = {
    path: '/',
    method: 'GET',
    handler: function (request: Request, h: ResponseToolkit) {
        return h.success();
    }
};
const success = function () {
    return this.response({ status: 'ok' });
};

server.start();
server.decorate('toolkit', 'success', success);
*/
// TODO how to implement it with TS?

console.log(server.decorations.toolkit);            // ['success']
