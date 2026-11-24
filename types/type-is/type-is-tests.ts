import http = require("http");
import typeis = require("type-is");

http.createServer((req, res) => {
    const istext = typeis(req, ["text/*"]);
    res.end(`you ${istext ? "sent" : "did not send"} me text`);

    // $ExpectType string | false | null
    typeis(req, ["json"]);
    typeis(req, ["application/*"]);
    typeis(req, ["application/json"]);
    typeis(req, ["html"]);
    typeis(req, ["html", "json"]);
    // $ExpectType string | false | null
    typeis(req, ...["html", "json"]);

    // as const readonly arrays
    const readonlyTypes = ["json", "html"] as const;
    // $ExpectType string | false | null
    typeis(req, readonlyTypes);

    // $ExpectType boolean
    typeis.hasBody(req);
    if (typeis.hasBody(req)) {
        req.on("data", chunk => {});
    }

    const mediaType = "application/json";

    // $ExpectType string | false
    typeis.is(mediaType, ["json"]);
    typeis.is(mediaType, ["application/*"]);
    typeis.is(mediaType, ["application/json"]);
    typeis.is(mediaType, ["html"]);
    typeis.is(mediaType, ["html", "json"]);
    // $ExpectType string | false
    typeis.is(mediaType, ...["html", "json"]);
    // $ExpectType string | false
    typeis.is(mediaType, readonlyTypes);
});

// plain object with headers
const customReq = {
    headers: {
        "content-type": "application/json",
        "content-length": "100",
    },
};
// $ExpectType string | false | null
typeis(customReq, ["json"]);
typeis(customReq, ["application/*"] as const);
// $ExpectType boolean
typeis.hasBody(customReq);

import express = require("express");
const app = express();

app.use((req, res, next) => {
    if (!typeis.hasBody(req)) {
        next();
        return;
    }

    switch (typeis(req, ["urlencoded", "json", "multipart"])) {
        case "urlencoded":
            throw new Error("implement urlencoded body parsing");
        case "json":
            throw new Error("implement json body parsing");
        case "multipart":
            throw new Error("implement multipart body parsing");
        default:
            res.statusCode = 415;
            res.end();
            break;
    }
});

// typeis.match(expected, actual)
typeis.match("text/html", "text/html"); // => true
typeis.match("*/html", "text/html"); // => true
typeis.match("text/*", "text/html"); // => true
typeis.match("*/*", "text/html"); // => true
typeis.match("*/*+json", "application/x-custom+json"); // => true
