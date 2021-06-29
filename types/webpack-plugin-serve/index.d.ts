// Type definitions for webpack-plugin-serve 1.4
// Project: https://github.com/shellscape/webpack-plugin-serve
// Definitions by: Matheus Gonçalves da Silva <https://github.com/PlayMa256>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8
/// <reference types="node" />

import { Options as HttpProxyMiddlewareConfig, RequestHandler as Proxy } from 'http-proxy-middleware';
import * as Koa from 'koa';
import { ServerOptions as Http2ServerOptions, SecureServerOptions as Http2SecureServerOptions } from 'http2';
import { ServerOptions as HttpsServerOptions } from 'https';
import { Options as HistoryApiFallbackOptions } from 'connect-history-api-fallback';
import { CompressOptions } from 'koa-compress';
import { Options as KoaStaticOptions } from 'koa-static';
import type { GlobbyOptions } from 'globby';

export interface Builtins {
    proxy: (args: HttpProxyMiddlewareConfig) => Proxy;
    compress: (opts: CompressOptions) => void;
    static: (paths: string[], opts?: KoaStaticOptions) => void;
    historyFallback: (opts: HistoryApiFallbackOptions) => void;
    websocket: () => void;
    four0four: (fn?: (ctx: Koa.Context) => void) => void;
}

export interface StaticObject {
    glob?: string | string[];
    options?: GlobbyOptions;
}

export interface WebpackPluginServeOptions {
    client?: {
        address?: string;
        protocol?: 'ws' | 'wss';
        retry?: boolean;
        silent?: boolean;
    };
    compress?: boolean;
    historyFallback?: boolean | HistoryApiFallbackOptions;
    hmr?: boolean | 'refresh-on-failure';
    host?: string | Promise<string>;
    http2?: boolean | Http2ServerOptions | Http2SecureServerOptions;
    https?: HttpsServerOptions;
    liveReload?: boolean;
    log?: {
        level: 'trace' | 'debug' | 'info' | 'warn' | 'error';
        timestamp?: boolean;
    };
    middleware?: (app: Koa, builtins: Builtins) => void;
    open?:
        | boolean
        | {
              wait?: boolean;
              app?: string | ReadonlyArray<string>;
          };
    port?: number | Promise<number>;
    progress?: boolean | 'minimal';
    static?: string | string[] | StaticObject;
    status?: boolean;
    waitForBuild?: boolean;
}

export class WebpackPluginServe<Compiler> {
    constructor(opts?: WebpackPluginServeOptions);
    attach(): {
        apply(compiler: Compiler): void;
    };
    hook(compiler: Compiler): void;
    apply(compiler: Compiler): void;
}
