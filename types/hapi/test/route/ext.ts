import { Server } from "hapi";

const server = new Server();

server.route({
    method: 'get',
    path: "/test",
    options: {
        ext: {
            onPreResponse(request, h) {
                return h.continue;
            },
        }
    }
});
