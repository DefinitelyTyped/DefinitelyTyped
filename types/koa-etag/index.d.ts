// Type definitions for koa-etag 3.0
// Project: https://github.com/koajs/etag#readme
// Definitions by: Matthew Bull <https://github.com/wingsbob>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as koa from 'koa';
import * as etag from 'etag';

declare function koaEtag(options?: etag.Options): koa.Middleware;

declare namespace koaEtag {}

export = koaEtag;
