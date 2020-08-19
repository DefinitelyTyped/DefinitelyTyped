import express = require('express');
import grant = require('grant-express');

let app = express();

app.use(
    grant({
        defaults: {
            protocol: 'http',
            host: 'localhost:8080',
            transport: 'session',
            state: true,
        },
        google: {
            key: 'GOOGLE_CLIENT_ID',
            secret: 'GOOGLE_CLIENT_SECRET',
            scope: ['profile', 'email'],
            callback: '/login/google',
        },
    }),
);
