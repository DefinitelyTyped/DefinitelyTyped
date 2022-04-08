// Type definitions for socketio-jwt 0.2
// Project: https://github.com/auth0/socketio-jwt
// Definitions by: Eric Hallander <https://github.com/ehallander9591>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import SocketIO = require("socket.io");

/**
 * This function returns a middleware function for use with Socket.IO that authenticates a new connection.
 *
 * @param options is an object literal that contains options.
 * @param callback function - not implemented
 */
export function authorize(options: JwtAuthOptions, callback?: JwtAuthorizeCallback): (socket: SocketIO.Socket) => void;

/**
 * This is an object literal that contains options.
 */
export interface JwtAuthOptions {
    secret: string | JwtSecretFunc;
    timeout?: number; // In milliseconds to handle the second round trip.
    callback?: boolean; // To disconnect socket server-side without a client-side callback if no valid token.
    decodedPropertyName?: string; // Property to store the decoded token to.
    handshake?: boolean; // Used to trigger a single round trip authentication.
}

export interface JwtData {
    message: string;
    code: string;
    type: string;
}

/**
 * An Error Object used by the package.
 */
export class UnauthorizedError extends Error {
    constructor(code: string, error: Error);

    message: string;
    inner: Error;
    data: JwtData;
}

/**
 * This is a function with two args payload, and done.
 *
 * `request` is the original request
 * `payload` is the decoded JWT payload
 * `callback` is an error-first callback defined below
 */
export type JwtSecretFunc = (request: any, payload: any, callback: JwtSecretFuncCallback) => void;

/**
 * If JwtAuthOptions.secret is a function, then this is the signature of the callback function provided to that function
 */
export type JwtSecretFuncCallback = (err: Error | null, secret: string) => void;

/**
 * socketio-jwt contains an optional second argument, that contains no implementation usage.
 */
export type JwtAuthorizeCallback = () => void;
