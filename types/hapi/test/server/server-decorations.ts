// https://github.com/hapijs/hapi/blob/master/API.md#-serverdecoratetype-property-method-options
import { ResponseToolkit, Server } from "hapi";

const server = new Server({
    port: 8000,
});

const success = (h: ResponseToolkit) => {
    return h.response({ status: 'ok' });
};

server.start();
server.decorate('toolkit', 'success', success);

console.log(server.decorations.toolkit);
