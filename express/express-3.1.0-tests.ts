/// <reference path="express.d.ts" />

import express = require('express');
var app = express();

//////////////////////////

var hash: any;

// config

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// middleware

app.use(express.bodyParser());
app.use(express.cookieParser('shhhh, very secret'));
app.use(express.session());

// Session-persisted message middleware

app.use((req: express.Request, res: express.Response, next) => {
    var err = req.session.error
      , msg = req.session.success;
    delete req.session.error;
    delete req.session.success;
    res.locals.message = '';
    if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
    if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
    next();
});

// dummy database

var users = <any>{
    tj: { name: 'tj' }
};

// when you create a user, generate a salt
// and hash the password ('foobar' is the pass here)

hash('foobar', (err, salt, hash) => {
    if (err) throw err;
    // store the salt & hash in the "db"
    users.tj.salt = salt;
    users.tj.hash = hash;
});


// Authenticate using our plain-object database of doom!

function authenticate(name, pass, fn) {
    if (!module.parent) console.log('authenticating %s:%s', name, pass);
    var user = users[name];
    // query the db for the given username
    if (!user) return fn(new Error('cannot find user'));
    // apply the same algorithm to the POSTed password, applying
    // the hash against the pass / salt, if there is a match we
    // found the user
    hash(pass, user.salt, (err, hash) => {
        if (err) return fn(err);
        if (hash == user.hash) return fn(null, user);
        fn(new Error('invalid password'));
    });
}

function restrict(req: express.Request, res: express.Response, next?: Function) {
    if (req.session.user) {
        next();
    } else {
        req.session.error = 'Access denied!';
        res.redirect('/login');
    }
}

app.get('/', (req: express.Request, res: express.Response) => {
    res.redirect('login');
});

app.get('/restricted', restrict, (req: express.Request, res: express.Response) => {
    res.send('Wahoo! restricted area, click to <a href="/logout">logout</a>');
});

app.get('/logout', (req: express.Request, res: express.Response) => {
    // destroy the user's session to log them out
    // will be re-created next request
    req.session.destroy(() => {
        res.redirect('/');
    });
});

app.get('/login', (req: express.Request, res: express.Response) => {
    res.render('login');
});

app.post('/login', (req: express.Request, res: express.Response) => {
    authenticate(req.body.username, req.body.password, (err, user) => {
        if (user) {
            // Regenerate session when signing in
            // to prevent fixation 
            req.session.regenerate(() => {
                // Store the user's primary key 
                // in the session store to be retrieved,
                // or in this case the entire user object
                req.session.user = user;
                req.session.success = 'Authenticated as ' + user.name
                  + ' click to <a href="/logout">logout</a>. '
                  + ' You may now access <a href="/restricted">/restricted</a>.';
                res.redirect('back');
            });
        } else {
            req.session.error = 'Authentication failed, please check your '
              + ' username and password.'
              + ' (use "tj" and "foobar")';
            res.redirect('login');
        }
    });
});

if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}

//////////////

app.set('views', __dirname);
app.set('view engine', 'jade');

var pets = [];

var n = 1000;
while (n--) {
    pets.push({ name: 'Tobi', age: 2, species: 'ferret' });
    pets.push({ name: 'Loki', age: 1, species: 'ferret' });
    pets.push({ name: 'Jane', age: 6, species: 'ferret' });
}

app.use(express.logger('dev'));

app.get('/', (req: express.Request, res: express.Response) => {
    res.render('pets', { pets: pets });
});

app.listen(3000);
console.log('Express listening on port 3000');

/////////////

app.get('/', (req: express.Request, res: express.Response) => {
    res.format({
        html: () => {
            res.send('<ul>' + users.map(user => {
                return '<li>' + user.name + '</li>';
            }).join('') + '</ul>');
        },

        text: () => {
            res.send(users.map(user => {
                return ' - ' + user.name + '\n';
            }).join(''));
        },

        json: () => {
            res.json(users);
        }
    });
});

