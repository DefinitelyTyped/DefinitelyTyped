// Type definitions for simple-websocket 6.0
// Project: https://github.com/feross/simple-websocket
// Definitions by: Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Duplex, DuplexOptions } from 'stream';
import WebSocket = require('ws');

declare namespace Socket {
  interface Options extends DuplexOptions {
    /** websocket server url */
    url?: string;
    /** raw websocket instance to wrap */
    socket?: WebSocket;
  }

  let WEBSOCKET_SUPPORT: boolean;
}

declare class Socket extends Duplex {
  constructor(options: Socket.Options | string);

  /** Send text/binary data to the WebSocket server */
  send(chunk: any): void;

  // TODO destroy method not compatible with Duplex
  // destroy(err?: Error): void;
  // destroy(callback?: (err?: Error) => void): void;
}

export = Socket;
