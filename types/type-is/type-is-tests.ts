import http = require('http');
import typeis = require('type-is');

http.createServer((req, res) => {
    const istext = typeis(req, ['text/*']);
    res.end(`you ${istext ? 'sent' : 'did not send'} me text`);

    // $ExpectType string | false | null
    typeis(req, ['json']);
    typeis(req, ['application/*']);
    typeis(req, ['application/json']);
    typeis(req, ['html']);
    typeis(req, ['html', 'json']);
    // $ExpectType string | false | null
    typeis(req, ...['html', 'json']);

    // $ExpectType boolean
    typeis.hasBody(req);
    if (typeis.hasBody(req)) {
        req.on('data', chunk => {});
    }

    const mediaType = 'application/json';

    // $ExpectType string | false
    typeis.is(mediaType, ['json']);
    typeis.is(mediaType, ['application/*']);
    typeis.is(mediaType, ['application/json']);
    typeis.is(mediaType, ['html']);
    typeis.is(mediaType, ['html', 'json']);
    // $ExpectType string | false
    typeis.is(mediaType, ...['html', 'json']);
});

import express = require('express');
const app = express();

app.use((req, res, next) => {
    if (!typeis.hasBody(req)) {
        next();
        return;
    }

    switch (typeis(req, ['urlencoded', 'json', 'multipart'])) {
        case 'urlencoded':
            throw new Error('implement urlencoded body parsing');
        case 'json':
            throw new Error('implement json body parsing');
        case 'multipart':
            throw new Error('implement multipart body parsing');
        default:
            res.statusCode = 415;
            res.end();
            break;
    }
});
