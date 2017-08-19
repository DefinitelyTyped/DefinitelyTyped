// Type definitions for hiredis 0.5
// Project: http://github.com/redis/hiredis-node
// Definitions by: Titan <https://github.com/titan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as net from "net";

export interface Config {
  return_buffers: boolean;
}

export class Reader {
  constructor(config?: Config);
  feed(reply: string | Buffer): void;
  get(): string | Buffer;
}

export function createConnection(port: number, host: string): net.Socket;
