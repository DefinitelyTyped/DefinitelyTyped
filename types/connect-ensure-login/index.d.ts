// Type definitions for connect-ensure-login 0.1
// Project: https://github.com/jaredhanson/connect-ensure-login
// Definitions by: Pavel Puchkov <https://github.com/0x6368656174>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { RequestHandler } from "express";

export interface LoggedInOptions {
    /**
     * URL to redirect to for login, defaults to _/login_
     */
    redirectTo?: string;
    /**
     * set redirectTo in session, defaults to _true_
     */
    setRedirectTo?: boolean;
}
export interface LoggedOutOptions {
    /**
     * URL to redirect to in logged in, defaults to _/_
     */
    redirectTo?: string;
}

/**
 * Ensure that a user is logged in before proceeding to next route middleware.
 *
 * This middleware ensures that a user is logged in.  If a request is received
 * that is unauthenticated, the request will be redirected to a login page (by
 * default to `/login`).
 *
 * Additionally, `returnTo` will be be set in the session to the URL of the
 * current request.  After authentication, this value can be used to redirect
 * the user to the page that was originally requested.
 *
 * Examples:
 *
 *     app.get('/profile',
 *       ensureLoggedIn(),
 *       function(req, res) { ... });
 *
 *     app.get('/profile',
 *       ensureLoggedIn('/signin'),
 *       function(req, res) { ... });
 *
 *     app.get('/profile',
 *       ensureLoggedIn({ redirectTo: '/session/new', setReturnTo: false }),
 *       function(req, res) { ... });
 */
export function ensureLoggedIn(options?: LoggedInOptions | string): RequestHandler;

/**
 * Ensure that no user is logged in before proceeding to next route middleware.
 *
 * This middleware ensures that no user is logged in.  If a request is received
 * that is authenticated, the request will be redirected to another page (by
 * default to `/`).
 *
 * Examples:
 *
 *     app.get('/login',
 *       ensureLoggedOut(),
 *       function(req, res) { ... });
 *
 *     app.get('/login',
 *       ensureLoggedOut('/home'),
 *       function(req, res) { ... });
 *
 *     app.get('/login',
 *       ensureLoggedOut({ redirectTo: '/home' }),
 *       function(req, res) { ... });
 */
export function ensureLoggedOut(options?: LoggedOutOptions | string): RequestHandler;