// or you could write a tiny middleware like
// this to abstract make things a bit more declarative:

function format(mod) {
    var obj = require(mod);
    return (req: express.Request, res: express.Response) => {
        res.format(obj);
    };
}

app.get('/users', format('./users'));

if (!module.parent) {
    app.listen(3000);
    console.log('listening on port 3000');
}

/////////////////////////

// add favicon() before logger() so
// GET /favicon.ico requests are not
// logged, because this middleware
// reponds to /favicon.ico and does not
// call next()
app.use(express.favicon());

// custom log format
if ('test' != process.env.NODE_ENV)
    app.use(express.logger(':method :url'));

// parses request cookies, populating
// req.cookies and req.signedCookies
// when the secret is passed, used 
// for signing the cookies.
app.use(express.cookieParser('my secret here'));

// parses json, x-www-form-urlencoded, and multipart/form-data
app.use(express.bodyParser());

app.get('/', (req: express.Request, res: express.Response) => {
    if (req.cookies.remember) {
        res.send('Remembered :). Click to <a href="/forget">forget</a>!.');
    } else {
        res.send('<form method="post"><p>Check to <label>'
          + '<input type="checkbox" name="remember"/> remember me</label> '
          + '<input type="submit" value="Submit"/>.</p></form>');
    }
});

app.get('/forget', (req: express.Request, res: express.Response) => {
    res.clearCookie('remember');
    res.redirect('back');
});

app.post('/', (req: express.Request, res: express.Response) => {
    var minute = 60000;
    if (req.body.remember) res.cookie('remember', 1, { maxAge: minute });
    res.redirect('back');
});

if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}

///////////////////

// ignore GET /favicon.ico
app.use(express.favicon());

// pass a secret to cookieParser() for signed cookies
app.use(express.cookieParser('manny is cool'));

// add req.session cookie support
app.use(express.cookieSession());

// do something with the session
app.use(count);

// custom middleware
function count(req: express.Request, res: express.Response) {
    req.session.count = req.session.count || 0;
    var n = req.session.count++;
    res.send('viewed ' + n + ' times\n');
}

if (!module.parent) {
    app.listen(3000);
    console.log('Express server listening on port 3000');
}

///////////////

var api = app;

app.use(express.static(__dirname + '/public'));

// api middleware

api.use(express.logger('dev'));
api.use(express.bodyParser());

/**
 * CORS support.
 */

api.all('*', (req: express.Request, res: express.Response, next) => {
    if (!req.get('Origin')) return next();
    // use "*" here to accept any origin
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    // res.set('Access-Control-Allow-Max-Age', 3600);
    if ('OPTIONS' == req.method) return res.send(200);
    next();
});

/**
 * POST a user.
 */

api.post('/user', (req: express.Request, res: express.Response) => {
    console.log(req.body);
    res.send(201);
});

app.listen(3000);
api.listen(3001);

console.log('app listening on 3000');
console.log('api listening on 3001');

////////////////////

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('<ul>'
      + '<li>Download <a href="/files/amazing.txt">amazing.txt</a>.</li>'
      + '<li>Download <a href="/files/missing.txt">missing.txt</a>.</li>'
      + '</ul>');
});

// /files/* is accessed via req.params[0]
// but here we name it :file
app.get('/files/:file(*)', (req: express.Request, res: express.Response) => {
    var file = req.params.file
      , path = __dirname + '/files/' + file;

    res.download(path);
});

// error handling middleware. Because it's
// below our routes, you will be able to
// "intercept" errors, otherwise Connect
// will respond with 500 "Internal Server Error".
app.use((err, req, res: express.Response, next) => {
    // special-case 404s,
    // remember you could
    // render a 404 template here
    if (404 == err.status) {
        res.statusCode = 404;
        res.send('Cant find that file, sorry!');
    } else {
        next(err);
    }
});

if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}

///////////////////

