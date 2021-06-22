import * as express from 'express';
import * as hijackResponse from 'hijackresponse';

const app = express();

app.use((req, res, next) => {
    hijackResponse(res, (err, res) => {
        res.setHeader("X-Hijacked", "yes!");
        res.removeHeader("Content-Length");

        res.pipe(res);
    });

    next();
});
