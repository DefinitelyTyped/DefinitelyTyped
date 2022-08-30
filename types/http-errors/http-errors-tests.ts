import create = require('http-errors');
import express = require('express');
import * as util from 'util';

const app = express();

app.use((req, res, next) => {
    if (!req) {
        next(create('Please login to view this page.', 401));
        return;
    }
    next();
});

/* Examples taken from https://github.com/jshttp/http-errors/blob/1.6.2/test/test.js */

// create(status)
const err = create(404);
err; // $ExpectType HttpError<404>
err.name; // $ExpectType string
err.message; // $ExpectType string
err.status; // $ExpectType 404
err.statusCode; // $ExpectType 404
err.expose; // $ExpectType boolean
err.headers; // $ExpectType { [key: string]: string; } | undefined

// create(status, msg)
// $ExpectType HttpError<404>
create(404, 'LOL');

// create(status, props)
// $ExpectType HttpError<404>
create(404, {id: 1});

// create(status, props) with status prop
// $ExpectType HttpError<404>
create(404, {
    id: 1,
    status: 500
});

// create(status, props) with statusCode prop
// $ExpectType HttpError<404>
create(404, {
    id: 1,
    statusCode: 500
});

// create(props)
// $ExpectType HttpError<number>
create({id: 1});
// $ExpectType any
err.id;

// create(msg, status)
// $ExpectType HttpError<number>
create('LOL', 404);

// create(msg)
// $ExpectType HttpError<number>
create('LOL');

// create(msg, props)
// $ExpectType HttpError<number>
create('LOL', {id: 1});

// create(err)
// $ExpectType HttpError<number>
create(new Error('LOL'));

// create(err, props)
// $ExpectType HttpError<number>
create(new Error('LOL'), {id: 1});

// create(status, err, props)
// $ExpectType HttpError<404>
create(404, new Error('LOL'), {id: 1});

// create(status, msg, props)
// $ExpectType HttpError<404>
create(404, 'LOL', {id: 1});

// create(status, msg, { expose: false })
// $ExpectType HttpError<404>
create(404, 'LOL', {expose: false});

new create.NotFound(); // $ExpectType HttpError<404>
new create.InternalServerError(); // $ExpectType HttpError<500>
new create[404](); // $ExpectType HttpError<404>
new create['404'](); // $ExpectType HttpError<404>

// @ts-expect-error
create['404']();
// @ts-expect-error
new create();

// Error messages can have custom messages
new create.NotFound('This might be a problem'); // $ExpectType HttpError<404>
new create[404]('This might be a problem'); // $ExpectType HttpError<404>

// 1.5.0 supports 421 - Misdirected Request
new create.MisdirectedRequest(); // $ExpectType HttpError<421>
new create.MisdirectedRequest('Where should this go?'); // $ExpectType HttpError<421>

// $ExpectType HttpError<number>
new create.HttpError();

// $ExpectType boolean
new Error() instanceof create.HttpError;

if (err instanceof create.HttpError) {
    err.statusCode;
}

// should support err instanceof Error
create(404) instanceof Error;
(new create['404']()) instanceof Error;
(new create['500']()) instanceof Error;

// should support err instanceof exposed constructor
create(404) instanceof create.NotFound;
create(500) instanceof create.InternalServerError;
(new create['404']()) instanceof create.NotFound;
(new create['500']()) instanceof create.InternalServerError;
(new create.NotFound()) instanceof create.NotFound;
(new create.InternalServerError()) instanceof create.InternalServerError;

// should support err instanceof HttpError
create(404) instanceof create.HttpError;
(new create['404']()) instanceof create.HttpError;
(new create['500']()) instanceof create.HttpError;

// should support util.isError()
util.isError(create(404));
util.isError(new create['404']());
util.isError(new create['500']());

// should support isHttpError
create.isHttpError(1); // non-http-error type
create.isHttpError(new create['404']()); // http error type
