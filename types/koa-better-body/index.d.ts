// Type definitions for koa-better-body 3.3.9
// Project: https://github.com/tunnckoCore/koa-better-body
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Context } from 'koa';

declare function KoaBetterBody<Context>(
  options?: KoaBetterBody.Options<Context>
): KoaBetterBody.Body;

declare namespace KoaBetterBody {
  interface Options<Context> {
    fields?: boolean | string;  // default: false
    files?: boolean | string;  // default: false
    multipart?: boolean;  // default: true
    textLimit?: string;  // default: false
    formLimit?: string;  // default: false
    jsonLimit?: string;  // default: false
    jsonStrict?: boolean;  // default: true
    detectJSON?: boolean | ((ctx: Context) => boolean);
    bufferLimit?: string;  // default: false
    buffer?: boolean;  // default: false
    strict?: boolean;  // default: true

    delimiter?: symbol; // default: '&'
    decodeURIComponent?: typeof decodeURIComponent; // default: require('querystring').unescape
    maxKeys?: number; // default: 1000

    urlencodedLimit?: string;

    onError?: Function;
    handler?: Function;
  }

  type Body = (context: Context, next: () => void) => Generator;
}

export = KoaBetterBody;