// Register ejs as .html. If we did
// not call this, we would need to
// name our views foo.ejs instead
// of foo.html. The __express method
// is simply a function that engines
// use to hook into the Express view
// system by default, so if we want
// to change "foo.ejs" to "foo.html"
// we simply pass _any_ function, in this
// case `ejs.__express`.

app.engine('.html', require('ejs').__express);

// Optional since express defaults to CWD/views

app.set('views', __dirname + '/views');

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');

app.get('/', (req: express.Request, res: express.Response) => {
    res.render('users', {
        users: users,
        title: "EJS example",
        header: "Some users"
    });
});

if (!module.parent) {
    app.listen(3000);
    console.log('Express app started on port 3000');
}

////////////////////

var test: any;

if (!test) app.use(express.logger('dev'));
app.use(app.router);

// the error handler is strategically
// placed *below* the app.router; if it
// were above it would not receive errors
// from app.get() etc 
app.use(error);

// error handling middleware have an arity of 4
// instead of the typical (req: express.Request, res: express.Response, next),
// otherwise they behave exactly like regular
// middleware, you may have several of them,
// in different orders etc.

function error(err, req, res: express.Response, next) {
    // log it
    if (!test) console.error(err.stack);

    // respond with 500 "Internal Server Error".
    res.send(500);
}

app.get('/', () => {
    // Caught and passed down to the errorHandler middleware
    throw new Error('something broke!');
});

app.get('/next', (req: express.Request, res: express.Response, next) => {
    // We can also pass exceptions to next()
    process.nextTick(() => {
        next(new Error('oh no!'));
    });
});

if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}

/////////////////////

var silent: any;

// general config
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// our custom "verbose errors" setting
// which we can use in the templates
// via settings['verbose errors']
app.enable('verbose errors');

// disable them in production
// use $ NODE_ENV=production node examples/error-pages
if ('production' == app.settings.env) {
    app.disable('verbose errors');
}

app.use(express.favicon());

silent || app.use(express.logger('dev'));

// "app.router" positions our routes 
// above the middleware defined below,
// this means that Express will attempt
// to match & call routes _before_ continuing
// on, at which point we assume it's a 404 because
// no route has handled the request.

app.use(app.router);

// Since this is the last non-error-handling
// middleware use()d, we assume 404, as nothing else
// responded.

// $ curl http://localhost:3000/notfound
// $ curl http://localhost:3000/notfound -H "Accept: application/json"
// $ curl http://localhost:3000/notfound -H "Accept: text/plain"

app.use((req: express.Request, res: express.Response) => {
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
        res.render('404', { url: req.url });
        return;
    }

    // respond with json
    if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
});

// error-handling middleware, take the same form
// as regular middleware, however they require an
// arity of 4, aka the signature (err, req, res: express.Response, next).
// when connect has an error, it will invoke ONLY error-handling
// middleware.

// If we were to next() here any remaining non-error-handling
// middleware would then be executed, or if we next(err) to
// continue passing the error, only error-handling middleware
// would remain being executed, however here
// we simply respond with an error page.

app.use((err, req, res: express.Response) => {
    // we may use properties of the error object
    // here and next(err) appropriately, or if
    // we possibly recovered from the error, simply next().
    res.status(err.status || 500);
    res.render('500', { error: err });
});

// Routes

app.get('/', (req: express.Request, res: express.Response) => {
    res.render('index.jade');
});

app.get('/404', (req: express.Request, res: express.Response, next) => {
    // trigger a 404 since no other middleware
    // will match /404 after this one, and we're not
    // responding here
    next();
});

app.get('/403', (req: express.Request, res: express.Response, next) => {
    // trigger a 403 error
    var err = <any>new Error('not allowed!');
    err.status = 403;
    next(err);
});

app.get('/500', (req: express.Request, res: express.Response, next) => {
    // trigger a generic (500) error
    next(new Error('keyboard cat!'));
});

if (!module.parent) {
    app.listen(3000);
    //silent ||  console.log('Express started on port 3000');
}

///////////////

