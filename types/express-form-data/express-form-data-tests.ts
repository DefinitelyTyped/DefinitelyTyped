import express = require('express');
import {
    parse,
    format,
    stream,
    union,
} from 'express-form-data';

const app = express();

app.use(parse());
app.use(format());
app.use(stream());
app.use(union());

app.all('/', (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(8080);
