/// <reference types="node" />

import { EventEmitter } from "events";
import * as http from "http";
import * as net from "net";
import WebSocket = require("ws");

import Socket = require(".");

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
  addListener(event: "connection", cb: (client: Socket) => void): this;
  addListener(event: "error", cb: (err: Error) => void): this;
  addListener(event: "headers", cb: (headers: string[], request: http.IncomingMessage) => void): this;
  addListener(event: "listening", cb: () => void): this;

  emit(event: "connection", socket: Socket): boolean;
  emit(event: "error", error: Error): boolean;
  emit(event: "headers", headers: string[], request: http.IncomingMessage): boolean;
  emit(event: "listening"): boolean;

  listeners(event: "connection"): Array<(socket: Socket, request: http.IncomingMessage) => void>;
  listeners(event: "error"): Array<(error: Error) => void>;
  listeners(event: "headers"): Array<(headers: string[], request: http.IncomingMessage) => void>;
  listeners(event: "listening"): Array<() => void>;

  off(event: "connection", cb: (socket: Socket, request: http.IncomingMessage) => void): this;
  off(event: "error", cb: (error: Error) => void): this;
  off(event: "headers", cb: (headers: string[], request: http.IncomingMessage) => void): this;
  off(event: "listening", cb: () => void): this;

  on(event: "connection", cb: (socket: Socket, request: http.IncomingMessage) => void): this;
  on(event: "error", cb: (error: Error) => void): this;
  on(event: "headers", cb: (headers: string[], request: http.IncomingMessage) => void): this;
  on(event: "listening", cb: () => void): this;

  once(event: "connection", cb: (socket: Socket, request: http.IncomingMessage) => void): this;
  once(event: "error", cb: (error: Error) => void): this;
  once(event: "headers", cb: (headers: string[], request: http.IncomingMessage) => void): this;
  once(event: "listening", cb: () => void): this;

  prependListener(event: "connection", cb: (client: Socket) => void): this;
  prependListener(event: "error", cb: (err: Error) => void): this;
  prependListener(event: "headers", cb: (headers: string[], request: http.IncomingMessage) => void): this;
  prependListener(event: "listening", cb: () => void): this;

  prependOnceListener(event: "connection", cb: (client: Socket) => void): this;
  prependOnceListener(event: "error", cb: (err: Error) => void): this;
  prependOnceListener(event: "headers", cb: (headers: string[], request: http.IncomingMessage) => void): this;
  prependOnceListener(event: "listening", cb: () => void): this;

  rawListeners(event: "connection"): Array<(socket: Socket, request: http.IncomingMessage) => void>;
  rawListeners(event: "error"): Array<(error: Error) => void>;
  rawListeners(event: "headers"): Array<(headers: string[], request: http.IncomingMessage) => void>;
  rawListeners(event: "listening"): Array<() => void>;

  removeListener(event: "connection", cb: (client: Socket) => void): this;
  removeListener(event: "error", cb: (err: Error) => void): this;
  removeListener(event: "headers", cb: (headers: string[], request: http.IncomingMessage) => void): this;
  removeListener(event: "listening", cb: () => void): this;
}

export = SocketServer;
