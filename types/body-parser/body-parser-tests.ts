import * as http from 'http';
import express = require('express');
import {
    json,
    raw,
    text,
    urlencoded,
} from 'body-parser';

const app = express();

app.use(json());
app.use(raw());
app.use(text());
app.use(urlencoded());

const jsonParser = app.use(json({
    inflate: true,
    limit: '100kb',
    type: 'application/*',
    verify: (
        req: http.IncomingMessage,
        res: http.ServerResponse,
        buf: Buffer,
        encoding: string
    ) => {
        return true;
    }
}));
app.use(jsonParser);

// send any data, it should be parsed and printed
app.all('/', (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(8080);
