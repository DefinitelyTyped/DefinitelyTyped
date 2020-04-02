import * as express from 'express-serve-static-core';

const app: express.Application = {} as any;
app.listen(3000);
app.listen(3000, (err: any) => {
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

// Params can be a custom type that conforms to constraint
app.get<{ foo: string }>('/:foo', req => {
    req.params.foo; // $ExpectType string
    req.params.bar; // $ExpectError
});

// Params cannot be a custom type that does not conform to constraint
app.get<{ foo: number }>('/:foo', () => {}); // $ExpectError

// Default types
app.post("/", (req, res) => {
    req.params[0]; // $ExpectType string

    req.body; // $ExpectType any
    res.send("ok"); // $ExpectType Response<any>
});

// No params, only response body type
app.get<never, { foo: string; }>("/", (req, res) => {
    req.params.baz; // $ExpectError

    res.send({ foo: "ok" }); // $ExpectType Response<{ foo: string; }>
    req.body; // $ExpectType any
});

// No params, request body type and response body type
app.post<never, { foo: string }, { bar: number }>('/', (req, res) => {
    req.params.baz; // $ExpectError

    res.send({ foo: "ok" }); // $ExpectType Response<{ foo: string; }>
    req.body.bar; // $ExpectType number

    res.json({ baz: "fail" }); // $ExpectError
    req.body.baz; // $ExpectError
});

app.get('/', (req, res) => {
    const supportedLanguages = 'en' as string;
    const accepted = req.acceptsLanguages(supportedLanguages);
    if (accepted !== false) {
        accepted; // $ExpectType string
    }
});

app.get('/', (req, res) => {
    const supportedLanguages = 'en' as const;
    const accepted = req.acceptsLanguages(supportedLanguages);
    if (accepted !== false) {
        accepted; // $ExpectType "en"
    }
});

app.get('/', (req, res) => {
    const supportedLanguages = ['en', 'fi', 'sv'];
    const accepted = req.acceptsLanguages(supportedLanguages);
    if (accepted !== false) {
        accepted; // $ExpectType string
    }
});

app.get('/', (req, res) => {
    const supportedLanguages = ['en', 'fi', 'sv'] as const;
    const accepted = req.acceptsLanguages(supportedLanguages);
    if (accepted !== false) {
        accepted; // $ExpectType "en" | "fi" | "sv"
    }
});

app.get('/', (req, res) => {
    const supportedLanguages1 = 'en' as string;
    const supportedLanguages2 = 'fi' as string;
    const accepted = req.acceptsLanguages(supportedLanguages1, supportedLanguages2);
    if (accepted !== false) {
        accepted; // $ExpectType string
    }
});

app.get('/', (req, res) => {
    const supportedLanguages1 = 'en' as const;
    const supportedLanguages2 = 'fi' as const;
    const accepted = req.acceptsLanguages(supportedLanguages1, supportedLanguages2);
    if (accepted !== false) {
        accepted; // $ExpectType "en" | "fi"
    }
});
