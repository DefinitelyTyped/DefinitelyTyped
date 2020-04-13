// Adapted from README

// Using with basic http(s) module (example)

import http = require("http");
import WebSocket = require("ws");
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

// Tests of the server-side socket

scServer.on("connection", socket => {
    // Check the standard events, with normal subscription,
    // one-time subscription and unsubscription.

    const errorListener: (error: Error) => void = err => {
        console.log(err);
    };
    socket.on("error", errorListener);
    socket.once("error", errorListener);
    socket.off("error", errorListener);
    socket.off("error");

    const messageListener: (message: WebSocket.Data) => void = message => {
        console.log(message);
    };
    socket.on("message", messageListener);
    socket.once("message", messageListener);
    socket.off("message", messageListener);
    socket.off("message");

    socket.on("raw", messageListener);
    socket.once("raw", messageListener);
    socket.off("raw", messageListener);
    socket.off("raw");

    const closeListener: (code: number, data?: any) => void = (code, data) => {
        console.log(`${code} ${data}`);
    };
    socket.on("connectAbort", closeListener);
    socket.once("connectAbort", closeListener);
    socket.off("connectAbort", closeListener);
    socket.off("connectAbort");

    socket.on("disconnect", closeListener);
    socket.once("disconnect", closeListener);
    socket.off("disconnect", closeListener);
    socket.off("disconnect");

    socket.on("close", closeListener);
    socket.once("close", closeListener);
    socket.off("close", closeListener);
    socket.off("close");

    const authStateChangeListener: (stateChangeData: socketClusterServer.SCServerSocket.StateChangeData) => void = data => {
        console.log(data);
    };
    socket.on("authStateChange", authStateChangeListener);
    socket.once("authStateChange", authStateChangeListener);
    socket.off("authStateChange", authStateChangeListener);
    socket.off("authStateChange");

    const authenticateListener: (authToken?: socketClusterServer.SCServer.AuthToken) => void = authToken => {
        console.log(authToken);
    };
    socket.on("authenticate", authenticateListener);
    socket.once("authenticate", authenticateListener);
    socket.off("authenticate", authenticateListener);
    socket.off("authenticate");

    const deauthenticateListener: (oldToken?: socketClusterServer.SCServer.AuthToken) => void = oldToken => {
        console.log(oldToken);
    };
    socket.on("deauthenticate", deauthenticateListener);
    socket.once("deauthenticate", deauthenticateListener);
    socket.off("deauthenticate", deauthenticateListener);
    socket.off("deauthenticate");

    // Check custom events, with normal subscription,
    // one-time subscription and unsubscription.
    const customEventListener: (data?: any) => void = data => {
        console.log(data);
    };
    socket.on("custom-event", customEventListener);
    socket.once("custom-event", customEventListener);
    socket.off("custom-event", customEventListener);
    socket.off("custom-event");
});
