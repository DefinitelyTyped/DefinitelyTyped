// Type definitions for restify-cookies 0.2
// Project: https://github.com/nathschmidt/restify-cookies
// Definitions by: weekens <https://github.com/weekens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as restify from 'restify';

declare module 'restify' {
  interface CookieOptions {
    encode?: (input: string) => string; // tslint:disable-line:prefer-method-signature
    maxAge?: number;
    domain?: string;
    path?: string;
    expires?: Date;
    httpOnly?: boolean;
    secure?: boolean;
    sameSite?: boolean|'lax'|'strict';
  }

  interface Request {
    cookies: any;
  }

  interface Response {
    setCookie(key: string, val: string, options?: CookieOptions): void;
  }
}

export function parse(): any;
