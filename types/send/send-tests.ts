import express = require("express");
import send = require("send");

const app = express();

app.get("/test.html", (req, res) => {
    send(req, "/test.html", {
        immutable: true,
        maxAge: 0,
        root: __dirname + "/wwwroot",
    }).pipe(res);
});

app.get("/test.html", (req, res) => {
    send(req, "/test.html")
        .on("error", (err: any) => {
            res.statusCode = err.status || 500;
            res.end(err.message);
        })
        .on("directory", () => {
            res.statusCode = 301;
            res.setHeader("Location", req.url + "/");
            res.end(`Redirecting to ${req.url}/`);
        })
        .on("headers", (res: any, path: string, stat: any) => {
            res.setHeader("Content-Disposition", "attachment");
        })
        .pipe(res);
});

// Test readonly array options (e.g. from 'as const')
const readonlyExts = ["html", "htm"] as const;
const readonlyIndex = ["index.html", "index.htm"] as const;

app.get("/readonly-options", (req, res) => {
    const s = send(req, "/test.html", {
        extensions: readonlyExts,
        index: readonlyIndex,
    });
    s.pipe(res);
});
