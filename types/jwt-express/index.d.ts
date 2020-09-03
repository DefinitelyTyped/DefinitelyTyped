// Type definitions for jwt-express 1.1
// Project: https://github.com/AustP/jwt-express#readme
// Definitions by: Nick Paddock <https://github.com/nickp10>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import express = require("express");
import jsonwebtoken = require("jsonwebtoken");

export interface JWT {
    /**
     * Indicates if the JWT is expired. valid will always be false if this is true.
     */
    expired: boolean;

    /**
     * The jwt-express options.
     */
    options: JWTExpressOptions;

    /**
     * The payload of the JWT (must be an object). jwt-express will add a stales key-value pair to the payload for stale.
     */
    payload: any;

    /**
     * The secret used to sign /verify the JWT.
     */
    secret: string;

    /**
     * Indicates if the JWT is stale. The default timeout before a JWT is considered stale is 15 minutes.
     */
    stale: boolean;

    /**
     * The signed token of the JWT.
     */
    token: string;

    /**
     * Indicates if this JWT is valid. This means that the payload hasn't been tampered with and that the JWT hasn't expired yet.
     */
    valid: boolean;

    /**
     * Resigns this JWT Objects's payload.
     *
     * @return this
     */
    resign(): JWT;

    /**
     * Calls the revoke function defined in the jwt.init() options with this JWT Object as the first parameter.
     *
     * @return this
     */
    revoke(): JWT;

    /**
     * Generates a signed token from the payload.
     *
     * @param payload The payload of the JWT (must be an object).
     * @return this
     */
    sign(payload: any): JWT;

    /**
     * Stores this JWT in the cookie (if configured to use cookies).
     *
     * @param res The response in which to store the JWT.
     * @return this
     */
    store(res: express.Response): JWT;

    /**
     * This function is called when the jwt is passed through JSON.stringify.
     * We don't want the secret or options to be stringified.
     *
     * @return The JSON form of the object.
     */
    toJSON(): any;

    /**
     * Verify the token and load the info into this JWT.
     *
     * @param token The signed token to verify.
     * @return this
     */
    verify(token: string): JWT;
}

export interface JWTExpressOptions {
    /**
     * The name of the cookie (default: 'jwt-express')
     */
    cookie?: string;

    /**
     * Options to use when storing the cookie (default: {httpOnly: true})
     */
    cookieOptions?: express.CookieOptions;

    /**
     * If true, will use cookies, otherwise will use the Authorization header (default: true)
     */
    cookies?: boolean;

    /**
     * Indicates if the JWT should be refreshed and stored every request (default: true)
     */
    refresh?: boolean;

    /**
     * The property of req to populate (default: 'jwt')
     */
    reqProperty?: string;

    /**
     * jwt.revoke() will call this function (default: function(jwt) {})
     */
    revoke?: (jwt: JWT) => void;

    /**
     * Options to use when signing the JWT (default: {})
     */
    signOptions?: jsonwebtoken.SignOptions;

    /**
     * Milliseconds when the jwt will go stale (default: 900000 (15 minutes))
     */
    stales?: number;

    /**
     * Additional verification. Must return a boolean (default: function(jwt) {return true})
     */
    verify?: (jwt: JWT) => boolean;

    /**
     * Options to use when verifying the JWT (default: {})
     */
    verifyOptions?: jsonwebtoken.VerifyOptions;
}

export interface JWTExpressError extends Error {
    name: string;
    message: string;
}

export let options: JWTExpressOptions;

/**
 * Returns a middleware function that ensures a JWT is valid and fresh. Useful to protect
 * sensitive actions from CSRF. This method will trigger error handling if the JWT is not active.
 *
 * @return Express middleware
 */
export function active(): express.RequestHandler;

/**
 * If using cookies, this method will clear the current JWT out of the cookie.
 *
 * @return Express middleware
 */
export function clear(): express.RequestHandler;

/**
 * Returns a newly created / signed JWT Object from the payload.
 *
 * @param secret
 * If secret is a string, that string will be used to verify / sign with.
 * If secret is a function, that function will be called with the payload as its first parameter,
 * and must return a string which will be used to verify / sign with.
 * @param payload The payload of the JWT.
 * @return JWT
 */
export function create(secret: string | ((payload: any) => string), payload: any): JWT;

/**
 * The jwt.init() function returns a middleware function for Express so it must be called inside app.use().
 * It will automatically read in the JWT from either the cookie or the Authorization header (configured by you)
 * and add a JWT object to the Request object (req). It will also add the jwt() method to the Response object (res)
 * to create / store JWTs. jwt.init() must be called before any other jwt method.
 *
 * @param secret
 * If secret is a string, that string will be used to verify / sign with.
 * If secret is a function, that function will be called with the Express HTTP Request as its first parameter,
 * and must return a string which will be used to verify / sign with.
 * @param options The options of jwt-express.
 * @return Express middleware
 */
export function init(secret: string | ((req: express.Request) => string), options?: JWTExpressOptions): express.RequestHandler;

/**
 * Returns a middleware function that requires the payload to contain / match certain data.
 * This method will trigger error handling if the JWT fails the requirement.
 *
 * @param key
 * This is they key used to look up the value in the payload.
 * If only this value is passed to jwt.require(), then the middleware function will check that the value is truthy.
 * @param operator The operator to compare the information
 * @param value The value to compare the payload data against
 * @return Express middleware
 */
export function require(key: string, operator?: string, value?: any): express.RequestHandler;

/**
 * Returns a middleware function that ensures a JWT is valid. This method will trigger error handling if the JWT is not valid.
 *
 * @return Express middleware
 */
export function valid(): express.RequestHandler;

declare global {
    namespace Express {
        interface Request {
            jwt: JWT;
        }

        interface Response {
            /**
             * Returns a newly created / signed JWT Object from the payload. If you are using cookies,
             * it will automatically store the JWT in the cookie as well.
             *
             * @param payload The payload of the JWT
             * @return The newly created JWT
             */
            jwt(payload: any): JWT;
        }
    }
}
