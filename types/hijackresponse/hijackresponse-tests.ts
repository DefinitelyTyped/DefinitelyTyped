import express from "express";
import hijackResponse from "hijackresponse";

const app = express();

app.use((req, res, next) => {
    hijackResponse(res, (err, res) => {
        res.setHeader("X-Hijacked", "yes!");
        res.removeHeader("Content-Length");

        res.pipe(res);
    });

    next();
});
