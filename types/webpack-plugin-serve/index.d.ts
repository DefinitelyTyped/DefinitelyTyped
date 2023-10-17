/// <reference types="node" />

import { Options as HistoryApiFallbackOptions } from "connect-history-api-fallback";
import type { GlobbyOptions } from "globby";
import { Options as HttpProxyMiddlewareConfig, RequestHandler as Proxy } from "http-proxy-middleware";
import { SecureServerOptions as Http2SecureServerOptions, ServerOptions as Http2ServerOptions } from "http2";
import { ServerOptions as HttpsServerOptions } from "https";
import * as Koa from "koa";
import { CompressOptions } from "koa-compress";
import { Options as KoaStaticOptions } from "koa-static";

export interface Builtins {
    proxy: (args: HttpProxyMiddlewareConfig) => Proxy;
    compress: (opts: CompressOptions) => void;
    static: (paths: string[], opts?: KoaStaticOptions) => void;
    historyFallback: (opts: HistoryApiFallbackOptions) => void;
    websocket: () => void;
    four0four: (fn?: (ctx: Koa.Context) => void) => void;
}

export interface StaticObject {
    glob?: string | string[] | undefined;
    options?: GlobbyOptions | undefined;
}

export interface WebpackPluginServeOptions {
    client?: {
        address?: string | undefined;
        protocol?: "ws" | "wss" | undefined;
        retry?: boolean | undefined;
        silent?: boolean | undefined;
    } | undefined;
    compress?: boolean | undefined;
    historyFallback?: boolean | HistoryApiFallbackOptions | undefined;
    hmr?: boolean | "refresh-on-failure" | undefined;
    host?: string | Promise<string> | undefined;
    http2?: boolean | Http2ServerOptions | Http2SecureServerOptions | undefined;
    https?: HttpsServerOptions | undefined;
    liveReload?: boolean | undefined;
    log?: {
        level: "trace" | "debug" | "info" | "warn" | "error";
        timestamp?: boolean | undefined;
    } | undefined;
    middleware?: ((app: Koa, builtins: Builtins) => void) | undefined;
    open?:
        | boolean
        | {
            wait?: boolean | undefined;
            app?: string | ReadonlyArray<string> | undefined;
        }
        | undefined;
    port?: number | Promise<number> | undefined;
    progress?: boolean | "minimal" | undefined;
    static?: string | string[] | StaticObject | undefined;
    status?: boolean | undefined;
    waitForBuild?: boolean | undefined;
}

export class WebpackPluginServe<Compiler> {
    constructor(opts?: WebpackPluginServeOptions);
    attach(): {
        apply(compiler: Compiler): void;
    };
    hook(compiler: Compiler): void;
    apply(compiler: Compiler): void;
}
