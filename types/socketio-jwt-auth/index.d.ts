// Type definitions for socketio-jwt-auth 0.0
// Project: https://github.com/adcentury/socketio-jwt-auth#readme
// Definitions by: Peter Harris <https://github.com/codeanimal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import SocketIO = require("socket.io");

/**
 * This function returns a middleware function for use with Socket.IO that authenticates a new connection.
 * 
 * @param options is an object literal that contains options.
 * @param verify is a function with two args payload, and done.
 */
export function authenticate(options: authOptions, verify: verifyFunc): (socket: SocketIO.Socket, fn: (err?: any) => void) => void;

/**
 * This is an object literal that contains options.
 */
export interface authOptions {
    secret: string;
    algorithm?: string;
    succeedWithoutToken?: boolean;
}

/**
 * This is a function with two args payload, and done.
 * 
 * `payload` is the decoded JWT payload
 * `done` is an error-first callback with three args: done(err, user, message).
 */
export type verifyFunc = (payload: any, done: (err?: Error | null, user?: any, message?: string) => void) => void;
