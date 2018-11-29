// Type definitions for hapi-auth-cookie 1.0
// Project: https://github.com/hapijs/hapi-auth-cookie#readme
// Definitions by: MutMatt <https://github.com/MutMatt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Request, Plugin, AuthCredentials, ResponseToolkit } from "hapi";
import { string } from "joi";
import { Policy } from "catbox";
import { URL } from "url";

declare module "hapi" {
  interface ServerAuth {
    strategy(name: string, scheme: "cookie", options?: Options): void;
  }

  interface ApplicationState {
    [x: string]: Policy<{}, { segment: string; expiresIn: number }>;
  }

  interface Request {
    cookieAuth: cookieAuth;
  }
}

export interface cookieAuth {
  /**
   * Sets the current session.
   * Must be called after a successful login to begin the session.
   * Session must be a non-null object, which is set on successful subsequent authentications in `request.auth.credentials`
   * @param key or `session` if it is an `object`. This can be the session object or a key to set a value of an already set session.
   * @param value This is the value used when a key is set (as a string)
   */
  set: (key: string | object, value?: any) => void;
  /**
   * Clears the current session or session key.
   * @param key optional key string to remove a specific property of the session. If none provided, defaults to removing the entire session which is used to log the user out.
   */
  clear: (key?: any) => void;
  /**
   * Sets the ttl of the current active session
   * @param msec the new ttl in milliseconds.
   */
  ttl: (msecs: number) => void;
  settings: Options;
}

/**
 * Options passed to `hapi.auth.strategy` when this plugin is used
 */
export interface Options {
  /**
   * The name of the cookie that will be used.
   * @default `sid`
   */
  cookie?: string;
  /**
   * Used for `iron` to encrypt the cookie.
   * This password should be a _least_ 32 characters long.
   */
  password?: string;
  /**
   * Sets the cookie expires time in milliseconds.
   * Defaults to single browser session (ends when browser closes).
   * Required when `keepAlive` is `true`.
   */
  ttl?: number;
  /**
   * Sets the cookie Domain value.
   * Defaults to none/empty
   */
  domain?: string;
  /**
   * Sets the cookie path value.
   * @default `/`
   */
  path?: string;
  /**
   * If `true`, any authentication cookie that fails validation will be marked as expred in the response and cleared.
   * @default `false`
   */
  clearInvalid?: boolean;
  /**
   * If `true`, automatically sets the session cookie after validation to extend the current session for a new `ttl` duration.
   * @default `false`.
   */
  keepAlive?: boolean;
  /**
   * If `false` omitted. Other options `Strict` or `Lax`.
   * Defaults to Strict
   */
  isSameSite?: boolean | isSameSite;
  /**
   * If `false`, the cookie is allowed to be transmitted over insecure connections which exposes it to attacks.
   * @default `true`
   */
  isSecure?: boolean;
  /**
   * If `false`, the cookie will not include the `HttpOnly` flag.
   * @default `true`
   */
  isHttpOnly?: boolean;
  /**
   * Optional login URI or function function(request) that returns a URI to redirect unauthenticated requests to.
   * Note that it will only trigger when the authentication mode is `required`.
   * To enable or disable redirections for a specific route, set the route plugins config
   *      `{
   *         options: {
   *           plugins: {
   *             'hapi-auth-cookie': {
   *                redirectTo: false
   *              }
   *           }
   *         }
   *       }`.
   * @default `undefined` (i.e. no redirection).
   */
  redirectTo?: string | ((request: Request) => URL);
  /**
   * If `true` and `redirectTo` is `true`, appends the current request path to the query component of the `redirectTo` URI using the parameter name `next`.
   * Set to a string to use a different parameter name.
   * @default `false`.
   */
  appendNext?: string | boolean;
  /**
   * An optional session validation function used to validate the content of the session cookie on each request.
   * Used to verify that the internal session state is still valid (e.g. user account still exists).
   * The function has the signature function(request, session).
   * @param request the `Request` object
   * @param session is the session object set via `request.cookieAuth.set()`
   */
  validateFunc: validateFunc;
  /**
   * **USE WITH CAUTION** an optional name to use with decorating the request object.
   * @default `authCookie`. Using multiple decorator names for separate authentication strategies could allow a developer to call the methods for the wrong strategy.
   * Potentially resulting in unintended authorized access.
   */
  requestDecoratorName?: string;
}

export interface ValidateResponse {
  valid: boolean;
  credentials?: AuthCredentials;
}

export type validateFunc = (
  req: Request,
  h: ResponseToolkit
) => Promise<ValidateResponse>;

export enum isSameSite {
  Lax,
  Strict
}

export const cookieAuth: Plugin<cookieAuth>;

export default cookieAuth;
