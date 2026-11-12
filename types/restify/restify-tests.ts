/// <reference types="node" />
import * as http from "node:http";
import * as restify from "restify";

let server: restify.Server;

server = restify.createServer({
    formatters: {
        "application/foo": function formatFoo(req: restify.Request, res: restify.Response, body: any) {
            if (body instanceof Error) {
                return body.stack;
            }

            if (body) {
                return body.toString("base64");
            }

            return body;
        },
    },
});

server = restify.createServer({});

server.pre(restify.pre.sanitizePath());

server.on("someEvent", () => {});

server.use((req: restify.Request, res: restify.Response, next: restify.Next) => {});
server.use([
    (req: restify.Request, res: restify.Response, next: restify.Next) => {},
    (req: restify.Request, res: restify.Response, next: restify.Next) => {},
]);
server.use(
    (req: restify.Request, res: restify.Response, next: restify.Next) => {},
    (req: restify.Request, res: restify.Response, next: restify.Next) => {},
);

function send(req: restify.Request, res: restify.Response, next: restify.Next) {
    req.header("key", "val");
    req.header("key") === "val";
    req.trailer("key", "val");
    req.trailer("key") === "val";

    req.accepts("test"); // $ExpectType string | undefined
    req.accepts(["test"]); // $ExpectType string | undefined
    req.acceptsEncoding("test"); // $ExpectType string | undefined
    req.acceptsEncoding(["test"]); // $ExpectType string | undefined
    req.is("test"); // $ExpectType number | boolean

    let b: boolean;
    b = req.isChunked();
    b = req.isKeepAlive();
    b = req.isSecure();
    b = req.isUpgradeRequest();
    b = req.isUpload();
    req.userAgent() === "test";
    req.startHandlerTimer("test");
    req.endHandlerTimer("test");
    req.absoluteUri("test");

    const log = req.log;
    log.debug({ params: req.params }, "Hello there %s", "foo");

    req.getContentLength() === 50;
    req.contentLength() === 50;
    req.getContentType() === "test";
    req.contentType() === "test";
    req.getHref() === "test";
    req.href() === "test";
    req.getId() === "test";
    req.id() === "test";
    req.getPath() === "test";
    req.path() === "test";
    req.getQuery() === "test";
    req.query === "test";
    req.time() === 1463518410080;
    req.getUrl(); // $ExpectType URL
    req.id("custom-request-id"); // $ExpectType string
    req.getVersion() === "test";
    req.version() === "test";
    server.router.getRoutes(); // $ExpectType { [routeName: string]: Route; }
    req.getRoute(); // $ExpectType Route
    req.params;
    res.header("test");
    res.header("test", {});
    res.header("test", new Date());

    res.cache(); // $ExpectType Response
    res.cache("testst", { maxAge: 60 });
    res.cache({ maxAge: 60 });

    res.status(344); // $ExpectType number

    res.send({ hello: "world" });
    res.send(201, { hello: "world" });
    res.send(new Error("meh"));

    res.set("header", "value");
    res.set({
        headerName: "value",
    });

    res.json(201, { hello: "world" });
    res.json({ hello: "world" });

    res.charSet("test");

    res.contentType; // $ExpectType string | undefined

    // @ts-expect-error -- only exists on the upgrade stub
    res.code;

    // @ts-expect-error
    res.contentLength;

    // @ts-expect-error
    res.id;

    res.send("hello " + req.params.name);
    res.writeHead(200);
    res.writeHead(200, {
        "Content-Type": "application/json",
    });
    next();
}

server.post("/hello", send); // $ExpectType string
server.put("/hello", send);
server.del("/hello", send);
server.get("/hello", send);
server.head("/hello", send);
server.opts("/hello", send);

// @ts-expect-error -- RegExp paths are rejected by the router at runtime
server.get(/(.*)/, send);

server.get({ name: "named", path: "/named/:id", owner: "me" }, send);
server.rm("named"); // $ExpectType boolean

server.name = "";
server.acceptable = ["test"];
server.server = new http.Server();

server.url; // $ExpectType string
// @ts-expect-error -- computed getter
server.url = "";
// @ts-expect-error -- route versioning removed
server.versions;

const addr = server.address(); // $ExpectType string | AddressInfo | null
if (addr && typeof addr === "object") {
    addr.port;
}

