import * as http from 'http';
import express = require('express');
import { json, raw, text, urlencoded } from 'body-parser';

const app = express();

app.use(json());
app.use(raw());
app.use(text());
app.use(urlencoded());

const jsonParser = app.use(
    json({
        inflate: true,
        limit: '100kb',
        type: 'application/*',
        verify: (req: http.IncomingMessage, res: http.ServerResponse, buf: Buffer, encoding: string) => {
            return true;
        },
    }),
);
app.post('/api/users', jsonParser, (req, res) => {});
app.use(jsonParser);

const urlencodedParser = urlencoded({ extended: false });
app.post('/login', urlencodedParser, (req, res) => {
    res.send('welcome, ' + req.body.username);
});
app.use(urlencodedParser);

app.use(json({ type: 'application/*+json' }));
app.use(raw({ type: 'application/vnd.custom-type' }));
app.use(text({ type: 'text/html' }));

app.all('/', (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(8080);
