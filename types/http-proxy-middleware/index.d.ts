// Type definitions for http-proxy-middleware
// Project: https://github.com/chimurai/http-proxy-middleware
// Definitions by: Zebulon McCorkle <https://github.com/zebMcCorkle/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />
/// <reference types="connect" />

import * as http from 'http';
import * as net from 'net';
import * as tls from 'tls';
import * as connect from 'connect';

declare function proxy(config: proxy.Config): proxy.Proxy;
declare function proxy(contextOrUri: string, config: proxy.Config): proxy.Proxy;

declare namespace proxy {
  type Logger = (...objs: any[]) => void;
  export interface LogProvider {
    log: Logger,
    debug?: Logger,
    info?: Logger,
    warn?: Logger,
    error?: Logger,
  }

  export interface Config {
    pathRewrite?: { [regexp: string]: string } | ((path: string, req: http.IncomingMessage) => string),
    router?: { [hostOrPath: string]: string } | ((req: http.IncomingMessage) => string),
    logLevel?: 'debug' | 'info' | 'warn' | 'error' | 'silent',
    logProvider?: (provider: LogProvider) => LogProvider,

    onError?: connect.HandleFunction,
    onProxyRes?: (proxyRes: http.ServerResponse, req: http.IncomingMessage, res: http.ServerResponse) => void,
    onProxyReq?: (proxyReq: http.ClientRequest, req: http.IncomingMessage, res: http.ServerResponse) => void,
    onProxyReqWs?: (proxyReq: http.ClientRequest, req: http.IncomingMessage, socket: any, options: any, head: any) => void, // TODO: Figure out the types of the last 3
    onOpen?: (proxySocket: net.Socket) => void,
    onClose?: (res: http.ServerResponse, socket: net.Socket) => void,

    target?: string,
    forward?: string,
    agent?: http.Agent,
    ssl?: tls.TlsOptions,
    ws?: boolean,
    xfwd?: boolean,
    secure?: boolean,
    toProxy?: boolean,
    prependPath?: boolean,
    ignorePath?: boolean,
    localAddress?: string,
    changeOrigin?: boolean,
    auth?: string,
    hostRewrite?: any, // TODO
    autoRewrite?: any, // TODO
    protocolRewrite?: any, // TODO
    cookieDomainRewrite?: false | string | { [domain: string]: string },
    headers?: { [header: string]: string },
    proxyTimeout?: number,
  }

  export interface Proxy extends connect.NextHandleFunction {

  }
}

export = proxy;
