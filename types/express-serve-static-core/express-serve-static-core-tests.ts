import * as express from 'express-serve-static-core';

const app: express.Application = {} as any;
app.listen(3000);
app.listen(3000, (err: any) => {
    // no-op error callback
});

app.get('/:foo', (req, res) => {
    req.params.foo; // $ExpectType string
    req.params[0]; // $ExpectType string
});

// Params can used as an array
app.get<express.ParamsArray>('/*', (req, res) => {
    req.params[0]; // $ExpectType string
    req.params.length; // $ExpectType number
});
