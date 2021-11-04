// Type definitions for express-socket.io-session 1.3
// Project: https://github.com/oskosk/express-socket.io-session
// Definitions by: AylaJK <https://github.com/AylaJK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import socketio = require('socket.io');
import express = require('express');
import session = require('express-session');

declare module "socket.io" {
    interface Handshake {
        session?: session.Session & Partial<session.SessionData> | undefined;
        sessionID?: string | undefined;
    }
}

declare function sharedsession(
    expressSessionMiddleware: express.RequestHandler,
    cookieParserMiddleware: express.RequestHandler,
    options?: sharedsession.SharedSessionOptions): sharedsession.SocketIoSharedSessionMiddleware;

declare function sharedsession(
    expressSessionMiddleware: express.RequestHandler,
    options?: sharedsession.SharedSessionOptions): sharedsession.SocketIoSharedSessionMiddleware;

declare namespace sharedsession {
    interface SharedSessionOptions {
        autoSave?: boolean | undefined;
        saveUninitialized?: boolean | undefined;
    }

    type SocketIoSharedSessionMiddleware = (socket: socketio.Socket, next: (err?: any) => void) => void;
}

export = sharedsession;
