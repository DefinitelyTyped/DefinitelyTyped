// Type definitions for nanomsg 3.2
// Project: https://github.com/nickdesaulniers/node-nanomsg#readme
// Definitions by: Titan <https://github.com/titan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export type EventCallback = (data: Buffer) => void;

export class Socket {
  constructor(type: string, opts: {});
  shutdown(addr: string): void;
  bind(addr: string): void;
  connect(addr: string): void;
  close(): void;
  send(buf: Buffer | string): number;
  on(event: string, cb: EventCallback): void;
}

export function socket(type: string, opts?: {}): Socket;
