// Type definitions for nanomsg 3.2
// Project: https://github.com/nickdesaulniers/node-nanomsg
// Definitions by: Titan <https://github.com/titan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface Options {
  raw?: boolean | undefined;
  tcpnodelay?: boolean | undefined;
  linger?: number | undefined;
  sndbuf?: number | undefined;
  rcvbuf?: number | undefined;
  sndtimeo?: number | undefined;
  rcvtimeo?: number | undefined;
  reconn?: number | undefined;
  maxreconn?: number | undefined;
  sndprio?: number | undefined;
  rcvprio?: number | undefined;
  ipv6?: boolean | undefined;
  rcvmaxsize?: number | undefined;
  chan?: string[] | undefined;
  wsopt?: "text" | "binary" | undefined;
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
