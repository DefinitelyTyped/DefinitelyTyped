import { Server } from "@hapi/hapi";

const server = new Server();

server.route({
    method: 'get',
    path: "/test",
    options: {
        ext: {
            onPreResponse: {
                method(_request, h) {
                    return h.continue;
                },
            },
            onPostHandler: [{
                method(_request, h) {
                    return h.continue;
                },
            }],
        }
    }
});
