import NamedRouter = require('named-routes');
import * as express from 'express';
const app = express();

// constructor and `RouterOptions`
let router = new NamedRouter();
router = new NamedRouter({ caseSensitive: true });

router.extendExpress(app); // $ExpectType NamedRouter
router.registerAppHelpers(app); // $ExpectType NamedRouter
app.get('/path/:id', 'foo', () => {}); // $ExpectType Express
app.namedRoutes.build('foo', { id: 1 }); // $ExpectType string

const expressRouter = express.Router();
router.extendExpress(expressRouter); // $ExpectType NamedRouter
expressRouter.post('/path/:id', 'foo', () => {}); // $ExpectType Router

// `RouteOptions`
router.add('get', '/path/:id', () => {}); // $ExpectType void
router.add('get', '/path/:id', () => {}, { name: 'foo' }); // $ExpectType void
router.add('get', '/path/:id', () => {}, { name: 'foo', recursiveWildcard: true }); // $ExpectType void
router.add('get', '/path/:id', () => {}, { name: 'foo', caseSensitive: true }); // $ExpectType void
router.add('get', '/path/:id', () => {}, { name: 'foo', wildcardInPairs: true }); // $ExpectType void

// `RouteParams`
router.build('foo', { string: 'a' }); // $ExpectType string
router.build('foo', { stringArray: [ 'a', 'b' ] }); // $ExpectType string
router.build('foo', { number: 1 }); // $ExpectType string
router.build('foo', { numberArray: [ 1, 2 ] }); // $ExpectType string
router.build('foo', { boolean: true }); // $ExpectType string
router.build('foo', { booleanArray: [ true, false ] }); // $ExpectType string
router.build('foo', { null: null }); // $ExpectType string

const req: express.Request = {} as any;
router.dispatch(req); // $ExpectType void
