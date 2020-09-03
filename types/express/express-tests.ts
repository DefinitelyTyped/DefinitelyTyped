import express = require('express');
import * as http from 'http';
import { Request, RequestRanges, ParamsArray } from 'express-serve-static-core';

namespace express_tests {
    const app = express();

    // Disable and use the same built-in query parser
    app.disable('query parser');
    app.use(express.query({}));

    app.engine('jade', require('jade').__express);
    app.engine('html', require('ejs').renderFile);

    express.static.mime.define({
        'application/fx': ['fx']
    });
    app.use('/static', express.static(__dirname + '/public'));

    // simple logger
    app.use((req, res, next) => {
        console.log('%s %s', req.method, req.url);
        next();
    });

    app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.error(err);
        next(err);
    });

    app.get('/', (req, res) => {
        res.send('hello world');
    });

    // Accept json app-wide or on one endpoint.
    app.use(express.json({ limit: "200kb" }));
    app.post('/echo', express.json(), (req, res) => {
        res.json(req.body);
    });

    // Accept urlencoded app-wide or on one endpoint.
    app.use(express.urlencoded({
        extended: false,
        parameterLimit: 16
    }));
    app.post('/search', express.urlencoded(), (req, res) => {
        res.json(Object.keys(req.body));
    });

    const router = express.Router({ caseSensitive: true, mergeParams: true, strict: true });

    const pathStr = 'test';
    const pathRE: RegExp = /test/;
    const path = true ? pathStr : pathRE;

    router.get(path);
    router.put(path);
    router.post(path);
    router.delete(path);
    router.get(pathStr);
    router.put(pathStr);
    router.post(pathStr);
    router.delete(pathStr);
    router.get(pathRE);
    router.put(pathRE);
    router.post(pathRE);
    router.delete(pathRE);

    router.use((req, res, next) => { next(); });
    router.route('/users')
        .get((req, res, next) => {
            const types: string[] = req.accepts();
            let type: string | false = req.accepts('json');
            type = req.accepts(['json', 'text']);
            type = req.accepts('json', 'text');

            const charsets: string[] = req.acceptsCharsets();
            let charset: string | false = req.acceptsCharsets('utf-8');
            charset = req.acceptsCharsets(['utf-8', 'utf-16']);
            charset = req.acceptsCharsets('utf-8', 'utf-16');

            const encodings: string[] = req.acceptsEncodings();
            let encoding: string | false = req.acceptsEncodings('gzip');
            encoding = req.acceptsEncodings(['gzip', 'deflate']);
            encoding = req.acceptsEncodings('gzip', 'deflate');

            const languages: string[] = req.acceptsLanguages();
            let language: string | false = req.acceptsLanguages('en');
            language = req.acceptsLanguages(['en', 'ja']);
            language = req.acceptsLanguages('en', 'ja');

            // downcasting
            req.get('set-cookie') as undefined;
            req.get('set-cookie') as string[];
            const setCookieHeader1 = req.get('set-cookie');
            if (setCookieHeader1 !== undefined) {
                const setCookieHeader2: string[] = setCookieHeader1;
            }
            req.get('header') as undefined;
            req.get('header') as string;
            const header1 = req.get('header');
            if (header1 !== undefined) {
                const header2: string = header1;
            }

            // upcasting
            const setCookieHeader3: string[] | undefined = req.get('set-cookie');
            const header3: string | undefined = req.header('header');

            req.headers.existingHeader as string;
            req.headers.nonExistingHeader as any as undefined;

            // Since 4.14.0 req.range() has options
            req.range(2, { combine: true });

            res.send(req.query['token']);
        });

    router.get('/user/:id', (req, res, next) => {
        if (Number(req.params.id) === 0) next('route');
        else next();
    }, (req, res, next) => {
        res.render('regular');
    });

    // Params defaults to dictionary
    router.get('/:foo', req => {
        req.params.foo; // $ExpectType string
        req.params[0]; // $ExpectType string
    });

    // Params can used as an array
    router.get<ParamsArray>('/*', req => {
        req.params[0]; // $ExpectType string
        req.params.length; // $ExpectType number
    });

    // Params can used as an array and can be specified via an explicit param type (express-serve-static-core)
    router.get('/*', (req: Request<ParamsArray>) => {
        req.params[0]; // $ExpectType string
        req.params.length; // $ExpectType number
    });

    // Params can used as an array and can be specified via an explicit param type (express)
    router.get('/*', (req: express.Request<ParamsArray>) => {
        req.params[0]; // $ExpectType string
        req.params.length; // $ExpectType number
    });

    // Params can be a custom type
    // NB. out-of-the-box all params are strings, however, other types are allowed to accomadate request validation/coersion middleware
    router.get<{ foo: string, bar: number }>('/:foo/:bar', req => {
        req.params.foo; // $ExpectType string
        req.params.bar; // $ExpectType number
        req.params.baz; // $ExpectError
    });

    // Params can be a custom type and can be specified via an explicit param type (express-serve-static-core)
    router.get('/:foo/:bar', (req: Request<{ foo: string, bar: number }>) => {
        req.params.foo; // $ExpectType string
        req.params.bar; // $ExpectType number
        req.params.baz; // $ExpectError
    });

    // Params can be a custom type and can be specified via an explicit param type (express)
    router.get('/:foo/:bar', (req: express.Request<{ foo: string, bar: number }>) => {
        req.params.foo; // $ExpectType string
        req.params.bar; // $ExpectType number
        req.params.baz; // $ExpectError
    });

    // Query can be a custom type
    router.get('/:foo', (req: express.Request<{}, any, any , {q: string}>) => {
        req.query.q; // $ExpectType string
        req.query.a; // $ExpectError
    });

    // Query will be defaulted to any
    router.get('/:foo', (req: express.Request<{}>) => {
        req.query; // $ExpectType ParsedQs
    });

    // Response will default to any type
    router.get("/", (req: Request, res: express.Response) => {
        res.json({});
    });

    // Response will be of Type provided
    router.get("/", (req: Request, res: express.Response<string>) => {
        res.json();
        res.json(1); // $ExpectError
        res.send(1); // $ExpectError
    });

    app.use((req, res, next) => {
        // hacky trick, router is just a handler
        router(req, res, next);
    });

    // Test append function
    app.use((req, res, next) => {
        res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
        res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
        res.append('Warning', '199 Miscellaneous warning');
    });

    app.use(router);

    // Test req.res, req.next, res.req should exists after middleware.init
    app.use((req, res) => {
        req.res;
        req.next;
        res.req;
    });

    // Test mounting sub-apps
    app.use('/sub-app', express());

    // Test on mount event
    app.on('mount', (parent) => true);

    // Test mountpath
    const mountPath: string|string[] = app.mountpath;

    app.listen(3000);

    const next: express.NextFunction = () => { };

    // Make sure we can use every generic
    const someOtherHandler: express.RequestHandler<{}, any, any , { foo: string }> = (req, res, next) => next();

    // Make sure we can use every generic
    const someOtherErrorHandler: express.ErrorRequestHandler<{}, any, any , { foo: string }> = (req, res) => {};
}

/***************************
 *                         *
 * Test with other modules *
 *                         *
 ***************************/

namespace node_tests {
    {
        // http.createServer can take express application
        const app: express.Application = express();
        http.createServer(app).listen(5678);
    }
}