var fs: any;
var md: any;

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

function User(name) {
    this.private = 'heyyyy';
    this.secret = 'something';
    this.name = name;
    this.id = 123;
}

// You'll probably want to do
// something like this so you
// dont expose "secret" data.

User.prototype.toJSON = function () {
    return {
        id: this.id,
        name: this.name
    };
};

app.use(express.logger('dev'));

// earlier on expose an object
// that we can tack properties on.
// all res.locals props are exposed
// to the templates, so "expose" will
// be present.

app.use((req: express.Request, res: express.Response, next) => {
    res.locals.expose = {};
    // you could alias this as req or res.expose
    // to make it shorter and less annoying
    next();
});

// pretend we loaded a user

app.use((req: express.Request, res: express.Response, next) => {
    req.user = new User('Tobi');
    next();
});

app.get('/', (req: express.Request, res: express.Response) => {
    res.redirect('/user');
});

app.get('/user', (req: express.Request, res: express.Response) => {
    // we only want to expose the user
    // to the client for this route:
    res.locals.expose.user = req.user;
    res.render('page');
});

app.listen(3000);
console.log('app listening on port 3000');

///////////////////////

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World');
});

app.listen(3000);
console.log('Express started on port 3000');

////////////////////

// register .md as an engine in express view system

app.engine('md', (path, options, fn) => {
    fs.readFile(path, 'utf8', (err, str) => {
        if (err) return fn(err);
        try {
            var html = md(str);
            html = html.replace(/\{([^}]+)\}/g, (_, name) => {
                return options[name] || '';
            });
            fn(null, html);
        } catch (err) {
            fn(err);
        }
    });
});

app.set('views', __dirname + '/views');

// make it the default so we dont need .md
app.set('view engine', 'md');

app.get('/', (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'Markdown Example' });
});

app.get('/fail', (req: express.Request, res: express.Response) => {
    res.render('missing', { title: 'Markdown Example' });
});

if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}

///////////////////////

var mformat: any;

// bodyParser in connect 2.x uses node-formidable to parse 
// the multipart form data.
app.use(express.bodyParser());

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('<form method="post" enctype="multipart/form-data">'
      + '<p>Title: <input type="text" name="title" /></p>'
      + '<p>Image: <input type="file" name="image" /></p>'
      + '<p><input type="submit" value="Upload" /></p>'
      + '</form>');
});

app.post('/', (req: express.Request, res: express.Response) => {
    // the uploaded file can be found as `req.files.image` and the
    // title field as `req.body.title`
    res.send(mformat('\nuploaded %s (%d Kb) to %s as %s'
      , req.files.image.name
      , req.files.image.size / 1024 | 0
      , req.files.image.path
      , req.body.title));
});

if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}

//////////////////


// first:
// $ npm install redis online
// $ redis-server

/**
 * Module dependencies.
 */

var online: any;
var db: any;

// online

online = online(db);

// activity tracking, in this case using
// the UA string, you would use req.user.id etc

app.use((req: express.Request, res: express.Response, next) => {
    // fire-and-forget
    online.add(req.headers['user-agent']);
    next();
});

/**
 * List helper.
 */

function list(ids) {
    return '<ul>' + ids.map(id => {
        return '<li>' + id + '</li>';
    }).join('') + '</ul>';
}

/**
 * GET users online.
 */

app.get('/', (req: express.Request, res: express.Response, next) => {
    online.last(5, (err, ids) => {
        if (err) return next(err);
        res.send('<p>Users online: ' + ids.length + '</p>' + list(ids));
    });
});

app.listen(3000);
console.log('listening on port 3000');

///////////////////

// Convert :to and :from to integers

app.param(['to', 'from'], (req: express.Request, res: express.Response, next, num, name) => {
    req.params[name] = num = parseInt(num, 10);
    if (isNaN(num)) {
        next(new Error('failed to parseInt ' + num));
    } else {
        next();
    }
});

// Load user by id

