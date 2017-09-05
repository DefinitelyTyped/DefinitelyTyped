import * as express from 'express';

const app = express();

// tslint:disable-next-line:no-var-requires
app.engine('jade', require('jade').__express);
// tslint:disable-next-line:no-var-requires
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
res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
res.send('hello world');
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

    const existingHeader1 = req.get('existingHeader') as string;
    const nonExistingHeader1 = req.get('nonExistingHeader') as undefined;

    const existingHeader2 = req.header('existingHeader') as string;
    const nonExistingHeader2 = req.header('nonExistingHeader') as undefined;

    const existingHeader3 = req.headers.existingHeader as string;
    const nonExistingHeader3 = req.headers.nonExistingHeader as any as undefined;

    res.send(req.query['token']);
});

router.get('/user/:id', (req, res, next) => {
  if (req.params.id === 0) {
    next('route');
  } else {
    next();
  }
}, (req, res, next) => {
  res.render('regular');
});

app.use((req, res, next) => {
  // hacky trick, router is just a handler
  router(req, res, next);
});

app.use(router);

app.listen(3000);

const next: express.NextFunction = () => { };

/***************************
 *                         *
 * Test with other modules *
 *                         *
 ***************************/
import * as http from 'http';

const app2: express.Application = express();
// http.createServer can take express application
http.createServer(app2).listen(5678);
