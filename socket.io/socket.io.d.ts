// Type definitions for socket.io 1.1.0
// Project: http://socket.io/
// Definitions by: Peter Harris <https://github.com/codeanimal>, William Orr <https://github.com/worr>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module NodeJS {
  export interface EventEmitterT0<R extends EventEmitter> extends EventEmitter {
    addListener(event: string, listener: Function): R;
    on(event: string, listener: Function): R;
    once(event: string, listener: Function): R;
    removeListener(event: string, listener: Function): R;
    removeAllListeners(event?: string): R;
  }

  export interface EventEmitterT1<T, R extends EventEmitter> extends EventEmitterT0<R> {
    on(event: string, listener: (a: T) => void): R;
    once(event: string, listener: (a: T) => void): R;
    removeListener(event: string, listener: (a: T) => void): R;
  }

  export interface EventEmitterT2<T1, T2, R extends EventEmitter> extends EventEmitterT0<R> {
    on(event: string, listener: (a: T1, b: T2) => void): R;
    once(event: string, listener: (a: T1, b: T2) => void): R;
    removeListener(event: string, listener: (a: T1, b: T2) => void): R;
  }
}

declare module "socket.io" {
  import http = require('http');

  function io(): io.Server;
  function io(options: io.ServerOptions): io.Server;
  function io(http: http.Server, options?: io.ServerOptions): io.Server;
  function io(port: number, options?: io.ServerOptions): io.Server;

  module io {
    export var Server: ServerConstructor;

    export var protocol: number;
    export var transports: any;

    export interface ServerOptions {
      serveClient: boolean;
      path: string;
    }

    interface ServerConstructor {
      (): Server;
      (options: ServerOptions): Server;
      (http: http.Server, options?: ServerOptions): Server;
      (port: number, options?: ServerOptions): Server;
      new (): Server;
    }

    export interface Server extends Namespace {
      attach(http: http.Server, options?: ServerOptions): Server;
      attach(port: number, options?: ServerOptions): Server;
      listen(http: http.Server, options?: ServerOptions): Server;
      listen(port: number, options?: ServerOptions): Server;

      serveClient(val: boolean): Server;
      path(path: string): Server;
      adapter(adapter: any): Server;
      origins(val: string): Server;
      origins(fn: Function): Server;
      sockets: Namespace;

      close(): void;

      of(namespace: string): Namespace;
    }

    interface Socket {
      id: string;
      rooms: string[];
      client: Client;
      conn: Object;
      request: Object;
      emit(name: string, ...data: any[]): Socket;
      join(name: string, callback: (err: Error) => void): Socket;
      leave(name: string, callback: (err: Error) => void): Socket;
      to(room: string): Socket;
      in(room: string): Socket;
    }

    interface Client {
      conn: Object;
      request: Object;
    }

    interface Namespace extends NodeJS.EventEmitterT1<Socket, Namespace> {
      name: string;

      connected: Object;
      use(fn: (socket: Socket, next: (err?: Error) => void) => void): Namespace;
    }
  }

  export = io;
}