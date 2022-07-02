import express = require('express');
import absoluteUrl = require('absolute-url');

const app = express();

app.use(absoluteUrl());

app.get('/', (req) => {
    absoluteUrl.attach(req);

    const url: string = req.absoluteUrl();
});
