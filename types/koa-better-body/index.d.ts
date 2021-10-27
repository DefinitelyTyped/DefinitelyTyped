// Type definitions for koa-better-body 3.3
// Project: https://github.com/tunnckoCore/opensource/tree/master/%40packages/koa-better-body
// Definitions by: David Tanner <https://github.com/DavidTanner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Context } from 'koa';

declare function KoaBetterBody(
  options?: KoaBetterBody.Options,
): KoaBetterBody.Body;

declare namespace KoaBetterBody {
  interface Options {
    /**
     * @default false
     */
    fields?: boolean | string;
    /**
     * @default false
     */
    files?: boolean | string;
    /**
     * @default true
     */
    multipart?: boolean;
    /**
     * @default false
     */
    textLimit?: string;
    /**
     * @default false
     */
    formLimit?: string;
    /**
     * @default false
     */
    jsonLimit?: string;
    /**
     * @default true
     */
    jsonStrict?: boolean;
    /**
     * @default () => false
     */
    detectJSON?: (ctx: Context) => boolean;
    /**
     * @default false
     */
    bufferLimit?: string;
    /**
     * @default false
     */
    buffer?: boolean;
    /**
     * @default true
     */
    strict?: boolean;

    /**
     * @default '&'
     */
    delimiter?: string; // default: '&'
    /**
     * @default require('querystring').unescape
     */
    decodeURIComponent?: (query: string) => string; // default: require('querystring').unescape
    /**
     * @default 1000
     */
    maxKeys?: number; // default: 1000

    /**
     * @deprecated use formLimit instead
     * @default config.formLimit
     */
    urlencodedLimit?: string;

    /**
     * @deprecated use delimiter instead
     * @default config.delimiter
     */
    sep?: string;

    /**
     * @default undefined
     */
    onError?: (err: any, ctx: Context) => void;
    /**
     * @default undefined
     */
    handler?: (ctx: Context, options: Options, next: () => any) => void;
  }

  type Body = (next: any) => Generator;
}

export = KoaBetterBody;
