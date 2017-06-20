import * as express from 'express';

namespace express_tests {

    var app = express();

    app.engine('jade', require('jade').__express);
    app.engine('html', require('ejs').renderFile);

    express.static.mime.define({
	'application/fx': ['fx']
    });
    app.use('/static', express.static(__dirname + '/public'));

    // simple logger
    app.use(function(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
    });

    app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    console.error(err);
    next(err);
    });


    app.get('/', function(req, res) {
    res.send('hello world');
    });

    const router = express.Router({ caseSensitive: true, mergeParams: true, strict: true });

    const pathStr: string = 'test';
    const pathRE: RegExp = /test/;
    const path = true ? pathStr : pathRE;

    router.get(path);
    router.put(path)
    router.post(path);
    router.delete(path);
    router.get(pathStr);
    router.put(pathStr)
    router.post(pathStr);
    router.delete(pathStr);
    router.get(pathRE);
    router.put(pathRE)
    router.post(pathRE);
    router.delete(pathRE);

    router.use((req, res, next) => { next(); })
    router.route('/users')
    .get((req, res, next) => {
        let types: string[] = req.accepts();
        let type: string | boolean = req.accepts('json');
        type = req.accepts(['json', 'text']);
        type = req.accepts('json', 'text');

        let charsets: string[] = req.acceptsCharsets();
        let charset: string | boolean = req.acceptsCharsets('utf-8');
        charset = req.acceptsCharsets(['utf-8', 'utf-16']);
        charset = req.acceptsCharsets('utf-8', 'utf-16');

        let encodings: string[] = req.acceptsEncodings();
        let encoding: string | boolean = req.acceptsEncodings('gzip');
        encoding = req.acceptsEncodings(['gzip', 'deflate']);
        encoding = req.acceptsEncodings('gzip', 'deflate');

        let languages: string[] = req.acceptsLanguages();
        let language: string | boolean = req.acceptsLanguages('en');
        language = req.acceptsLanguages(['en', 'ja']);
        language = req.acceptsLanguages('en', 'ja');

        let existingHeader1 = req.get('existingHeader') as string;
        let nonExistingHeader1 = req.get('nonExistingHeader') as undefined;

        let existingHeader2 = req.header('existingHeader') as string;
        let nonExistingHeader2 = req.header('nonExistingHeader') as undefined;

        let existingHeader3 = req.headers.existingHeader as string;
        let nonExistingHeader3 = req.headers.nonExistingHeader as any as undefined;

        res.send(req.query['token']);
    });

    router.get('/user/:id', function(req, res, next) {
    if (req.params.id == 0) next('route');
    else next();
    }, function(req, res, next) {
    res.render('regular');
    });

    app.use((req, res, next) => {
    // hacky trick, router is just a handler
    router(req, res, next);
    });

    app.use(router);

    app.listen(3000);

    const next: express.NextFunction = () => { };
}

/***************************
 *                         *
 * Test with other modules *
 *                         *
 ***************************/
import * as http from 'http';


namespace node_tests {

    {
        // http.createServer can take express application
        const app: express.Application = express();
        http.createServer(app).listen(5678);
    }
}
