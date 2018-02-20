// Type definitions for simple-websocket 7.0
// Project: https://github.com/feross/simple-websocket
// Definitions by: Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Duplex, DuplexOptions } from "stream";
import WebSocket from "ws";

export interface SocketOptions extends DuplexOptions {
  /** websocket server url */
  url?: string;
  /** raw websocket instance to wrap */
  socket?: WebSocket;
}

export default class Socket extends Duplex {
  static WEBSOCKET_SUPPORT: boolean;

  constructor(options: SocketOptions | string);

  /** Send text/binary data to the WebSocket server */
  send(chunk: any): void;

  /** Destroy and cleanup this websocket connection */
  destroy(err?: Error): void;
}