app.param('user', (req: express.Request, res: express.Response, next, id) => {
    if (req.user = users[id]) {
        next();
    } else {
        next(new Error('failed to find user'));
    }
});

/**
 * GET index.
 */

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Visit /user/0 or /users/0-2');
});

/**
 * GET :user.
 */

app.get('/user/:user', (req: express.Request, res: express.Response) => {
    res.send('user ' + req.user.name);
});

/**
 * GET users :from - :to.
 */

app.get('/users/:from-:to', (req: express.Request, res: express.Response) => {
    var from = req.params.from
      , to = req.params.to
      , names = users.map(user => { return user.name; });
    res.send('users ' + names.slice(from, to).join(', '));
});

if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}

//////////////////

// Ad-hoc example resource method

app.resource = function (path, obj) {
    this.get(path, obj.index);
    this.get(path + '/:a..:b.:format?', (req: express.Request, res: express.Response) => {
        var a = parseInt(req.params.a, 10)
          , b = parseInt(req.params.b, 10)
          , format = req.params.format;
        obj.range(req, res, a, b, format);
    });
    this.get(path + '/:id', obj.show);
    this.del(path + '/:id', obj.destroy);
};

// Fake controller.

var FUser = {
    index: (req: express.Request, res: express.Response) => {
        res.send(users);
    },
    show: (req: express.Request, res: express.Response) => {
        res.send(users[req.params.id] || { error: 'Cannot find user' });
    },
    destroy: (req: express.Request, res: express.Response) => {
        var id = req.params.id;
        var destroyed = id in users;
        delete users[id];
        res.send(destroyed ? 'destroyed' : 'Cannot find user');
    },
    range: (req: express.Request, res: express.Response, a, b, format) => {
        var range = users.slice(a, b + 1);
        switch (format) {
            case 'json':
                res.send(range);
                break;
            case 'html':
            default:
                var html = '<ul>' + range.map(user => {
                    return '<li>' + user.name + '</li>';
                }).join('\n') + '</ul>';
                res.send(html);
                break;
        }
    }
};

// curl http://localhost:3000/users     -- responds with all users
// curl http://localhost:3000/users/1   -- responds with user 1
// curl http://localhost:3000/users/4   -- responds with error
// curl http://localhost:3000/users/1..3 -- responds with several users
// curl -X DELETE http://localhost:3000/users/1  -- deletes the user

app.resource('/users', FUser);

app.get('/', (req: express.Request, res: express.Response) => {
    res.send([
        '<h1>Examples:</h1> <ul>'
      , '<li>GET /users</li>'
      , '<li>GET /users/1</li>'
      , '<li>GET /users/3</li>'
      , '<li>GET /users/1..3</li>'
      , '<li>GET /users/1..3.json</li>'
      , '<li>DELETE /users/4</li>'
      , '</ul>'
    ].join('\n'));
});

if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}

/////////////////////


var verbose: any;

app.map = (a, route) => {
    route = route || '';
    for (var key in a) {
        switch (typeof a[key]) {
            // { '/path': { ... }}
            case 'object':
                app.map(a[key], route + key);
                break;
            // get: function(){ ... }
            case 'function':
                if (verbose) console.log('%s %s', key, route);
                app[key](route, a[key]);
                break;
        }
    }
};

var users2 = {
    list: (req: express.Request, res: express.Response) => {
        res.send('user list');
    },

    get: (req: express.Request, res: express.Response) => {
        res.send('user ' + req.params.uid);
    },

    del: (req: express.Request, res: express.Response) => {
        res.send('delete users');
    }
};

var pets2 = {
    list: (req: express.Request, res: express.Response) => {
        res.send('user ' + req.params.uid + '\'s pets');
    },

    del: (req: express.Request, res: express.Response) => {
        res.send('delete ' + req.params.uid + '\'s pet ' + req.params.pid);
    }
};

