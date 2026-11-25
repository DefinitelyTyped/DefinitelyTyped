import express = require("express");
import serveStatic = require("serve-static");
import http = require("http");
import { HttpError } from "http-errors";
var app = express();

app.use(serveStatic("/1"));
app.use(serveStatic("/2", {
    acceptRanges: true,
    cacheControl: true,
    dotfiles: "allow",
    etag: true,
    extensions: ["html", "htm"],
    fallthrough: true,
    immutable: true,
    index: "index.html",
    lastModified: true,
    maxAge: 0,
    redirect: true,
    setHeaders: (res: express.Response, path: string, stat: any) => {
        res.header("Custom-Header", "value");
    },
}));
app.use(serveStatic("/3", {
    index: ["index.html", "index.htm"],
}));
app.use(serveStatic("/4", {
    index: false,
}));
app.use(serveStatic("/5", {
    extensions: false,
}));

// as const readonly arrays
const readonlyExtensions = ["html", "htm"] as const;
const readonlyIndex = ["index.html", "index.htm"] as const;

app.use(serveStatic("/6", {
    extensions: readonlyExtensions,
    index: readonlyIndex,
}));
