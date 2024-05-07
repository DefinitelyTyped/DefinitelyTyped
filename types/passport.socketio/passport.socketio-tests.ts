import socketIO = require("socket.io");
import cookieParser = require("cookie-parser");
import expressSession = require("express-session");
import passportSocketIo = require("passport.socketio");

// With Socket.io >= 1.0 | From the actual repository => https://github.com/jfromaniello/passport.socketio#readme

const middleware = passportSocketIo.authorize({
    cookieParser: cookieParser(),
    key: "express.sid",
    secret: "session_secret",
    store: new expressSession.MemoryStore(), // memory store is fine for tests
    success: (data, accept) => accept(),
    fail: (data, message, error: boolean, accept) => {
        if (error) {
            accept(new Error(message));
        }
    },
});

socketIO().use(middleware);
