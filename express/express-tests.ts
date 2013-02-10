/// <reference path="express.d.ts" />

declare var _, $;

import Express = module('express');
var express: Express;
var app: Express.ServerApplication;

function test_general() {

    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.send(500, 'Something broke!');
    });
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(function (err, req, res, next) { });
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);

    app.get('/', function (req, res) {
        res.send('hello world');
    });

    app.listen(3000);

    app.set('title', 'My Site');
    app.get('title');

    app.enable('trust proxy');
    app.get('trust proxy');

    app.disable('trust proxy');
    app.get('trust proxy');

    app.enabled('trust proxy');

    app.configure(function () => {
        app.set('title', 'My Application');
    });

    app.configure('development', () => {
        app.set('db uri', 'localhost/dev');
    });

    app.configure('stage', 'production', function () { });

    app.configure('1', '2', '3', function () { });

    app.use(function (req, res, next) {
        res.send('Hello World');
    });

    app.engine('jade', require('jade').__express);

    var User;
    app.param('user', (req, res, next, id) => {
        User.find(id, (err, user) =>{
            if (err) {
                next(err);
            } else if (user) {
                req.user = user;
                next();
            } else {
                next(new Error('failed to load user'));
            }
        });
    });

    app.get(/^\/commits\/(\d+)(?:\.\.(\d+))?$/, (req, res) => {
        var from = req.params[0];
        var to = req.params[1] || 'HEAD';
        res.send('commit range ' + from + '..' + to);
    });

    app.locals.title = 'My App';
    app.locals.strftime = require('strftime');

    var requireAuthentication;
    var loadUser = function () { };
    app.all('*', requireAuthentication, loadUser);
    app.all('*', loadUser);
    app.all('*', loadUser, loadUser, loadUser);

    app.locals.title = 'My App';
    app.locals.strftime = require('strftime');
    app.locals({
        title: 'My App',
        phone: '1-250-858-9990',
        email: 'me@myapp.com'
    });
    app.render('email', function (err, html) { });

    app.render('email', { name: 'Tobi' }, function (err, html) { });
}

function test_request() {
    var req: Express.ServerRequest;
    req.params.name;
    req.params[0];
    req.query.q;
    req.body.user.name;
    app.use(express.bodyParser({ keepExtensions: true, uploadDir: '/my/files' }));
    req.param('name');
    req.route;
    req.cookies.name;
    req.signedCookies;
    req.get('Content-Type');
    req.accepts('html');
    req.accepts(['html', 'json']);
    req.is('html');
    req.ip;
    req.path;
    req.host;
    req.fresh;
    req.stale;
    req.xhr;
    req.protocol;
    req.subdomains;
    req.originalUrl;
    req.acceptedLanguages;
    req.acceptedCharsets;
    var charset;
    req.acceptsCharset(charset);
    var lang;
    req.acceptsLanguage(lang);
    req.session = null;
}

function test_response() {
    var res: Express.ServerResponse;
    res.status(404).sendfile('path/to/404.png');
    res.set('Content-Type', 'text/plain');
    res.set({
        'Content-Type': 'text/plain',
        'Content-Length': '123',
        'ETag': '12345'
    });
    res.get('Content-Type');
    res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true });
    res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
    res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true });
    res.cookie('cart', { items: [1, 2, 3] });
    res.cookie('cart', { items: [1, 2, 3] }, { maxAge: 900000 });;
    res.cookie('name', 'tobi', { signed: true });
    res.cookie('name', 'tobi', { path: '/admin' });
    res.clearCookie('name', { path: '/admin' });
    res.redirect('/foo/bar');
    res.redirect('http://example.com');
    res.redirect(301, 'http://example.com');
    res.charset = 'value';
    res.send('some html');
    res.send(new Buffer('whoop'));
    res.send({ some: 'json' });
    res.send('some html');
    res.send(404, 'Sorry, we cannot find that!');
    res.send(500, { error: 'something blew up' });
    res.send(200);
    res.set('Content-Type', 'text/html');
    res.send(new Buffer('some html'));
    res.send('some html');
    res.send({ user: 'tobi' });
    res.send([1, 2, 3]);
    res.json(null);
    res.json({ user: 'tobi' });
    res.json(500, { error: 'message' });
    res.jsonp(null);
    res.jsonp({ user: 'tobi' });
    res.jsonp(500, { error: 'message' });
    res.jsonp({ user: 'tobi' });
    res.type('application/json');

    res.format({
        'text/plain': function () {
            res.send('hey');
        },
        'text/html': function () {
            res.send('hey');
        },
        'application/json': function () {
            res.send({ message: 'hey' });
        }
    });

    res.attachment();
    res.attachment('path/to/logo.png');
    app.get('/user/:uid/photos/:file', function (req, res) {
        var uid = req.params.uid
            , file = req.params.file;

        req.user.mayViewFilesFrom(uid, function (yes) {
            if (yes) {
                res.sendfile('/uploads/' + uid + '/' + file);
            } else {
                res.send(403, 'Sorry! you cant see that.');
            }
        });
    });

    res.download('/report-12345.pdf');
    res.download('/report-12345.pdf', 'report.pdf');
    res.download('/report-12345.pdf', 'report.pdf', function (err) {
        if (err) { } else { }
    });

    res.links({
        next: 'http://api.example.com/users?page=2',
        last: 'http://api.example.com/users?page=5'
    });

    app.use(function (req, res, next) {
        res.locals.user = req.user;
        res.locals.authenticated = !req.user.anonymous;
        next();
    });
    res.render('index', function (err, html) { });
    res.render('user', { name: 'Tobi' }, function (err, html) { });

}

function test_middleware() {
    app.use(express.basicAuth('username', 'password'));
    app.use(express.basicAuth(function (user, pass) {
        return 'tj' == user && 'wahoo' == pass;
    }));
    app.use(express.bodyParser());
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.multipart());
    app.use(express.logger());
    app.use(express.compress());
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.cookieParser('some secret'));
    app.use(express.cookieSession());
    app.use(express.directory('public'));
    app.use(express.static('public'));
}
