// Type definitions for koa-better-body 3.3
// Project: https://github.com/tunnckoCore/opensource/tree/master/%40packages/koa-better-body
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Context } from 'koa';

declare function KoaBetterBody(
  options?: KoaBetterBody.Options,
): KoaBetterBody.Body;

declare namespace KoaBetterBody {
  interface Options {
    fields?: boolean | string;  // default: false
    files?: boolean | string;  // default: false
    multipart?: boolean;  // default: true
    textLimit?: string;  // default: false
    formLimit?: string;  // default: false
    jsonLimit?: string;  // default: false
    jsonStrict?: boolean;  // default: true
    detectJSON?: (ctx: Context) => boolean;
    bufferLimit?: string;  // default: false
    buffer?: boolean;  // default: false
    strict?: boolean;  // default: true

    delimiter?: symbol; // default: '&'
    decodeURIComponent?: (query: string) => string; // default: require('querystring').unescape
    maxKeys?: number; // default: 1000

    urlencodedLimit?: string;

    onError?: (err: any, ctx: Context) => void;
    handler?: (ctx: Context, options: Options, next: () => any) => void;
  }

  type Body = (next: any) => Generator;
}

export = KoaBetterBody;
