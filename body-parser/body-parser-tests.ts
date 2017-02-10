import * as express from 'express';
import {
    json,
    raw,
    text,
    urlencoded,
} from 'body-parser';

const app = express();

express.use(json());
express.use(raw());
express.use(text());
express.use(urlencoded());

// send any data, it should be parsed and printed
express.all('/', (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
});

express.listen(8080);
