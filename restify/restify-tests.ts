/// <reference path="restify.d.ts" />

import restify = require("restify");
import bunyan = require("bunyan");

var server = restify.createServer({
  formatters: {
    'application/foo': function formatFoo(req, res, body) {
        if (body instanceof Error)
            return body.stack;

        if (body)
            return body.toString('base64');

        return body;
    }
  }
});

server = restify.createServer({
    certificate: "test",
    key: "test",
    formatters: {},
    log: bunyan.createLogger({ name: 'test' }),
    name: "test",
    spdy: {},
    version: "",
    responseTimeHeader: "",
    responseTimeFormatter : (durationInMilliseconds: number) => {}
});

server.pre(restify.pre.sanitizePath());

server.on('someEvent', ()=>{});


server.use((req, res, next)=>{});
server.use([(req, res, next)=>{}]);
server.use((req, res, next)=>{}, (req, res, next)=>{});

function send(req: restify.Request, res: restify.Response, next: restify.Next) {
    req.header('key', 'val') === 'val';
    req.header('key') === 'val';

    req.accepts('test') === true;
    req.is('test') === true;

    req.log.debug({ params: req.params }, 'Hello there %s', 'foo');

    req.contentLength() === 50;
    req.contentType() === 'test';
    req.href() === 'test';
    req.id() === 'test';
    req.path() === 'test';
    req.query() === 'test';
    req.isSecure() === true;
    req.time() === 50;

    res.header('test');
    res.header('test', '%s-val', 'other');
    res.header('test', new Date());

    res.cache();
    res.cache('testst', {});
    res.cache('testst', { maxAge: 2 });
    res.cache({ maxAge: 2 });

    res.status(344);

    res.send({hello: 'world'});
    res.send(201, {hello: 'world'});
    res.send(new restify.BadRequestError('meh'));

    res.json(201, {hello: 'world'});
    res.json({hello: 'world'});

    res.statusCode === 50;

    res.send('hello ' + req.params['name']);
    return next();
}


server.post('/hello', send);
server.put( '/hello', send);
server.del( '/hello', send);
server.get( '/hello', send);
server.head('/hello', send);

server.post(/(.*)/, send);
server.put( /(.*)/, send);
server.del( /(.*)/, send);
server.get( /(.*)/, send);
server.head(/(.*)/, send);

new restify.ConflictError("test");
new restify.InvalidArgumentError("message");
new restify.RestError("message");
new restify.BadDigestError("message");
new restify.BadMethodError("message");
new restify.BadRequestError('test');
new restify.InternalError("message");
new restify.InvalidContentError("message");
new restify.InvalidCredentialsError("message");
new restify.InvalidHeaderError("message");
new restify.InvalidVersionError("message");
new restify.MissingParameterError("message");
new restify.NotAuthorizedError("message");
new restify.RequestExpiredError("jjmessage");
new restify.RequestThrottledError("message");
new restify.ResourceNotFoundError("message");
new restify.WrongAcceptError("message");

server.name = "";
server.version = "";
server.log = bunyan.createLogger({ name: 'test' });
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
    log: ()=>{}
}));

restify.defaultResponseHeaders = function(data) {
  this.header('Server', 'helloworld');
};

restify.defaultResponseHeaders = false;

//RESTIFY Client Tests

var client = restify.createJsonClient({
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
    signRequest: ()=>{},
    url: "",
    userAgent: "",
    version: ""
});

client.get("test", (err, req, res, obj) => send(req, res, null));
client.head('test', (err, req, res) => send(req, res, null));
client.post('path', {}, (err, req, res, obj) => send(req, res, null));
client.put('path', {}, (err, req, res, obj) => send(req, res, null));
client.del('path', (err, req, res) => send(req, res, null));

client.post('/foo', { hello: 'world' }, function(err, req, res, obj) {
    console.log('%d -> %j', res.statusCode, res.headers);
    console.log('%j', obj);
});

client.get('/foo/bar', function(err, req, res, data) {
    console.log('%s', data);
});

var client2 = restify.createClient({
  url: 'http://127.0.0.1'
});

client2.get('/str/mcavage', function(err, req) {

    req.on('result', function(err, res) {

        res.body = '';
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            res.body += chunk;
        });

        res.on('end', function() {
            console.log(res.body);
        });
    });
});
  

client.basicAuth('test', 'password');
client2.basicAuth('test', 'password');
