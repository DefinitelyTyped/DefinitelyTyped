import express = require('express');
import favicon = require('serve-favicon');

const app = express();

app.use(
    favicon(__dirname + '/public/favicon.ico', {
        maxAge: 86400000,
    }),
);

app.use(
    favicon(__dirname + '/public/favicon.ico', {
        maxAge: '2 days',
    }),
);

app.use(
    favicon(__dirname + '/public/favicon.ico', {
        maxAge: '2d',
    }),
);
