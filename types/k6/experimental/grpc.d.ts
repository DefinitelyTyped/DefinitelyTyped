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

    maxReceiveSize?: number;

    maxSendSize?: number;
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

export interface GrpcError {
    code: number;
    details: string[] | object[];
    message: string;
}

/**
 * This module provides classes for Remote Procedure Calls over HTTP/2.
 * https://k6.io/docs/javascript-api/k6-experimental/grpc/
 */
declare namespace grpc {
    /**
     * gRPC client to interact with a gRPC server.
     * https://k6.io/docs/javascript-api/k6-experimental/grpc/client/
     */
    class Client {
        protected __brand: never;

        constructor();

        /** Opens a connection to a gRPC server. */
        connect(address: string, params?: ConnectParams): void;

        /** Loads and parses the protocol buffer descriptors. */
        load(importPaths: string[], ...protoFiles: string[]): void;

        /** Loads a protoset and parses the protocol buffer descriptors */
        loadProtoset(protosetPath: string): void;

        /** Invokes an unary RPC request. */
        invoke(url: string, request: object, params?: Params): Response;

        /** Close the connection. */
        close(): void;
    }

    /**
     * StreamEvent describes the possible events that can be emitted
     * by a gRPC stream.
     */
    enum StreamEvent {
        /**
         * Event fired when data has been received from the server.
         */
        Data = 'data',

        /**
         * Event fired when a stream has been closed due to an error.
         */
        Error = 'error',

        /**
         * Event fired when the stream closes.
         */
        End = 'end',
    }

    /**
     * Stream allows you to use streaming RPCs.
     */
    class Stream {
        /**
         * The gRPC stream constructor, representing a single gRPC stream.
         *
         * @param client - the gRPC client to use, it must be connected.
         * @param url - the RPC method to call.
         * @param params - the parameters to use for the RPC call.
         */
        constructor(client: Client, url: string, params?: Params);

        /**
         * Set up handler functions for various events on the gRPC stream.
         *
         * @param event - the event to listen for
         * @param listener - the callback to invoke when the event is emitted
         */
        on(event: StreamEvent, listener: (data: object | GrpcError | undefined) => void): void;

        /**
         * Writes a request to the stream.
         *
         * @param request - the request (message) to send to the server
         */
        write(request: object): void;

        /**
         * Signals to the server that the client has finished sending messages.
         */
        end(): void;
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