app.map({
    '/users': {
        get: users2.list,
        del: users2.del,
        '/:uid': {
            get: users.get ,
            '/pets': {
                get: pets2.list,
                '/:pid': {
                    del: pets2.del
                }
            }
        }
    }
});

app.listen(3000);

///////////////////////////

// Example requests:
//     curl http://localhost:3000/user/0
//     curl http://localhost:3000/user/0/edit
//     curl http://localhost:3000/user/1
//     curl http://localhost:3000/user/1/edit (unauthorized since this is not you)
//     curl -X DELETE http://localhost:3000/user/0 (unauthorized since you are not an admin)

function loadUser(req: express.Request, res: express.Response, next) {
    // You would fetch your user from the db
    var user = users[req.params.id];
    if (user) {
        req.user = user;
        next();
    } else {
        next(new Error('Failed to load user ' + req.params.id));
    }
}

function andRestrictToSelf(req: express.Request, res: express.Response, next) {
    // If our authenticated user is the user we are viewing
    // then everything is fine :)
    if (req.authenticatedUser.id == req.user.id) {
        next();
    } else {
        // You may want to implement specific exceptions
        // such as UnauthorizedError or similar so that you
        // can handle these can be special-cased in an error handler
        // (view ./examples/pages for this)
        next(new Error('Unauthorized'));
    }
}

function andRestrictTo(role) {
    return (req: express.Request, res: express.Response, next) => {
        if (req.authenticatedUser.role == role) {
            next();
        } else {
            next(new Error('Unauthorized'));
        }
    };
}

// Middleware for faux authentication
// you would of course implement something real,
// but this illustrates how an authenticated user
// may interact with middleware

app.use((req: express.Request, res: express.Response, next) => {
    req.authenticatedUser = users[0];
    next();
});

app.get('/', (req: express.Request, res: express.Response) => {
    res.redirect('/user/0');
});

app.get('/user/:id', loadUser, (req: express.Request, res: express.Response) => {
    res.send('Viewing user ' + req.user.name);
});

app.get('/user/:id/edit', loadUser, andRestrictToSelf, (req: express.Request, res: express.Response) => {
    res.send('Editing user ' + req.user.name);
});

app.del('/user/:id', loadUser, andRestrictTo('admin'), (req: express.Request, res: express.Response) => {
    res.send('Deleted user ' + req.user.name);
});

app.listen(3000);
console.log('Express app started on port 3000');

/////////////////////////

app.set('view engine', 'jade');
app.set('views', __dirname);

// populate search

db.sadd('ferret', 'tobi');
db.sadd('ferret', 'loki');
db.sadd('ferret', 'jane');
db.sadd('cat', 'manny');
db.sadd('cat', 'luna');

/**
 * GET the search page.
 */

app.get('/', (req: express.Request, res: express.Response) => {
    res.render('search');
});

/**
 * GET search for :query.
 */

app.get('/search/:query?', (req: express.Request, res: express.Response) => {
    var query = req.params.query;
    db.smembers(query, (err, vals) => {
        if (err) return res.send(500);
        res.send(vals);
    });
});

/**
 * GET client javascript. Here we use sendfile()
 * because serving __dirname with the static() middleware
 * would also mean serving our server "index.js" and the "search.jade"
 * template.
 */

app.get('/client.js', (req: express.Request, res: express.Response) => {
    res.sendfile(__dirname + '/client.js');
});

app.listen(3000);
console.log('app listening on port 3000');

///////////////////

app.use(express.logger('dev'));

// Required by session() middleware
// pass the secret for signed cookies
// (required by session())
app.use(express.cookieParser('keyboard cat'));

// Populates req.session
app.use(express.session());

app.get('/', (req: express.Request, res: express.Response) => {
    var body = '';
    if (req.session.views) {
        ++req.session.views;
    } else {
        req.session.views = 1;
        body += '<p>First time visiting? view this page in several browsers :)</p>';
    }
    res.send(body + '<p>viewed <strong>' + req.session.views + '</strong> times.</p>');
});

app.listen(3000);
console.log('Express app started on port 3000');

