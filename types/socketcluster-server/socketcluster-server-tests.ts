// Adapted from README

// Using with basic http(s) module (example)

import http = require("http");
import * as socketClusterServer from "socketcluster-server";

let httpServer = http.createServer();
let scServer = socketClusterServer.attach(httpServer);

scServer.on("connection", socket => {
    // ... Handle new socket connections here
});

httpServer.listen(8000);

// Using with Express (example)

import serveStatic = require("serve-static");
import path = require("path");
import express = require("express");

const app = express();

app.use(serveStatic(path.resolve(__dirname, "public")));

httpServer = http.createServer();

// Attach express to our httpServer
httpServer.on("request", app);

// Attach socketcluster-server to our httpServer
scServer = socketClusterServer.attach(httpServer);

scServer.on("connection", socket => {
    // ... Handle new socket connections here
});

httpServer.listen(8000);
