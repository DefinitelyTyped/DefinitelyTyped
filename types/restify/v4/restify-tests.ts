import * as restify from "restify";
import * as url from "url";

let server = restify.createServer({
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

server = restify.createServer({
    ca: "test",
    certificate: "test",
    key: "test",
    formatters: {},
    log: {},
    name: "test",
    spdy: {},
    version: "",
    responseTimeHeader: "",
    responseTimeFormatter: (durationInMilliseconds: number) => { },
    socketio: false
});

server.pre(restify.pre.sanitizePath());

server.on('someEvent', () => { });

server.use((req: restify.Request, res: restify.Response, next: restify.Next) => { });
server.use([(req: restify.Request, res: restify.Response, next: restify.Next) => { }]);
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
    req.absoluteUri('test') === 'test';

    req.timers.pop() === { name: 'test', time: [0, 1234] };
    req.getLogger('test');

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
    b = req.secure;
    req.time() === 1463518410080;
    req.getUrl() === url.parse('http://test.test.test/test');
    req.getVersion() === 'test';
    req.version() === 'test';
    req.params;

    res.header('test');
    res.header('test', {});
    res.header('test', new Date());

    res.cache();
    res.cache('testst', {});

    res.status(344);

    res.send({ hello: 'world' });
    res.send(201, { hello: 'world' });
    res.send(new restify.BadRequestError('meh'));

    res.json(201, { hello: 'world' });
    res.json({ hello: 'world' });

    res.code === 50;
    res.contentLength === 50;
    res.charSet('test');
    res.contentType === 'test';
    res.headers;
    res.id === 'test';

    res.send('hello ' + req.params.name);
    return next();
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

new restify.BadRequestError();
new restify.UnauthorizedError();
new restify.PaymentRequiredError();
new restify.ForbiddenError();
new restify.NotFoundError();
new restify.MethodNotAllowedError();
new restify.NotAcceptableError();
new restify.ProxyAuthenticationRequiredError();
new restify.RequestTimeoutError();
new restify.ConflictError();
new restify.GoneError();
new restify.LengthRequiredError();
new restify.RequestEntityTooLargeError();
new restify.RequesturiTooLargeError();
new restify.UnsupportedMediaTypeError();
new restify.RequestedRangeNotSatisfiableError();
new restify.ExpectationFailedError();
new restify.ImATeapotError();
new restify.UnprocessableEntityError();
new restify.LockedError();
new restify.FailedDependencyError();
new restify.UnorderedCollectionError();
new restify.UpgradeRequiredError();
new restify.PreconditionRequiredError();
new restify.TooManyRequestsError();
new restify.RequestHeaderFieldsTooLargeError();
new restify.InternalServerError();
new restify.NotImplementedError();
new restify.BadGatewayError();
new restify.ServiceUnavailableError();
new restify.GatewayTimeoutError();
new restify.HttpVersionNotSupportedError();
new restify.VariantAlsoNegotiatesError();
new restify.InsufficientStorageError();
new restify.BandwidthLimitExceededError();
new restify.NotExtendedError();
new restify.NetworkAuthenticationRequiredError();
new restify.RestError();

new restify.BadRequestError(new Error(), 'foo');
new restify.UnauthorizedError(new Error(), 'foo');
new restify.PaymentRequiredError(new Error(), 'foo');
new restify.ForbiddenError(new Error(), 'foo');
new restify.NotFoundError(new Error(), 'foo');
new restify.MethodNotAllowedError(new Error(), 'foo');
new restify.NotAcceptableError(new Error(), 'foo');
new restify.ProxyAuthenticationRequiredError(new Error(), 'foo');
new restify.RequestTimeoutError(new Error(), 'foo');
new restify.ConflictError(new Error(), 'foo');
new restify.GoneError(new Error(), 'foo');
new restify.LengthRequiredError(new Error(), 'foo');
new restify.RequestEntityTooLargeError(new Error(), 'foo');
new restify.RequesturiTooLargeError(new Error(), 'foo');
new restify.UnsupportedMediaTypeError(new Error(), 'foo');
new restify.RequestedRangeNotSatisfiableError(new Error(), 'foo');
new restify.ExpectationFailedError(new Error(), 'foo');
new restify.ImATeapotError(new Error(), 'foo');
new restify.UnprocessableEntityError(new Error(), 'foo');
new restify.LockedError(new Error(), 'foo');
new restify.FailedDependencyError(new Error(), 'foo');
new restify.UnorderedCollectionError(new Error(), 'foo');
new restify.UpgradeRequiredError(new Error(), 'foo');
new restify.PreconditionRequiredError(new Error(), 'foo');
new restify.TooManyRequestsError(new Error(), 'foo');
new restify.RequestHeaderFieldsTooLargeError(new Error(), 'foo');
new restify.InternalServerError(new Error(), 'foo');
new restify.NotImplementedError(new Error(), 'foo');
new restify.BadGatewayError(new Error(), 'foo');
new restify.ServiceUnavailableError(new Error(), 'foo');
new restify.GatewayTimeoutError(new Error(), 'foo');
new restify.HttpVersionNotSupportedError(new Error(), 'foo');
new restify.VariantAlsoNegotiatesError(new Error(), 'foo');
new restify.InsufficientStorageError(new Error(), 'foo');
new restify.BandwidthLimitExceededError(new Error(), 'foo');
new restify.NotExtendedError(new Error(), 'foo');
new restify.NetworkAuthenticationRequiredError(new Error(), 'foo');
new restify.RestError(new Error(), 'foo');

new restify.PreconditionFailedError(new Error(), 'foo');
new restify.BadDigestError(new Error(), 'foo');
new restify.BadMethodError(new Error(), 'foo');
new restify.InternalError(new Error(), 'foo');
new restify.InvalidArgumentError(new Error(), 'foo');
new restify.InvalidContentError(new Error(), 'foo');
new restify.InvalidCredentialsError(new Error(), 'foo');
new restify.InvalidHeaderError(new Error(), 'foo');
new restify.InvalidVersionError(new Error(), 'foo');
new restify.MissingParameterError(new Error(), 'foo');
new restify.NotAuthorizedError(new Error(), 'foo');
new restify.RequestExpiredError(new Error(), 'foo');
new restify.RequestThrottledError(new Error(), 'foo');
new restify.ResourceNotFoundError(new Error(), 'foo');
new restify.WrongAcceptError(new Error(), 'foo');

new restify.PreconditionFailedError();
new restify.BadDigestError();
new restify.BadMethodError();
new restify.InternalError();
new restify.InvalidArgumentError();
new restify.InvalidContentError();
new restify.InvalidCredentialsError();
new restify.InvalidHeaderError();
new restify.InvalidVersionError();
new restify.MissingParameterError();
new restify.NotAuthorizedError();
new restify.RequestExpiredError();
new restify.RequestThrottledError();
new restify.ResourceNotFoundError();
new restify.WrongAcceptError();

server.name = "";
server.version = "";
server.log = {};
server.acceptable = ["test"];
server.url = "";

server.address().port;
server.address().family;
server.address().address;

server.listen("somePath", send);
server.close();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.authorizationParser());
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.jsonp());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());
server.use(restify.CORS({
    origins: ['https://foo.com', 'http://bar.com', 'http://baz.com:8081'],
    credentials: true,
    headers: ['x-foo']
}));
server.use(restify.throttle({
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

server.on('after', restify.auditLogger({
    log: () => { }
}));

server.on('after', (req: restify.Request, res: restify.Response, route: restify.Route, err: any) => {
    route.spec.method === 'GET';
    route.spec.name === 'routeName';
    route.spec.path === '/some/path';
    route.spec.path === /\/some\/path\/.*/;
    route.spec.versions === ['v1'];
    restify.auditLogger({ log: () => { } })(req, res, route, err);
});

(restify as any).defaultResponseHeaders = function(this: restify.Request, data: any) {
    this.header('Server', 'helloworld');
};

(restify as any).defaultResponseHeaders = false;

// RESTIFY Client Tests

let client = restify.createJsonClient({
    url: 'https://api.us-west-1.joyentcloud.com',
    version: '*'
});

client = restify.createStringClient({
    accept: "test",
    connectTimeout: 30,
    dtrace: {},
    gzip: {},
    headers: {},
    log: {},
    retry: {},
    signRequest: () => { },
    url: "",
    userAgent: "",
    version: ""
});

client.head('test', (err: any, req: restify.Request, res: restify.Response) => { });
client.put('path', {}, (err: any, req: restify.Request, res: restify.Response, obj: any) => { });
client.patch('path', {}, (err: any, req: restify.Request, res: restify.Response, obj: any) => { });
client.del('path', (err: any, req: restify.Request, res: restify.Response) => { });

client.post('/foo', { hello: 'world' }, (err: any, req: restify.Request, res: restify.Response, obj: any) => {
    console.log('%d -> %j', res.statusCode, res.headers);
    console.log('%j', obj);
});

client.get('/foo/bar', (err: any, req: restify.Request, res: restify.Response, data: string) => {
    console.log('%s', data);
});

const client2 = restify.createClient({
    url: 'http://127.0.0.1'
});

client2.get('/str/mcavage', (err: any, req: any) => {
    req.on('result', (err: any, res: any) => {
        res.body = '';
        res.setEncoding('utf8');
        res.on('data', (chunk: string) => {
            res.body += chunk;
        });

        res.on('end', () => {
            console.log(res.body);
        });
    });
});

client.basicAuth('test', 'password');
client2.basicAuth('test', 'password');
