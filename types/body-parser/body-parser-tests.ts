import * as http from "http";
import express = require("express");
import { json, raw, text, urlencoded } from "body-parser";

import bodyParser = require("body-parser");

// expected: deprecated
bodyParser(); // $ExpectType NextHandleFunction
// expected: no deprecation
bodyParser.json();
bodyParser.raw();
bodyParser.text();
bodyParser.urlencoded();

const app = express();

app.use(json());
app.use(raw());
app.use(text());
app.use(urlencoded());

const jsonParser = app.use(
    json({
        inflate: true,
        limit: "100kb",
        type: "application/*",
        verify: (req: http.IncomingMessage, res: http.ServerResponse, buf: Buffer, encoding: string) => {
            return true;
        },
    }),
);
app.post("/api/users", jsonParser, (req, res) => {});
app.use(jsonParser);

const urlencodedParser = urlencoded({ extended: false });
app.post("/login", urlencodedParser, (req, res) => {
    res.send("welcome, " + req.body.username);
});
app.use(urlencodedParser);

// body-parser 2.x urlencoded options (depth also exists in 1.20.3+)
app.use(urlencoded({ extended: true, depth: 10 }));
app.use(
    urlencoded({
        extended: false,
        parameterLimit: 500,
        defaultCharset: "iso-8859-1",
        charsetSentinel: true,
        interpretNumericEntities: true,
    }),
);
// @ts-expect-error
urlencoded({ depth: "32" });
// @ts-expect-error
urlencoded({ charsetSentinel: "yes" });

// defaultCharset is accepted by json in 2.x
app.use(json({ defaultCharset: "utf-8", strict: false }));
app.use(text({ defaultCharset: "iso-8859-1" }));
// @ts-expect-error
raw({ defaultCharset: "utf-8" });

// bare bodyParser() still type-checks for Express 4 / body-parser 1.x users
bodyParser({ extended: true, limit: "1mb", defaultCharset: "latin1" }); // $ExpectType NextHandleFunction

app.use(json({ type: "application/*+json" }));
app.use(raw({ type: "application/vnd.custom-type" }));
app.use(text({ type: "text/html" }));

app.all("/", (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(8080);
