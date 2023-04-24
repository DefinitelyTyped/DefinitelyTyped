import * as restify from "restify";
import * as url from "url";
import * as Logger from "bunyan";
import * as http from "http";
import * as stream from "stream";

let server: restify.Server;

server = restify.createServer({
    formatters: {
        'application/foo': function formatFoo(req: restify.Request, res: restify.Response, body: any) {
            if (body instanceof Error)
                return body.stack;

            if (body)
                return body.toString('base64');

            return body;
        }
    }
});

server = restify.createServer({});

server.pre(restify.pre.sanitizePath());

server.on('someEvent', () => { });

server.use((req: restify.Request, res: restify.Response, next: restify.Next) => { });
server.use([(req: restify.Request, res: restify.Response, next: restify.Next) => { }, (req: restify.Request, res: restify.Response, next: restify.Next) => { }]);
server.use((req: restify.Request, res: restify.Response, next: restify.Next) => { }, (req: restify.Request, res: restify.Response, next: restify.Next) => { });

function send(req: restify.Request, res: restify.Response, next: restify.Next) {
    req.header('key', 'val');
    req.header('key') === 'val';
    req.trailer('key', 'val');
    req.trailer('key') === 'val';

    let b: boolean;
    b = req.accepts('test');
    b = req.accepts(['test']);
    b = req.acceptsEncoding('test');
    b = req.acceptsEncoding(['test']);
    b = req.is('test');
    b = req.isChunked();
    b = req.isKeepAlive();
    b = req.isSecure();
    b = req.isUpgradeRequest();
    b = req.isUpload();
    req.userAgent() === 'test';
    req.startHandlerTimer('test');
    req.endHandlerTimer('test');
    req.absoluteUri('test');

    const log = req.log;
    log.debug({ params: req.params }, 'Hello there %s', 'foo');

    req.getContentLength() === 50;
    req.contentLength() === 50;
    req.getContentType() === 'test';
    req.contentType() === 'test';
    req.getHref() === 'test';
    req.href() === 'test';
    req.getId() === 'test';
    req.id() === 'test';
    req.getPath() === 'test';
    req.path() === 'test';
    req.getQuery() === 'test';
    req.query === 'test';
    req.time() === 1463518410080;
    req.getUrl() === url.parse('https://test.test.test/test');
    req.getVersion() === 'test';
    req.version() === 'test';
    // @ExpectedType restify.Route[]
    server.router.getRoutes();
    // @ExpectedType restify.Route
    req.getRoute();
    req.params;
    res.header('test');
    res.header('test', {});
    res.header('test', new Date());

    res.cache();
    res.cache('testst', { maxAge: 60 });
    res.cache({ maxAge: 60 });

    res.status(344);

    res.send({ hello: 'world' });
    res.send(201, { hello: 'world' });
    res.send(new Error('meh'));

    res.set('header', 'value');
    res.set({
        headerName: 'value'
    });

    res.json(201, { hello: 'world' });
    res.json({ hello: 'world' });

    res.code === 50;
    res.contentLength === 50;
    res.charSet('test');
    res.contentType === 'test';
    res.headers;
    res.id === 'test';

    res.send('hello ' + req.params.name);
    res.writeHead(200);
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    next();
}

server.post('/hello', send);
server.put('/hello', send);
server.del('/hello', send);
server.get('/hello', send);
server.head('/hello', send);
server.opts('/hello', send);

server.post(/(.*)/, send);
server.put(/(.*)/, send);
server.del(/(.*)/, send);
server.get(/(.*)/, send);
server.head(/(.*)/, send);
server.opts(/(.*)/, send);

server.name = "";
server.versions = [""];
server.acceptable = ["test"];
server.url = "";
server.server = new http.Server();

server.address().port;
server.address().family;
server.address().address;

server.listen("somePath", send);
server.close();

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.authorizationParser());
server.use(restify.plugins.dateParser());
server.use(restify.plugins.queryParser());
server.use(restify.plugins.jsonp());
server.use(restify.plugins.gzipResponse());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.multipartBodyParser());
server.use(
  restify.plugins.serveStaticFiles('somePath', {
    etag: '1',
    maxAge: 10,
    setHeaders: (res: restify.Response, path: string, stat: object) => {
      res.setHeader('header-set-x', 'some-header');
    },
  }),
);
server.use(restify.plugins.throttle({
    burst: 100,
    rate: 50,
    ip: true,
    overrides: {
        '192.168.1.1': {
            rate: 0,
            burst: 0
        }
    }
}));
server.use(restify.plugins.conditionalHandler([{
    contentType: ['text/plain'],
    handler: (req: restify.Request, res: restify.Response, next: restify.Next): void => {
        res.send('OK');
        next();
    },
    version: '0.0.0',
}]));

server.post("/test-files", (req, res, next) => {
    const files = req.files;
    if (files) {
        const testFile = files["test"];
        if (testFile) {
            console.log(testFile.path);
            console.log(testFile.name);
            console.log(testFile.size);
        }
    }
    next();
});

const logger = Logger.createLogger({ name: "test" });

server.on('after', restify.plugins.auditLogger({ event: 'after', log: logger }));

server.on('after', (req: restify.Request, res: restify.Response, route: restify.Route, err: any) => {
    route.method === 'GET';
    route.name === 'routeName';
    route.path; // string | $ExpectType RegExp
    restify.plugins.auditLogger({ event: 'after', log: logger })(req, res, route, err);
});

(restify as any).defaultResponseHeaders = function(this: restify.Request, data: any) {
    this.header('Server', 'helloworld');
};

const loggerStream: Logger.Stream = {};

const requestCaptureOptions: restify.bunyan.RequestCaptureOptions = {};
requestCaptureOptions.stream = loggerStream;
requestCaptureOptions.streams = Object.freeze([loggerStream, loggerStream]);
requestCaptureOptions.level = Logger.DEBUG;
requestCaptureOptions.level = "info";
requestCaptureOptions.maxRecords = 50;
requestCaptureOptions.maxRequestIds = 500;
requestCaptureOptions.dumpDefault = true;

const requestCaptureStream = new restify.bunyan.RequestCaptureStream(requestCaptureOptions);
requestCaptureStream.write(loggerStream);
requestCaptureStream.toString();
const asStream: stream.Stream = requestCaptureStream;

const logger2: Logger = restify.bunyan.createLogger("horse");

server.router.render("a-route-name", {});
server.router.render("a-route-name", {}, {});
