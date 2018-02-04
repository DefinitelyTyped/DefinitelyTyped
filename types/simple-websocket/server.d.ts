/// <reference types="node" />

import { EventEmitter } from 'events';
import * as http from 'http';
import * as net from 'net';
import WebSocket = require('ws');

import Socket = require('.');

declare namespace SocketServer {
  type Options = WebSocket.ServerOptions;
}

declare class SocketServer extends EventEmitter {
  options: SocketServer.Options;
  path: string;
  clients: Set<WebSocket>;

  constructor(options?: SocketServer.Options, callback?: () => void);

  close(cb?: (err?: Error) => void): void;
  handleUpgrade(request: http.IncomingMessage, socket: net.Socket,
      upgradeHead: Buffer, callback: (client: WebSocket) => void): void;
  shouldHandle(request: http.IncomingMessage): boolean;

  // Events
  on(event: 'connection', cb: (socket: Socket, request: http.IncomingMessage) => void): this;
  on(event: 'error', cb: (error: Error) => void): this;
  on(event: 'headers', cb: (headers: string[], request: http.IncomingMessage) => void): this;
  on(event: 'listening', cb: () => void): this;
  on(event: string | symbol, listener: (...args: any[]) => void): this;

  addListener(event: 'connection', cb: (client: Socket) => void): this;
  addListener(event: 'error', cb: (err: Error) => void): this;
  addListener(event: 'headers', cb: (headers: string[], request: http.IncomingMessage) => void): this;
  addListener(event: 'listening', cb: () => void): this;
  addListener(event: string | symbol, listener: (...args: any[]) => void): this;
}

export = SocketServer;
