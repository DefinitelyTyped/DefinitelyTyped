import socketIO = require('socket.io');
import cookieParser = require('cookie-parser');
import expressSession = require('express-session');
import mongoConnect = require('connect-mongo');
import passportSocketIo = require('passport.socketio');

// With Socket.io >= 1.0 | From the actual repository => https://github.com/jfromaniello/passport.socketio#readme

const sessionStore = new (mongoConnect(expressSession))({ url: '' });

const middleware = passportSocketIo.authorize({
    cookieParser: cookieParser(),
    key: 'express.sid',
    secret: 'session_secret',
    store: sessionStore,
    success: (data, accept) => accept(),
    fail: (data, message, error, accept) => {
        if (error) {
            accept(new Error(message));
        }
    },
});

socketIO().use(middleware);
