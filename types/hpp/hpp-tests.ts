import express = require('express');
import hpp = require('hpp');

const app = express();

app.use(hpp());

app.use(hpp({
    checkBody: true,
    checkBodyOnlyForContentType: 'urlencoded',
    checkQuery: true,
    whitelist: ['foo', 'bar']
}));

app.use(hpp({
    whitelist: 'foobar'
}));
