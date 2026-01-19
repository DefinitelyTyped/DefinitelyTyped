/// <reference types="node" />

import { EventEmitter } from "events";
import Link = require("grenache-nodejs-link");

declare namespace GrenacheNodejsWS {
  interface RPCOptions {
    timeout?: number;
    retry?: number;
  }

  type Callback<T = unknown> = (err: Error | null, data?: T) => void;

  type RequestHandler<TRequest = unknown, TResponse = unknown> = (
    payload: TRequest,
    callback: Callback<TResponse>
  ) => void;
}

declare class PeerRPCClient extends EventEmitter {
  constructor(
    link: Link,
    options?: GrenacheNodejsWS.RPCOptions
  );

  init(): void;

  request<TResponse = unknown>(
    service: string,
    payload: unknown,
    options: GrenacheNodejsWS.RPCOptions,
    callback: GrenacheNodejsWS.Callback<TResponse>
  ): void;
}

declare class PeerRPCServer extends EventEmitter {
  constructor(
    link: Link,
    options?: GrenacheNodejsWS.RPCOptions
  );

  init(): void;

  listen<TRequest = unknown, TResponse = unknown>(
    service: string,
    handler: GrenacheNodejsWS.RequestHandler<TRequest, TResponse>
  ): void;
}

export { PeerRPCClient, PeerRPCServer };