////////////////////////

// log requests
app.use(express.logger('dev'));

// express on its own has no notion
// of a "file". The express.static()
// middleware checks for a file matching
// the `req.path` within the directory
// that you pass it. In this case "GET /js/app.js"
// will look for "./public/js/app.js".

app.use(express.static(__dirname + '/public'));

// if you wanted to "prefix" you may use
// the mounting feature of Connect, for example
// "GET /static/js/app.js" instead of "GET /js/app.js".
// The mount-path "/static" is simply removed before
// passing control to the express.static() middleware,
// thus it serves the file correctly by ignoring "/static"
app.use('/static', express.static(__dirname + '/public'));

// if for some reason you want to serve files from
// several directories, you can use express.static()
// multiple times! Here we're passing "./public/css",
// this will allow "GET /style.css" instead of "GET /css/style.css":
app.use(express.static(__dirname + '/public/css'));

// this examples does not have any routes, however
// you may `app.use(app.router)` before or after these
// static() middleware. If placed before them your routes
// will be matched BEFORE file serving takes place. If placed
// after as shown here then file serving is performed BEFORE
// any routes are hit:
app.use(app.router);

app.listen(3000);
console.log('listening on port 3000');
console.log('try:');
console.log('  GET /hello.txt');
console.log('  GET /js/app.js');
console.log('  GET /css/style.css');

//////////////////

/*
edit /etc/vhosts:

127.0.0.1       foo.example.com
127.0.0.1       bar.example.com
127.0.0.1       example.com
*/

// Main app

var main = express();

main.use(express.logger('dev'));

main.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello from main app!');
});

main.get('/:sub', (req: express.Request, res: express.Response) => {
    res.send('requsted ' + req.params.sub);
});

// Redirect app

var redirect = express();

redirect.all('*', (req: express.Request, res: express.Response) => {
    console.log(req.subdomains);
    res.redirect('http://example.com:3000/' + req.subdomains[0]);
});

app.use(express.vhost('*.example.com', redirect));
app.use(express.vhost('example.com', main));

app.listen(3000);
console.log('Express app started on port 3000');

////////////////////

// create an error with .status. we
// can then use the property in our
// custom error handler (Connect repects this prop as well)

function merror(status, msg) {
    var err = <any>new Error(msg);
    err.status = status;
    return err;
}

// if we wanted to supply more than JSON, we could
// use something similar to the content-negotiation
// example.

// here we validate the API key,
// by mounting this middleware to /api
// meaning only paths prefixed with "/api"
// will cause this middleware to be invoked

app.use('/api', (req, res: express.Response, next) => {
    var key = req.query['api-key'];

    // key isnt present
    if (!key) return next(merror(400, 'api key required'));

    // key is invalid
    if (!~apiKeys.indexOf(key)) return next(merror(401, 'invalid api key'));

    // all good, store req.key for route access
    req.key = key;
    next();
});

// position our routes above the error handling middleware,
// and below our API middleware, since we want the API validation
// to take place BEFORE our routes
app.use(app.router);

// middleware with an arity of 4 are considered
// error handling middleware. When you next(err)
// it will be passed through the defined middleware
// in order, but ONLY those with an arity of 4, ignoring
// regular middleware.
app.use((err, req, res: express.Response) => {
    // whatever you want here, feel free to populate
    // properties on `err` to treat it differently in here.
    res.send(err.status || 500, { error: err.message });
});

// our custom JSON 404 middleware. Since it's placed last
// it will be the last middleware called, if all others
// invoke next() and do not respond.
app.use((req: express.Request, res: express.Response) => {
    res.send(404, { error: "Lame, can't find that" });
});

// map of valid api keys, typically mapped to
// account info with some sort of database like redis.
// api keys do _not_ serve as authentication, merely to
// track API usage or help prevent malicious behavior etc.

var apiKeys = ['foo', 'bar', 'baz'];

// these two objects will serve as our faux database

