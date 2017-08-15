import * as createError from 'http-errors';
import * as express from 'express';

const app = express();

app.use((req, res, next) => {
    if (!req) return next(createError('Please login to view this page.', 401));
    next();
});

/* Examples taken from https://github.com/jshttp/http-errors/blob/1.3.1/test/test.js */

// createError(status)
let err = createError(404);
err; // $ExpectType HttpError
err.name; // $ExpectType string
err.message; // $ExpectType string
err.status; // $ExpectType number
err.statusCode; // $ExpectType number
err.expose; // $ExpectType boolean
err.headers; // $ExpectType { [key: string]: string; } | undefined

// createError(status, msg)
err = createError(404, 'LOL');

// createError(status, props)
err = createError(404, {id: 1});

// createError(props)
err = createError({id: 1});
// $ExpectType any
err.id;

// createError(msg, status)
err = createError('LOL', 404);

// createError(msg)
err = createError('LOL');

// createError(msg, props)
err = createError('LOL', {id: 1});

// createError(err)
err = createError(new Error('LOL'));

// createError(err, props)
err = createError(new Error('LOL'), {id: 1});

// createError(status, err, props)
err = createError(404, new Error('LOL'), {id: 1});

// createError(status, msg, props)
err = createError(404, 'LOL', {id: 1});

// createError(status, msg, { expose: false })
err = createError(404, 'LOL', {expose: false});

err = new createError.NotFound();
err = new createError.InternalServerError();
err = new createError[404]();

createError['404'](); // $ExpectError
new createError(); // $ExpectError

// Error messages can have custom messages
err = new createError.NotFound('This might be a problem');
err = new createError[404]('This might be a problem');

// 1.5.0 supports 421 - Misdirected Request
err = new createError.MisdirectedRequest();
err = new createError.MisdirectedRequest('Where should this go?');

// $ExpectType boolean
new Error() instanceof createError.HttpError;
