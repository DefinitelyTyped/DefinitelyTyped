// Type definitions for koa-sslify 2.1
// Project: https://github.com/turboMaCk/koa-sslify#readme
// Definitions by: Matthew Bull <https://github.com/wingsbob>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as koa from 'koa';

declare namespace sslify {
  interface Options {
    trustProtoHeader?: boolean;
    trustAzureHeader?: boolean;
    port?: number;
    hostname?: string;
    ignoreUrl?: boolean;
    temporary?: boolean;
    redirectMethods?: string[];
    internalRedirectMethods?: string[];
    specCompliantDisallow?: boolean;
  }
}

declare function sslify(options: sslify.Options): koa.Middleware;

export = sslify;
