import * as express from 'express-serve-static-core';

const app: express.Application = {} as any;
app.listen(3000);
app.listen(3000, (err: any) => {
    // no-op error callback
});

app.get('/:foo', req => {
    req.params.foo; // $ExpectType string
    req.params[0]; // $ExpectType string
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

// Response send methods accept an option generic type which will enforce
// a check on the parameter passed in.
app.get('/:foo', (req, res) => {
    res.send({ test: true });
    res.send<{ test: boolean }>({ test: true });
    res.send<{ test: boolean }>({ test: 'string' }); // $ExpectError

    res.json({ test: true });
    res.json<{ test: boolean }>({ test: true });
    res.json<{ test: boolean }>({ test: 'string' }); // $ExpectError

    res.jsonp({ test: true });
    res.jsonp<{ test: boolean }>({ test: true });
    res.jsonp<{ test: boolean }>({ test: 'string' }); // $ExpectError
});
