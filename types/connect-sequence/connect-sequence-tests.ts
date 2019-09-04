import ConnectSequence from 'connect-sequence';
import express, { RequestHandler } from 'express';

const appendMiddleware: RequestHandler = (req, res, next) => {};

const appendListMiddleware1: RequestHandler = (req, res, next) => {};
const appendListMiddleware2: RequestHandler = (req, res, next) => {};

const appendIfMiddleware: RequestHandler = (req, res, next) => {};

const appendListIfMiddleware1: RequestHandler = (req, res, next) => {};
const appendListIfMiddleware2: RequestHandler = (req, res, next) => {};

const app = express();

app.route('/api/products/:productId').get((req, res, next) => {
    const seq = new ConnectSequence(req, res, next);

    seq.append(appendMiddleware)
        .appendList([appendListMiddleware1, appendListMiddleware2])
        .appendIf(true, appendIfMiddleware)
        .appendListIf(false, [appendListIfMiddleware1, appendListIfMiddleware2])
        .run();
});
