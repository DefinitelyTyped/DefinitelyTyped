/**
 * Create by AylaJK on 05/09/2018
 */
import express = require('express');
const app = express();

import http = require('http');
const server = http.createServer(app);

import expresssession = require('express-session');
const session = expresssession({
    secret: 'my-secret',
    resave: true,
    saveUninitialized: true,
});

import cookieparser = require('cookie-parser');
const cookieParser = cookieparser('my-secret');

import socketio = require('socket.io');
const io = socketio(server);

import sharedsession = require('express-socket.io-session');

declare module 'express-session' {
    interface SessionData {
        sessionEntry: any;
        anotherSessionEntry: any;
    }
}

io.use(sharedsession(session));
io.use(sharedsession(session, { autoSave: true, saveUninitialized: true }));
io.use(sharedsession(session, cookieParser));
io.use(sharedsession(session, cookieParser, { autoSave: true, saveUninitialized: true }));

io.on('connection', socket => {
    const sessionID = [socket.handshake.sessionID, socket.handshake.session!.id];
    const sessionData = socket.handshake.session && [
        socket.handshake.session.sessionEntry,
        socket.handshake.session.anotherSessionEntry,
    ];
    socket.handshake.session!.touch();
    socket.handshake.session!.regenerate(() => {});
    socket.handshake.session!.save(() => {});
    socket.handshake.session!.reload(() => {});
    socket.handshake.session!.destroy(() => {});
});
