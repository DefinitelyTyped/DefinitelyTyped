import { Lifecycle, Server } from "@hapi/hapi";
import * as inert from "@hapi/inert";
import * as path from "path";

const server = new Server({
    port: 3000,
    routes: {
        files: {
            relativeTo: path.join(__dirname, "public"),
        },
    },
});

const provision = async () => {
    await server.register(inert);

    server.route({
        method: "GET",
        path: "/{param*}",
        handler: {
            directory: {
                path: ".",
                redirectToSlash: true,
                index: true,
            },
        },
    });

    server.route({
        method: "GET",
        path: "/{param*}",
        handler(request, h) {
            return h.file("awesome.png", {
                confine: "./images",
            });
        },
    });

    // https://github.com/hapijs/inert#serving-a-single-file
    server.route({
        method: "GET",
        path: "/{path*}",
        handler: {
            file: "page.html",
        },
    });

    // https://github.com/hapijs/inert#customized-file-response
    server.route({
        method: "GET",
        path: "/file",
        handler(request, reply) {
            let path = "plain.txt";
            if (request.headers["x-magic"] === "sekret") {
                path = "awesome.png";
            }

            return reply.file(path).vary("x-magic");
        },
    });

    const handler: Lifecycle.Method = (request, h) => {
        const response = request.response;
        if (response instanceof Error && response.output.statusCode === 404) {
            return h.file("404.html").code(404);
        }

        return h.continue;
    };

    server.ext("onPostHandler", handler);

    const file: inert.FileHandlerRouteObject = {
        path: "",
        confine: true,
    };

    const directory: inert.DirectoryHandlerRouteObject = {
        path: "",
        listing: true,
    };

    server.route({
        path: "",
        method: "GET",
        handler: {
            file,
            directory: {
                path() {
                    if (Math.random() > 0.5) {
                        return "";
                    } else if (Math.random() > 0) {
                        return [""];
                    }
                    return new Error("");
                },
            },
        },
        options: { files: { relativeTo: __dirname } },
    });
};
