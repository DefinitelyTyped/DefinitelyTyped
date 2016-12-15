// Type definitions for nanomsg 3.2.3
// Project: https://github.com/nickdesaulniers/node-nanomsg
// Definitions by: Titan <https://github.com/titan>
// Definitions: https://github.com/DefinitelyTyped/nanomsg

/// <reference types="node" />

declare module "nanomsg" {
  export interface EventCallback {
    (data: Buffer): void;
  }
  export class Socket {
    constructor(type: string, opts: Object);
    shutdown(addr: string): void;
    bind(addr: string): void;
    connect(addr: string): void;
    close(): void;
    send(buf: Buffer | string): number;
    on(event: string, cb: EventCallback): void;
  }
  export function socket(type: string, opts?: Object): Socket;
}
