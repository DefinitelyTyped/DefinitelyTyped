import * as express from 'express-serve-static-core';

const app: express.Application = {} as any;
app.listen(3000);
app.listen(3000, () => {
    // no-op error callback
});

app.get('/:foo', req => {
    req.params.foo; // $ExpectType string
    req.params[0]; // $ExpectType string
    // $ExpectType string | false | null
    req.is(['application/json', 'application/xml']);
    // $ExpectType string | false | null
    req.is('audio/wav');
    // $ExpectError
    req.is(1);
});

app.route('/:foo').get(req => {
    req.params.foo; // $ExpectType string
    req.params[0]; // $ExpectType string
    // $ExpectType string | false | null
    req.is(['application/json', 'application/xml']);
    // $ExpectType string | false | null
    req.is('audio/wav');
    // $ExpectError
    req.is(1);
});

// Params can used as an array
app.get<express.ParamsArray>('/*', req => {
    req.params[0]; // $ExpectType string
    req.params.length; // $ExpectType number
});

// Params can used as an array - under route
app.route('/*').get<express.ParamsArray>(req => {
    req.params[0]; // $ExpectType string
    req.params.length; // $ExpectType number
});

// Params can be a custom type
// NB. out-of-the-box all params are strings, however, other types are allowed to accomadate request validation/coersion middleware
app.get<{ foo: string; bar: number }>('/:foo/:bar', req => {
    req.params.foo; // $ExpectType string
    req.params.bar; // $ExpectType number
    req.params.baz; // $ExpectError
});

// Params can be a custom type - under route
app.route('/:foo/:bar').get<{ foo: string; bar: number }>(req => {
    req.params.foo; // $ExpectType string
    req.params.bar; // $ExpectType number
    req.params.baz; // $ExpectError
});

// Query can be a custom type
app.get<{}, any, any, { q: string }>('/:foo', req => {
    req.query.q; // $ExpectType string
    req.query.a; // $ExpectError
});

// Query can be a custom type - under route
app.route('/:foo').get<{}, any, any, { q: string }>(req => {
    req.query.q; // $ExpectType string
    req.query.a; // $ExpectError
});

// Query will be defaulted to Query type
app.get('/:foo', req => {
    req.query; // $ExpectType ParsedQs
});

// Query will be defaulted to Query type - under route
app.route('/:foo').get(req => {
    req.query; // $ExpectType ParsedQs
});

// Next can receive a Error parameter to delegate to Error handler
app.get('/nexterr', (req, res, next) => {
    next(new Error('dummy')); // $ExpectType void
});

// Next can receive a 'router' parameter to fall back to next router
app.get('/nextrouter', (req, res, next) => {
    next('router'); // $ExpectType void
});

// Next can receive a 'route' parameter to fall back to next route
app.get('/nextroute', (req, res, next) => {
  next('route'); // $ExpectType void
});

// Default types
app.post('/', (req, res) => {
    req.params[0]; // $ExpectType string

    req.body; // $ExpectType any
    res.send('ok'); // $ExpectType Response<any, Record<string, any>, number>
});

// Default types - under route
app.route('/').post((req, res) => {
    req.params[0]; // $ExpectType string

    req.body; // $ExpectType any
    res.send('ok'); // $ExpectType Response<any, Record<string, any>, number>
});

// No params, only response body type
app.get<never, { foo: string }>('/', (req, res) => {
    req.params.baz; // $ExpectError

    res.send({ foo: 'ok' }); // $ExpectType Response<{ foo: string; }, Record<string, any>, number>
    req.body; // $ExpectType any
});

// No params, only response body type - under route
app.route('/').get<never, { foo: string }>((req, res) => {
    req.params.baz; // $ExpectError

    res.send({ foo: 'ok' }); // $ExpectType Response<{ foo: string; }, Record<string, any>, number>
    req.body; // $ExpectType any
});

// No params, request body type and response body type
app.post<never, { foo: string }, { bar: number }>('/', (req, res) => {
    req.params.baz; // $ExpectError

    res.send({ foo: 'ok' }); // $ExpectType Response<{ foo: string; }, Record<string, any>, number>
    req.body.bar; // $ExpectType number

    res.json({ baz: 'fail' }); // $ExpectError
    req.body.baz; // $ExpectError
});

// No params, request body type and response body type - under route
app.route('/').post<never, { foo: string }, { bar: number }>((req, res) => {
    req.params.baz; // $ExpectError

    res.send({ foo: 'ok' }); // $ExpectType Response<{ foo: string; }, Record<string, any>, number>
    req.body.bar; // $ExpectType number

    res.json({ baz: 'fail' }); // $ExpectError
    req.body.baz; // $ExpectError
});

app.engine('ntl', (_filePath, _options, callback) => {
    callback(new Error('not found.'));
});

// Status test
{
    type E = express.Response<unknown, any, 'abc'>; // $ExpectError
    type B = express.Response<unknown, any, 123>;
    type C = Parameters<B['status']>[0]; // $ExpectType 123
    type D = Parameters<B['sendStatus']>[0]; // $ExpectType 123
}

// Locals can be a custom type
app.get<{}, any, any, {}, { foo: boolean }>('/locals', (req, res, next) => {
    res.locals.foo; // $ExpectType boolean
    res.locals.bar; // $ExpectError
    res.send({ foo: 'ok' }); // $ExpectType Response<any, { foo: boolean; }, number>
});
