import * as express from 'express';
import * as hpp from 'hpp';

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
