// Type definitions for koa-better-body 3.0
// Project: https://github.com/tunnckoCore/koa-better-body
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Context } from 'koa';

declare function KoaBetterBody(options?: KoaBetterBody.Options): KoaBetterBody.Body;

declare namespace KoaBetterBody {
  interface Options {
    fields?: boolean | string;
    files?: boolean | string;
    multipart?: boolean;
    textLimit?: string;
    formLimit?: string;
    urlencodedLimit?: string;
    jsonLimit?: string;
    bufferLimit?: string;
    jsonStrict?: boolean;
    detectJSON?: () => any;
    strict?: boolean;
    delimiter?: symbol;
    decodeURIComponent?: any;
    maxKeys?: number;
    buffer?: boolean;
  }

  type Body = (context: Context, next: () => void) => Generator;
}

export = KoaBetterBody;
