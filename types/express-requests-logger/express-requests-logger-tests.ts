import audit = require("express-requests-logger");
import bunyan = require("bunyan");
import express = require("express");

const app = express();
app.use(
    audit({
        logger: bunyan.createLogger({ name: "custom logger" }),
        excludeURLs: ["health", "metrics"],
        request: {
            maskBody: ["password"],
            excludeHeaders: ["authorization"],
            excludeBody: ["creditCard"],
            maskHeaders: ["header1"],
            maxBodyLength: 50,
        },
        response: {
            maskBody: ["session_token"],
            excludeHeaders: ["*"],
            excludeBody: ["*"],
            maskHeaders: ["header1"],
            maxBodyLength: 50,
            levels: {
                "2xx": "info",
                401: "warn",
                "4xx": "info",
                503: "warn",
                "5xx": "error",
            },
        },
    }),
    (req, res, next) => {
        req.maxBodyLength; // $ExpectType number
        res.maxBodyLength; // $ExpectType number
        res.timestamp; // $ExpectType Date
    },
);

app.listen();
