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
let err = create(404);
err; // $ExpectType HttpError
err.name; // $ExpectType string
err.message; // $ExpectType string
err.status; // $ExpectType number
err.statusCode; // $ExpectType number
err.expose; // $ExpectType boolean
err.headers; // $ExpectType { [key: string]: string; } | undefined

// create(status, msg)
err = create(404, 'LOL');

// create(status, props)
err = create(404, {id: 1});

// create(status, props) with status prop
err = create(404, {
    id: 1,
    status: 500
});

// create(status, props) with statusCode prop
err = create(404, {
    id: 1,
    statusCode: 500
});

// create(props)
err = create({id: 1});
// $ExpectType any
err.id;

// create(msg, status)
err = create('LOL', 404);

// create(msg)
err = create('LOL');

// create(msg, props)
err = create('LOL', {id: 1});

// create(err)
err = create(new Error('LOL'));

// create(err, props)
err = create(new Error('LOL'), {id: 1});

// create(status, err, props)
err = create(404, new Error('LOL'), {id: 1});

// create(status, msg, props)
err = create(404, 'LOL', {id: 1});

// create(status, msg, { expose: false })
err = create(404, 'LOL', {expose: false});

err = new create.NotFound();
err = new create.InternalServerError();
err = new create[404]();
err = new create['404']();

create['404'](); // $ExpectError
new create(); // $ExpectError

// Error messages can have custom messages
err = new create.NotFound('This might be a problem');
err = new create[404]('This might be a problem');

// 1.5.0 supports 421 - Misdirected Request
err = new create.MisdirectedRequest();
err = new create.MisdirectedRequest('Where should this go?');

// $ExpectType HttpError
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
