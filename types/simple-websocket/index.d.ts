// Type definitions for simple-websocket 7.0
// Project: https://github.com/feross/simple-websocket
// Definitions by: Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Duplex, DuplexOptions } from "stream";
import WebSocket = require("ws");

declare namespace Socket {
  interface Options extends DuplexOptions {
    /** websocket server url */
    url?: string;
    /** raw websocket instance to wrap */
    socket?: WebSocket;
  }
}

declare class Socket extends Duplex {
  static WEBSOCKET_SUPPORT: boolean;

  constructor(options: Socket.Options | string);

  /** Send text/binary data to the WebSocket server */
  send(chunk: any): void;

  /** Destroy and cleanup this websocket connection */
  destroy(err?: Error): void;
}

export = Socket;
