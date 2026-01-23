/// <reference types="node" />

import { EventEmitter } from "events";
import Link = require("grenache-nodejs-link");

export interface RPCOptions {
    timeout?: number | undefined;
    retry?: number | undefined;
}

export type Callback<T = unknown> = (err: Error | null, data?: T) => void;

export type RequestHandler<TRequest = unknown, TResponse = unknown> = (
    payload: TRequest,
    callback: Callback<TResponse>,
) => void;

declare class PeerRPCClient extends EventEmitter {
    constructor(link: Link, options?: RPCOptions);

    init(): void;

    request<TResponse = unknown>(
        service: string,
        payload: unknown,
        options: RPCOptions,
        callback: Callback<TResponse>,
    ): void;
}

declare class PeerRPCServer extends EventEmitter {
    constructor(link: Link, options?: RPCOptions);

    init(): void;

    listen<TRequest = unknown, TResponse = unknown>(
        service: string,
        handler: RequestHandler<TRequest, TResponse>,
    ): void;
}

declare class PeerSub extends EventEmitter {
    constructor(link: Link, options?: RPCOptions);
    init(): void;
}

declare class PeerPub extends EventEmitter {
    constructor(link: Link, options?: RPCOptions);
    init(): void;
}

declare class TransportRPCServer extends EventEmitter {
    constructor(link: Link, options?: RPCOptions);
    init(): void;
}

declare class TransportRPCClient extends EventEmitter {
    constructor(link: Link, options?: RPCOptions);
    init(): void;
}

export { PeerPub, PeerRPCClient, PeerRPCServer, PeerSub, TransportRPCClient, TransportRPCServer };
