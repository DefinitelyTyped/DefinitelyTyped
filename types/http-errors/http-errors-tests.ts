
import * as createError from 'http-errors';
import * as express from 'express';

var app = express();

declare global {
    namespace Express {
        export interface Request {
            user?: any
        }
    }
}

app.use(function (req, res, next) {
    if (!req.user) return next(createError(401, 'Please login to view this page.'));
    next();
});

/* Examples taken from https://github.com/jshttp/http-errors/blob/1.3.1/test/test.js */

// createError(status)
var err = createError(404);
console.log(err.name);
console.log(err.message);
console.log(err.status);
console.log(err.statusCode);
console.log(err.expose);
console.log(err.headers);

// createError(status, msg)
var err = createError(404, 'LOL');

// createError(status, props)
var err = createError(404, {id: 1});

// createError(props)
var err = createError({id: 1});
console.log((<any> err).id);

// createError(msg, status)
var err = createError('LOL', 404);

// createError(msg)
var err = createError('LOL');

// createError(msg, props)
var err = createError('LOL', {id: 1});

// createError(err)
var err = createError(new Error('LOL'));

// createError(err, props)
var err = createError(new Error('LOL'), {id: 1});

// createError(status, err, props)
var err = createError(404, new Error('LOL'), {id: 1});

// createError(status, msg, props)
var err = createError(404, 'LOL', {id: 1});

// createError(status, msg, { expose: false })
var err = createError(404, 'LOL', {expose: false})

// new createError.NotFound()
var err = new createError.NotFound();

// new createError.InternalServerError()
var err = new createError.InternalServerError();

// new createError['404']()
var err = new createError['404']();

//createError['404'](); // TypeScript should fail with "Did you mean to include 'new'?"
//new createError(); // TypeScript should fail with "Only a void function can be called with the 'new' keyword"

// Error messages can have custom messages
var err = new createError.NotFound('This might be a problem');
var err = new createError['404']('This might be a problem');

// 1.5.0 supports 421 - Misdirected Request
var err = new createError.MisdirectedRequest();
var err = new createError.MisdirectedRequest('Where should this go?');

let error: createError.HttpError;
console.log(error instanceof createError.HttpError);
