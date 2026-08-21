import { Server } from "@hapi/hapi";
import hapiServerSessionPlugin from "hapi-server-session";

const server = new Server();

server.register({
    plugin: hapiServerSessionPlugin,
    options: {
        algorithm: "md5",
        cache: { segment: "test" },
        cookie: { ttl: null },
        expiresIn: 86400,
        key: "test",
        name: "test",
        size: 32,
        vhost: ["test"],
    },
});

server.route({ path: "/", method: "GET", handler: (request, _h) => request.session });
