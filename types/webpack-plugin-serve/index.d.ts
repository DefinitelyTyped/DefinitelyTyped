// Type definitions for webpack-plugin-serve 0.7
// Project: https://github.com/shellscape/webpack-plugin-serve
// Definitions by: Matheus Gonçalves da Silva <https://github.com/PlayMa256>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
/// <reference types="node" />


import { Url } from 'url';
import { Config as HttpProxyMiddlewareConfig, Proxy } from 'http-proxy-middleware';
import * as Koa from 'koa';
import {
  ServerOptions as Http2ServerOptions,
  SecureServerOptions as Http2SecureServerOptions,
} from 'http2';
import { ServerOptions as HttpsServerOptions } from 'https';
import { ZlibOptions } from 'zlib';
import { Compiler } from 'webpack';

export interface CompressOptions extends ZlibOptions {
  filter?: (content_type: string) => boolean;
  threshold?: number;
}

export interface KoaStaticOptions {
  maxage?: number;
  hidden?: boolean;
  index?: string;
  defer?: boolean;
  gzip?: boolean;
  br?: boolean;
  setHeaders?: (res: any, path: any, stats: any) => any;
  extensions?: string[] | boolean;
}

export type RewriteTo = (context: Context) => string;

export interface Context {
  match: RegExpMatchArray;
  parsedUrl: Url;
}

export interface Rewrite {
  from: RegExp;
  to: string | RegExp | RewriteTo;
}

export interface HistoryApiFallbackOptions {
  disableDotRule?: true;
  htmlAcceptHeaders?: string[];
  index?: string;
  logger?: typeof console.log;
  rewrites?: Rewrite[];
  verbose?: boolean;
}

export interface Builtins {
  proxy: (args: HttpProxyMiddlewareConfig) => Proxy;
  compress: (opts: CompressOptions) => void;
  static: (paths: string[], opts?: KoaStaticOptions) => void;
  historyFallback: (opts: HistoryApiFallbackOptions) => void;
  websocket: () => void;
  four0four: (fn?: (ctx: Koa.Context) => void) => void;
}

export interface WebpackPluginServeOptions {
  client?: {
    address?: string;
    retry?: boolean;
    silent?: boolean;
  };
  compress?: boolean;
  historyFallback?: boolean | HistoryApiFallbackOptions;
  hmr?: boolean;
  host?: string | Promise<string>;
  http2?: boolean | Http2ServerOptions | Http2SecureServerOptions;
  https?: HttpsServerOptions;
  liveReload?: boolean;
  log?: {
    level: string;
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
  static?: string | string[];
  status?: boolean;
  waitForBuild?: boolean;
}

export class WebpackPluginServe {
  constructor(opts?: WebpackPluginServeOptions);
  attach(): {
    apply(compiler: Compiler): void;
  };
  hook(compiler: Compiler): void;
  apply(compiler: Compiler): void;
}
