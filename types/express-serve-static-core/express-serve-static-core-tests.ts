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

// Params can used as an array
app.get<express.ParamsArray>('/*', req => {
    req.params[0]; // $ExpectType string
    req.params.length; // $ExpectType number
});

// Params can be a custom type
// NB. out-of-the-box all params are strings, however, other types are allowed to accomadate request validation/coersion middleware
app.get<{ foo: string, bar: number }>('/:foo/:bar', req => {
    req.params.foo; // $ExpectType string
    req.params.bar; // $ExpectType number
    req.params.baz; // $ExpectError
});

// Query can be a custom type
app.get<{}, any, any, {q: string}>('/:foo', req => {
    req.query.q; // $ExpectType string
    req.query.a; // $ExpectError
});

// Query will be defaulted to Query type
app.get('/:foo', req => {
    req.query; // $ExpectType ParsedQs
});

// Next can receive a Error parameter to delegate to Error handler
app.get('/nexterr', (req, res, next) => {
    next(new Error("dummy")); // $ExpectType void
});

// Next can receive a 'router' parameter to fall back to next router
app.get('/nextrouter', (req, res, next) => {
    next('router'); // $ExpectType void
});

// Default types
app.post("/", (req, res) => {
    req.params[0]; // $ExpectType string

    req.body; // $ExpectType any
    res.send("ok"); // $ExpectType Response<any, number>
});

// No params, only response body type
app.get<never, { foo: string; }>("/", (req, res) => {
    req.params.baz; // $ExpectError

    res.send({ foo: "ok" }); // $ExpectType Response<{ foo: string; }, number>
    req.body; // $ExpectType any
});

// No params, request body type and response body type
app.post<never, { foo: string }, { bar: number }>('/', (req, res) => {
    req.params.baz; // $ExpectError

    res.send({ foo: "ok" }); // $ExpectType Response<{ foo: string; }, number>
    req.body.bar; // $ExpectType number

    res.json({ baz: "fail" }); // $ExpectError
    req.body.baz; // $ExpectError
});

app.engine('ntl', (_filePath, _options, callback) => {
    callback(new Error("not found."));
});

// Status test
{
    type E = express.Response<unknown, 'abc'>; // $ExpectError
    type B = express.Response<unknown, 123>;
    type C = Parameters<B['status']>[0];  // $ExpectType 123
    type D = Parameters<B['sendStatus']>[0];  // $ExpectType 123
}
