import * as auth from "@hapi/cookie";
import * as hapi from "@hapi/hapi";

const server = new hapi.Server({
    port: 8000,
    plugins: {
        cookie: {
            redirectTo: false,
        },
    },
});

server.register(auth);

server.state("data", {
    ttl: null,
    isSecure: true,
    isHttpOnly: true,
    encoding: "base64json",
    clearInvalid: true,
    strictHeader: true,
});

const options: auth.Options = {
    cookie: {
        clearInvalid: true,
        name: "session",
        domain: ".typescript.org",
        password: "abcdef",
        isSecure: true,
        ttl: 259200000,
    },
    keepAlive: true,
    redirectTo: "/login",
    appendNext: false,
    validate: async () => {
        return { isValid: true };
    },
};

server.auth.strategy("session", "cookie", options);

server.route({
    method: "get",
    path: "/",
    handler: async (request, h) => {
        request.cookieAuth.set("key", "value");
        request.cookieAuth.set({ user: request.params.user });
        request.cookieAuth.clear();
        request.cookieAuth.clear("key");
        request.cookieAuth.ttl(1000);

        h.state("data", { firstVisit: false });

        return h.response("Hello");
    },
});

server.route({
    method: "get",
    path: "/",
    handler: async (_, h) => {
        return h.response("Hello").state("data", { firstVisit: false });
    },
});

server.route({
    method: "get",
    path: "/",
    handler: async (_, h) => {
        return h.response("Hello").state("data", "test", { encoding: "none" });
    },
});

server.route({
    method: "get",
    path: "/",
    handler: async (_, h) => {
        return h.response("Bye").unstate("data");
    },
});