var repos = [
    { name: 'express', url: 'http://github.com/visionmedia/express' }
  , { name: 'stylus', url: 'http://github.com/learnboost/stylus' }
  , { name: 'cluster', url: 'http://github.com/learnboost/cluster' }
];

var userRepos = {
    tobi: [repos[0], repos[1]]
  , loki: [repos[1]]
  , jane: [repos[2]]
};

// we now can assume the api key is valid,
// and simply expose the data

app.get('/api/users', (req: express.Request, res: express.Response) => {
    res.send(users);
});

app.get('/api/repos', (req: express.Request, res: express.Response) => {
    res.send(repos);
});

app.get('/api/user/:name/repos', (req: express.Request, res: express.Response, next) => {
    var name = req.params.name
      , user = userRepos[name];

    if (user) res.send(user);
    else next();
});

if (!module.parent) {
    app.listen(3000);
    console.log('Express server listening on port 3000');
}

////// 

var router = new express.Router();

router.get('/', function (req, resp, next?) {
  resp.send('response from router');
  resp.end();
  if (next) {
    next();
  }
});

function test_general() {

    app.use((err, req, res: express.Response) => {
        console.error(err.stack);
        res.send(500, 'Something broke!');
    });
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(() => {});
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);

    app.get('/', (req: express.Request, res: express.Response) => {
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

    app.configure(() => {
        app.set('title', 'My Application');
    });

    app.configure('development', () => {
        app.set('db uri', 'localhost/dev');
    });

    app.configure('stage', 'production', () => {});

    app.configure('1', '2', '3', () => {});

    app.use((req: express.Request, res: express.Response) => {
        res.send('Hello World');
    });

    app.engine('jade', require('jade').__express);

    var User;
    app.param('user', (req: express.Request, res: express.Response, next, id) => {
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

    app.get(/^\/commits\/(\d+)(?:\.\.(\d+))?$/, (req: express.Request, res: express.Response) => {
        var from = req.params[0];
        var to = req.params[1] || 'HEAD';
        res.send('commit range ' + from + '..' + to);
    });

    app.locals.title = 'My App';
    app.locals.strftime = require('strftime');

    var requireAuthentication;
    var loadUser = () => {};
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
    app.render('email', () => {});

    app.render('email', { name: 'Tobi' }, () => {});
}

function test_request() {
    var req: express.Request;
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
    var res: express.Response;
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
        'text/plain': () => {
            res.send('hey');
        },
        'text/html': () => {
            res.send('hey');
        },
        'application/json': () => {
            res.send({ message: 'hey' });
        }
    });

    res.attachment();
    res.attachment('path/to/logo.png');
    app.get('/user/:uid/photos/:file', (req: express.Request, res: express.Response) => {
        var uid = req.params.uid
            , file = req.params.file;

        req.user.mayViewFilesFrom(uid, yes => {
            if (yes) {
                res.sendfile('/uploads/' + uid + '/' + file);
            } else {
                res.send(403, 'Sorry! you cant see that.');
            }
        });
    });

    res.download('/report-12345.pdf');
    res.download('/report-12345.pdf', 'report.pdf');
    res.download('/report-12345.pdf', 'report.pdf', err => {
        if (err) { } else { }
    });

    res.links({
        next: 'http://api.example.com/users?page=2',
        last: 'http://api.example.com/users?page=5'
    });

    app.use((req: express.Request, res: express.Response, next) => {
        res.locals.user = req.user;
        res.locals.authenticated = !req.user.anonymous;
        next();
    });
    res.render('index', () => {});
    res.render('user', { name: 'Tobi' }, () => {});

}

function test_middleware() {
    app.use(express.basicAuth('username', 'password'));
    app.use(express.basicAuth((user, pass) => {
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
    app.use(router.middleware);
}

////////////////////

// make sure server can be shut down
var testShutdownServer = app.listen(0);
console.log('listening on port ' + testShutdownServer.address().port);
testShutdownServer.close();
