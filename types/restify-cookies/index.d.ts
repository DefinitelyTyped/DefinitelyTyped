// Type definitions for restify-cookies 0.2
// Project: https://github.com/nathschmidt/restify-cookies
// Definitions by: weekens <https://github.com/weekens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as restify from 'restify';

declare module 'restify' {
  interface CookieOptions {
    encode?: (input: string) => string; // tslint:disable-line:prefer-method-signature
    maxAge?: number;
    domain?: string;
    path?: string;
    expires?: string;
    httpOnly?: boolean;
    secure?: boolean;
  }

  interface Response {
    setCookie(key: string, val: string, options?: CookieOptions): void;
  }
}
