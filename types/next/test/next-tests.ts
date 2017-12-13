import createServer = require("next");
import * as http from "http";
import * as url from "url";

const defaultServer: createServer.Server = createServer();
const server = createServer({
    dir: "..",
    quiet: true,
    conf: {
        distDir: "./dist",
        useFileSystemPublicRoutes: false,
        anotherProperty: {
            key: true,
        },
    },
});

const voidFunc = () => {};
const stringFunc = (x: string) => x.split("\n");

server.prepare().then(voidFunc);
server.close().then(voidFunc);
server.defineRoutes().then(voidFunc);
server.start().then(voidFunc);

const parsedUrl = url.parse("https://www.example.com");
const handler = server.getRequestHandler();

function handle(req: http.IncomingMessage, res: http.ServerResponse) {
    handler(req, res);
    handler(req, res, parsedUrl).then(voidFunc);
    server.run(req, res, parsedUrl).then(voidFunc);

    server.render(req, res, "/path/to/resource").then(voidFunc);
    server.render(req, res, "/path/to/resource", {}, parsedUrl).then(voidFunc);
    server
        .render(req, res, "/path/to/resource", { key: "value" }, parsedUrl)
        .then(voidFunc);
    server
        .renderError(new Error(), req, res, "/path/to/resource")
        .then(voidFunc);
    server
        .renderError(new Error(), req, res, "/path/to/resource", {
            key: "value",
        })
        .then(voidFunc);
    server
        .renderError(
            "this can be an error, too!",
            req,
            res,
            "/path/to/resource",
            { key: "value" },
        )
        .then(voidFunc);
    server.render404(req, res, parsedUrl).then(voidFunc);

    server
        .renderToHTML(req, res, "/path/to/resource", { foo: "bar" })
        .then(x => x.split("\n"));
    server
        .renderErrorToHTML(new Error(), req, res, "/path/to/resource", {
            foo: "bar",
        })
        .then(x => x.split("\n"));

    server.serveStatic(req, res, "/path/to/thing").then(voidFunc);

    let b: boolean;
    b = server.isServeableUrl("/path/to/thing");
    b = server.isInternalUrl(req);
    b = server.handleBuildId("{buildId}", res);

    const s: string = server.readBuildId();
    server.getCompilationError("page", req, res).then(err => err.thisIsAnAny);
    server.handleBuildHash("filename", "hash", res);
    server.send404(res);
}
