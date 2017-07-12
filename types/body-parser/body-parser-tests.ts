import * as express from 'express';
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

// send any data, it should be parsed and printed
app.all('/', (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(8080);
