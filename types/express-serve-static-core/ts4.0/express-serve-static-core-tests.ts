import * as express from 'express-serve-static-core';

const app: express.Application<{
    aKey: 'aValue'
}> = {} as any;

// App.locals can be extended
app.locals.aKey; // $ExpectType "aValue"
// @ts-expect-error
app.locals.bKey;

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
    // @ts-expect-error
    req.is(1);
});

app.route('/:foo').get(req => {
    req.params.foo; // $ExpectType string
    req.params[0]; // $ExpectType string
    // $ExpectType string | false | null
    req.is(['application/json', 'application/xml']);
    // $ExpectType string | false | null
    req.is('audio/wav');
    // @ts-expect-error
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
// NB. out-of-the-box all params are strings, however, other types are allowed to accommodate request validation/coercion middleware
app.get<{ foo: string; bar: number }>('/:foo/:bar', req => {
    req.params.foo; // $ExpectType string
    req.params.bar; // $ExpectType number
    // @ts-expect-error
    req.params.baz;
});

// Params can be a custom type - under route
app.route('/:foo/:bar').get<{ foo: string; bar: number }>(req => {
    req.params.foo; // $ExpectType string
    req.params.bar; // $ExpectType number
    // @ts-expect-error
    req.params.baz;
});

// Query can be a custom type
app.get<{}, any, any, { q: string }>('/:foo', req => {
    req.query.q; // $ExpectType string
    // @ts-expect-error
    req.query.a;
});

// Query can be a custom type - under route
app.route('/:foo').get<{}, any, any, { q: string }>(req => {
    req.query.q; // $ExpectType string
    // @ts-expect-error
    req.query.a;
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
    // @ts-expect-error
    req.params.baz;

    res.send({ foo: 'ok' }); // $ExpectType Response<{ foo: string; }, Record<string, any>, number>
    req.body; // $ExpectType any
});

// No params, only response body type - under route
app.route('/').get<never, { foo: string }>((req, res) => {
    // @ts-expect-error
    req.params.baz;

    res.send({ foo: 'ok' }); // $ExpectType Response<{ foo: string; }, Record<string, any>, number>
    req.body; // $ExpectType any
});

// No params, request body type and response body type
app.post<never, { foo: string }, { bar: number }>('/', (req, res) => {
    // @ts-expect-error
    req.params.baz;

    res.send({ foo: 'ok' }); // $ExpectType Response<{ foo: string; }, Record<string, any>, number>
    req.body.bar; // $ExpectType number

    // @ts-expect-error
    res.json({ baz: 'fail' });
    // @ts-expect-error
    req.body.baz;
});

// No params, request body type and response body type - under route
app.route('/').post<never, { foo: string }, { bar: number }>((req, res) => {
    // @ts-expect-error
    req.params.baz;

    res.send({ foo: 'ok' }); // $ExpectType Response<{ foo: string; }, Record<string, any>, number>
    req.body.bar; // $ExpectType number

    // @ts-expect-error
    res.json({ baz: 'fail' });
    // @ts-expect-error
    req.body.baz;
});

// Cookies
app.get('/clearcookie', (req, res) => {
    res.clearCookie('auth'); // $ExpectType Response<any, Record<string, any>, number>
    res.clearCookie('auth', {
        path: '', // $ExpectType string
        // @ts-expect-error
        foo: '',
    });
});

app.engine('ntl', (_filePath, _options, callback) => {
    callback(new Error('not found.'));
});

// Status test
{
    // @ts-expect-error
    type E = express.Response<unknown, any, 'abc'>;
    type B = express.Response<unknown, any, 123>;
    type C = Parameters<B['status']>[0]; // $ExpectType 123
    type D = Parameters<B['sendStatus']>[0]; // $ExpectType 123
}

// Locals can be a custom type
app.get<{}, any, any, {}, { foo: boolean }>('/locals', (req, res, next) => {
    res.locals.foo; // $ExpectType boolean
    // @ts-expect-error
    res.locals.bar;
    res.send({ foo: 'ok' }); // $ExpectType Response<any, { foo: boolean; }, number>
});

// res.get returns string or undefined
app.get<{}, any, any, {}, { foo: boolean }>('/locals', (req, res, next) => {
    res.get('content-type'); // $ExpectType string | undefined
});
