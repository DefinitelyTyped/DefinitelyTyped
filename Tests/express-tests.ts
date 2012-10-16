/// <reference path="../Definitions/express-2.d.ts" />

declare var _, $;
declare function require(name:string);

var express = require('express');
var app = express();

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
