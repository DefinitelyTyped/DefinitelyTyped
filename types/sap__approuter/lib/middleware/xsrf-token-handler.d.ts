import { IncomingMessage } from "http";

export type checkTokenResult = {
    isValid: boolean;
    details: string;
};

/**
 * Checks if a token is required for an incoming request:
 *  - GET and HEAD requests do not require a token (except if they are used to fetch a new token)
 *  - public path requests do not require a token
 *
 * @param req
 * @returns true if a token is required, else false
 */
export function isTokenRequired(req: IncomingMessage): boolean;

export function isTokenFetchRequest(req: IncomingMessage): boolean;

/**
 * Check a token send by the client
 *
 * @param req
 * @returns {isValid: boolean, details: string}
 */
export function checkToken(req: IncomingMessage): checkTokenResult;

/**
 * Returns a new token and stores it in the session (or returns an existing one from the session)
 *
 * @param req
 * @param cb function cb(err, token)
 */
export function getToken<T = void>(req: IncomingMessage, cb: (error: Error | null, xsrfToken?: string) => T): T;

export function hasTokenFetchHeader(req: IncomingMessage): boolean;

export function isGetRequest(req: IncomingMessage): boolean;

export function isHeadRequest(req: IncomingMessage): boolean;
