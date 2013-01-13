// Type definitions for Express 3.0
// Project: http://expressjs.com
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/* 
USAGE

///<reference path="./DefinitelyTyped/Definitions/express-3.0.d.ts"/>
import express = module('express')
var app = <express.ServerApplication> express()
...

MIDDLEWARE

express exports lots of middleware, like .static, .session, etc, but use connect so you don't have to escape
var connect = require('connect')
connect.session({})

*/

///<reference path='../node/node-0.8.d.ts' />

// do not reference this. use module('express') instead
declare module _express {

  import http = module("http");

  export interface Handler {
      (req: ServerRequest, res: ServerResponse, next?: Function): void;
  }

  export interface Errback { (err: Error): void; }

  export interface CookieOptions {
      maxAge?: number;
      signed?: bool;
      expires?: Date;
      httpOnly?: bool;
      path?: string;
      domain?: string;
      secure?: bool;
  }

  export interface ExpressSettings {
      env?: string;
      views?: string;
  }

  export interface ServerApplication {

      settings: ExpressSettings;
      locals: any;
      routes: any;

      (): ServerApplication;

      router: Handler;

      use(route: string, callback: Function): ServerApplication;
      use(route: string, server: ServerApplication): ServerApplication;
      use(callback: Function): ServerApplication;
      use(server: ServerApplication): ServerApplication;

      engine(ext: string, callback: Function): ServerApplication;

      param(param: Function): ServerApplication;
      param(name: string, callback: Function): ServerApplication;
      param(name: string, expressParam: any): ServerApplication;
      param(name: any[], callback: Function): ServerApplication;

      set(name: string): ServerApplication;
      set(name: string, val: any): ServerApplication;

      enabled(name: string): bool;
      disabled(name: string): bool;

      enable(name: string): ServerApplication;
      disable(name: string): ServerApplication;

      configure(env: string, callback: () => void ): ServerApplication;
      configure(...params: any[]): ServerApplication; // covering this case: (...env: string[], callback: () => void)
      configure(callback: () => void ): ServerApplication;

      all(path: string, ...callbacks: Function[]): void;

      render(view: string, callback: (err: Error, html) => void ): void;
      render(view: string, optionss: any, callback: (err: Error, html) => void ): void;

      listen(port: number, hostname: string, backlog: number, callback: Function): void;
      listen(port: number, callback: Function): void;
      listen(path: string, callback?: Function): void;
      listen(handle: any, listeningListener?: Function): void;

      get(name: string): any;
      get(path: RegExp, handler: Handler): void;
      get(path: string, ...callbacks: Handler[]): void;

      post(path: RegExp, handler: Handler ): void;
      post(path: string, ...callbacks: Handler[]): void;

      put(path: RegExp, handler: Handler ): void;
      put(path: string, ...callbacks: Handler[]): void;

      del(path: RegExp, handler: Handler ): void;
      del(path: string, ...callbacks: Handler[]): void;
  }

  export interface ServerRequest extends http.ServerRequest {

      accepted: any[];
      acceptedLanguages: string[];
      acceptedCharsets: string[];

      params: any;
      query: any;
      body: any;
      files: any;

      route: any;
      cookies: any;
      signedCookies: any;

      get(field: string): string;
      header(field: string): string;

      accepts(types: string): any;
      accepts(types: string[]): any;
      acceptsCharset(charset: string): bool;
      acceptsLanguage(lang: string): bool;

      range(size: number): number[];

      param(name: string, defaultValue?: any): string;
      is(type: string): bool;

      protocol: string;
      secure: bool;
      ip: string;
      ips: string[];
      auth: any;
      subdomains: string[];
      path: string;
      host: string;
      fresh: bool;
      stale: bool;
      xhr: bool;
  }

  export interface ServerResponse extends http.ServerResponse {

      charset: string;
      locals: any;

      status(code: number): ServerResponse;
      links(links: any): ServerResponse;

      send(status: number): ServerResponse;
      send(bodyOrStatus: any): ServerResponse;
      send(status: number, body: any): ServerResponse;
      json(status: number): ServerResponse;
      json(bodyOrStatus: any): ServerResponse;
      json(status: number, body: any): ServerResponse;
      jsonp(status: number): ServerResponse;
      jsonp(bodyOrStatus: any): ServerResponse;
      jsonp(status: number, body: any): ServerResponse;

      sendfile(path: string): void;
      sendfile(path: string, options: any): void;
      sendfile(path: string, fn: Errback): void;
      sendfile(path: string, options: any, fn: Errback): void;
      download(path: string): void;
      download(path: string, filename: string): void;
      download(path: string, fn: Errback): void;
      download(path: string, filename: string, fn: Errback): void;

      type(type: string): ServerResponse;
      contentType(type: string): ServerResponse;

      format(object: any): ServerResponse;
      attachment(filename?: string): ServerResponse;

      set(field: any): void;
      set(field: string, value: string): void;
      header(field: any): void;
      header(field: string, value: string): void;

      get(field: string): string;

      clearCookie(name: string, options?: any): ServerResponse;
      cookie(name: string, value: any, options?: CookieOptions): ServerResponse;

      redirect(url: string): void;
      redirect(status: number, url: string): void;
      redirect(url: string, status: number): void;

      render(view: string, options: any): void;
      render(view: string, callback: (err: Error, html: any) => void ): void;
      render(view: string, options: any, callback: (err: Error, html: any) => void ): void;
  }
}

declare module "express" {
    export function (): _express.ServerApplication;
    export function createServer(): ServerApplication;
    export function static(path: string): any;
    export var listen;

    // Connect middleware
    export function bodyParser(options?: any): Handler;
    export function errorHandler(opts?: any): Handler;
    export function methodOverride(): Handler;

    export interface ServerApplication extends _express.ServerApplication {}
    export interface ServerRequest extends _express.ServerRequest {}
    export interface ServerResponse extends _express.ServerResponse {}
    export interface Handler extends _express.Handler {}
}
