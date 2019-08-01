import express = require('express');
import os = require('os');
import {
    parse,
    format,
    stream,
    union,
} from 'express-form-data';

const app = express();

const options = {
    uploadDir: os.tmpdir(),
    autoClean: true,
};

app.use(parse(options));
app.use(format());
app.use(stream());
app.use(union());

app.all('/', (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(8080);
