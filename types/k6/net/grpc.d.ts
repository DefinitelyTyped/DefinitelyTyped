// === Response ===
// ----------------

/**
 * gRPC response.
 */
export interface Response {
    status: number;

    message: object;

    headers: object;

    trailers: object;

    error: object;
}

export interface ConnectParams {
    plaintext?: boolean;

    reflect?: boolean;

    timeout?: string | number;
}

export interface Params {
    /**
     * @deprecated Use metadata instead.
     */
    headers?: object;

    metadata?: object;

    tags?: object;

    timeout?: string | number;
}

/**
 * This module provides a gRPC client for Remote Procedure Calls over HTTP/2.
 * https://k6.io/docs/javascript-api/k6-net-grpc/
 */
declare namespace grpc {
    /**
     * gRPC client to interact with a gRPC server.
     * https://k6.io/docs/javascript-api/k6-net-grpc/client/
     */
    class Client {
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

    const StatusOK: number;
    const StatusCanceled: number;
    const StatusUnknown: number;
    const StatusInvalidArgument: number;
    const StatusDeadlineExceeded: number;
    const StatusNotFound: number;
    const StatusAlreadyExists: number;
    const StatusPermissionDenied: number;
    const StatusResourceExhausted: number;
    const StatusFailedPrecondition: number;
    const StatusAborted: number;
    const StatusOutOfRange: number;
    const StatusUnimplemented: number;
    const StatusInternal: number;
    const StatusUnavailable: number;
    const StatusDataLoss: number;
    const StatusUnauthenticated: number;
}

export default grpc;
