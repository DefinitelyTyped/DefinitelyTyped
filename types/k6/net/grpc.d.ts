// === Response ===
// ----------------

/**
 * gRPC response.
 */
export interface Response {
    status: number;

    message: string;

    headers: object;

    trailers: object;

    error: object;
}

export interface ConnectParams {
    plaintext?: boolean;

    timeout?: number;
}

export interface Params {
    headers?: object;

    tags?: object;

    timeout?: string;
}

export abstract class Client {
    protected __brand: never;

    constructor();

    /** Opens a connection to a gRPC server. */
    connect(address: string, params?: ConnectParams): void;

    /** Loads and parses the protocol buffer descriptors. */
    load(importPaths: string[], ...protoFiles: string[]): void;

    /** Invokes an unary RPC request. */
    invoke(url: string, request: object, params?: Params): Response;

    /** Close the connection. */
    close(): void;
}

/**
 * This module provides a gRPC client for Remote Procedure Calls over HTTP/2.
 * https://k6.io/docs/javascript-api/k6-net-grpc
 */
declare namespace grpc {
    class Client {
        protected __brand: never;

        constructor();

        /** Opens a connection to a gRPC server. */
        connect(address: string, params?: ConnectParams): void;

        /** Loads and parses the protocol buffer descriptors. */
        load(importPaths: string[], protoFiles: string): void;

        /** Invokes an unary RPC request. */
        invoke(url: string, request: object, params?: Params): Response;

        /** Close the connection. */
        close(): void;
    }
}

export default grpc;
