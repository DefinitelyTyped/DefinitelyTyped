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
     * Object with key-value pairs representing custom metadata the user would like to add to the request.
     */
    metadata?: object;

    /**
     * Key-value pairs where the keys are names of tags and the values are tag values
     */
    tags?: object;

    /**
     * Request timeout to use.
     */
    timeout?: string | number;

    /**
     * Specify if response messages should be discarded.
     */
    discardResponseMessage?: boolean;
}

export interface GrpcError {
    code: number;
    details: string[] | object[];
    message: string;
}

/**
 * gRPC client to interact with a gRPC server.
 * https://grafana.com/docs/k6/latest/javascript-api/k6-net-grpc/client/
 */
export class Client {
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

    /** Asynchronously invokes an unary RPC request. */
    asyncInvoke(url: string, request: object, params?: Params): Promise<Response>;

    /** Close the connection. */
    close(): void;
}

/**
 * StreamEvent describes the possible events that can be emitted
 * by a gRPC stream.
 */
export type StreamEvent =
    /**
     * Event fired when data has been received from the server.
     */
    | "data"
    /**
     * Event fired when a stream has been closed due to an error.
     */
    | "error"
    /**
     * Event fired when the stream closes.
     */
    | "end";

/**
 * StreamMessageMetadata handles gRPC stream messages's metadata
 */
export interface StreamMessageMetadata {
    /**
     * Contains the timestamp of the original event (for example, when a message has been received).
     */
    ts: number;
}

/**
 * Stream allows you to use streaming RPCs.
 */
export class Stream {
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
    on(
        event: StreamEvent,
        listener: (data: object | GrpcError | undefined, metadata: StreamMessageMetadata) => void,
    ): void;

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

export const StatusOK: number;
export const StatusCanceled: number;
export const StatusUnknown: number;
export const StatusInvalidArgument: number;
export const StatusDeadlineExceeded: number;
export const StatusNotFound: number;
export const StatusAlreadyExists: number;
export const StatusPermissionDenied: number;
export const StatusResourceExhausted: number;
export const StatusFailedPrecondition: number;
export const StatusAborted: number;
export const StatusOutOfRange: number;
export const StatusUnimplemented: number;
export const StatusInternal: number;
export const StatusUnavailable: number;
export const StatusDataLoss: number;
export const StatusUnauthenticated: number;

export * as default from "k6/net/grpc";
