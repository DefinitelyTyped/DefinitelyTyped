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
    /**
     * If `true` will connect to the gRPC server using plaintext i.e. insecure.
     */
    plaintext?: boolean;

    /**
     * If `true` connection will try to use the gRPC server reflection protocol.
     * https://github.com/grpc/grpc/blob/master/doc/server-reflection.md
     */
    reflect?: boolean;

    /**
     * Metadata to send with reflection request.
     */
    reflectMetadata?: object;

    /**
     * Connection timeout to use.
     */
    timeout?: string | number;

    /**
     *  Maximum message size in bytes the client can receive.
     */
    maxReceiveSize?: number;

    /**
     * Maximum message size in bytes the client can send.
     */
    maxSendSize?: number;

    /**
     * TLS settings of the connection.
     */
    tls?: TLSParams;
}

export interface TLSParams {
    /**
     *  PEM formatted client certificate.
     */
    cert: string;

    /**
     * PEM formatted client private key.
     */
    key: string;

    /**
     * Password for decrypting the client's private key.
     */
    password?: string;

    /**
     * PEM formatted string/strings of the certificate authorities.
     */
    cacerts?: string | string[];
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
 * https://grafana.com/docs/k6/latest/javascript-api/k6-net-grpc/
 */
declare namespace grpc {
    /**
     * gRPC client to interact with a gRPC server.
     * https://grafana.com/docs/k6/latest/javascript-api/k6-net-grpc/client/
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