server.listen("somePath", () => {}); // $ExpectType NodeServer
server.close(); // $ExpectType NodeServer

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.authorizationParser());
server.use(restify.plugins.dateParser());
server.use(restify.plugins.queryParser());
server.use(restify.plugins.jsonp());
server.use(restify.plugins.gzipResponse());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.multipartBodyParser());
server.use(
    restify.plugins.serveStaticFiles("somePath", {
        maxAge: 10,
        setHeaders: (res, path, stat) => {
            res.setHeader("header-set-x", "some-header");
        },
    }),
);
restify.plugins.bodyParser(); // $ExpectType RequestHandler[]
server.use(restify.plugins.throttle({
    burst: 100,
    rate: 50,
    ip: true,
    overrides: {
        "192.168.1.1": {
            rate: 0,
            burst: 0,
        },
    },
}));
server.use(restify.plugins.conditionalHandler([{
    contentType: ["text/plain"],
    handler: (req: restify.Request, res: restify.Response, next: restify.Next): void => {
        res.send("OK");
        next();
    },
    version: "0.0.0",
}]));

server.post("/test-files", (req, res, next) => {
    const files = req.files;
    if (files) {
        const testFile = files["test"];
        if (testFile && !Array.isArray(testFile)) {
            console.log(testFile.path);
            console.log(testFile.name);
            console.log(testFile.size);
        }
    }
    next();
});

const logger = restify.logger({ name: "test" });
logger; // $ExpectType Logger

server.on("after", restify.plugins.auditLogger({ event: "after", log: logger }));

server.on("after", (req, res, route, err) => {
    route; // $ExpectType Route | undefined
    if (route) {
        route.path; // $ExpectType string
    }
    restify.plugins.auditLogger({ event: "after", log: logger })(req, res, route, err);
});

(restify as any).defaultResponseHeaders = function(this: restify.Request, data: any) {
    this.header("Server", "helloworld");
};

// @ts-expect-error -- bunyan helpers were removed in favour of pino
restify.bunyan;

server.router.render("a-route-name", {}, {}); // $ExpectType string | null

// server.first()
server.first((req, res) => {
    req; // $ExpectType IncomingMessage
    res; // $ExpectType ServerResponse<IncomingMessage>
    return true;
});
server.first(
    () => false,
    () => undefined,
    () => null,
    () => {},
);
server.first(); // $ExpectType Server
// @ts-expect-error -- any other return value throws at runtime
server.first(() => "nope");
// @ts-expect-error -- first() handlers are synchronous
server.first(async () => true);
// @ts-expect-error -- first() handlers get no `next`
server.first((req: http.IncomingMessage, res: http.ServerResponse, next: restify.Next) => true);

// async handlers
server.get("/async", async (req, res) => {
    req; // $ExpectType Request
    res; // $ExpectType Response
    res.send(await Promise.resolve({ hello: "world" }));
});
server.post("/async-value", async (req, res) => 42); // $ExpectType string
server.use(async (req, res) => {});
server.pre(async (req, res) => {});
const asyncHandler: restify.AsyncHandler = async (req, res) => {
    res.send(204);
};
server.put("/async-typed", asyncHandler);
server.get("/mixed", [asyncHandler, send], async (req, res) => {});

// plugins.metrics()
const metricsListener = restify.plugins.metrics({ server }, (err, metrics, req, res, route) => {
    metrics.statusCode; // $ExpectType number | undefined
    metrics.method; // $ExpectType string
    metrics.totalLatency; // $ExpectType number | null
    metrics.latency; // $ExpectType number | null
    metrics.preLatency; // $ExpectType number | null
    metrics.useLatency; // $ExpectType number | null
    metrics.routeLatency; // $ExpectType number | null
    metrics.path; // $ExpectType string
    metrics.connectionState; // $ExpectType "close" | undefined
    metrics.unfinishedRequests; // $ExpectType number
    metrics.inflightRequests; // $ExpectType number
    // @ts-expect-error -- typo in the restify docs, not the real property
    metrics.unifinishedRequests;
    req; // $ExpectType Request
    res; // $ExpectType Response
    route; // $ExpectType Route | undefined
});
metricsListener; // $ExpectType AfterEventListener
server.on("after", metricsListener);
// @ts-expect-error -- `server` is required
restify.plugins.metrics({}, () => {});

// helpers.compose()
const composed = restify.helpers.compose([send, asyncHandler, [restify.plugins.queryParser()]]);
composed; // $ExpectType (req: Request, res: Response, callback: (err?: any) => void) => void
restify.helpers.compose(send, { onceNext: true, strictNext: true });
server.get("/composed", (req, res, next) => {
    composed(req, res, err => {
        if (err) {
            next(err);
            return;
        }
        next();
    });
});
// @ts-expect-error -- unknown chain option
restify.helpers.compose(send, { bogus: true });
