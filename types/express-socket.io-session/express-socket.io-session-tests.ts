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

io.use(sharedsession(session));
io.use(sharedsession(session, { autoSave: true, saveUninitialized: true }));
io.use(sharedsession(session, cookieParser));
io.use(sharedsession(session, cookieParser, { autoSave: true, saveUninitialized: true }));
