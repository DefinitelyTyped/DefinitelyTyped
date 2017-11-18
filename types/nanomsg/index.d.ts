// Type definitions for nanomsg 3.2
// Project: https://github.com/nickdesaulniers/node-nanomsg
// Definitions by: Titan <https://github.com/titan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface Options {
  raw?: boolean;
  tcpnodelay?: boolean;
  linger?: number;
  sndbuf?: number;
  rcvbuf?: number;
  sndtimeo?: number;
  rcvtimeo?: number;
  reconn?: number;
  maxreconn?: number;
  sndprio?: number;
  rcvprio?: number;
  ipv6?: boolean;
  rcvmaxsize?: number;
  chan?: string[];
  wsopt?: "text" | "binary";
}

export class Socket {
  constructor(type: string, opts: Options);
  shutdown(addr: string): void;
  bind(addr: string): void;
  connect(addr: string): void;
  close(): void;
  send(buf: Buffer | string): number;
  on(event: string, cb: (data: Buffer) => void): void;
}

export function socket(type: string, opts?: Options): Socket;
