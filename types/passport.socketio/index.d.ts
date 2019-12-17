// Type definitions for passport.socketio 3.7
// Project: https://github.com/jfromaniello/passport.socketio#readme
// Definitions by: AhmedMKamal <https://github.com/AhmedMKamal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { Store } from 'express-session';
import { RequestHandler } from 'express';
import { PassportStatic } from 'passport';
import { Server, Socket } from 'socket.io';

export interface PassportSocketIoOptions {
    /**
     * the name of the cookie where express/connect stores its session_id.
     */
    key?: string;

    /**
     * the session_secret to parse the cookie.
     */
    secret?: string;

    /**
     * we NEED to use a sessionstore. No MemoryStore please.
     */
    store: Store;

    /**
     * the same middleware you registrer in express.
     */
    cookieParser?: RequestHandler;
    passport?: PassportStatic;

    /**
     * callback on success.
     */
    success?: (data: any, accept: (err?: any, accepted?: boolean) => void) => void;

    /**
     * callback on fail/error.
     */
    fail?: (data: any, message: string, critical: string, accept: (err?: any, accepted?: boolean) => void) => void;
}

export function authorize(options: PassportSocketIoOptions): (socket: Socket, fn: (err?: any) => void) => void;
export function filterSocketsByUser(io: Server, filter: (user: any) => boolean): Socket[];
