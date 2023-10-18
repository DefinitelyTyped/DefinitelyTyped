/// <reference types="node" />

import { IncomingMessage, ServerResponse } from "http";
import { Http2ServerRequest, Http2ServerResponse } from "http2";
import { AddressInfo } from "net";

declare class S3rver {
    constructor(options: S3rverOptions);
    run(): Promise<AddressInfo>;
    run(callback: (error: Error | null, address: AddressInfo) => void): this;
    close(): Promise<void>;
    close(callback: (error?: Error) => void): this;
    callback(): (req: IncomingMessage | Http2ServerRequest, res: ServerResponse | Http2ServerResponse) => void;
    getMiddleware(): (req: IncomingMessage | Http2ServerRequest, res: ServerResponse | Http2ServerResponse) => void;
    configureBuckets(): Promise<void>;
    reset(): void;
}

interface S3rverOptions {
    address?: string | undefined;
    port?: number | undefined;
    key?: string | Buffer | undefined;
    cert?: string | Buffer | undefined;
    silent?: boolean | undefined;
    serviceEndpoint?: string | undefined;
    directory?: string | undefined;
    resetOnClose?: boolean | undefined;
    allowMismatchedSignatures?: boolean | undefined;
    vhostBuckets?: boolean | undefined;
    configureBuckets?: ReadonlyArray<S3rverBucketConfig> | undefined;
}

interface S3rverBucketConfig {
    name: string;
    configs: ReadonlyArray<string | Buffer>;
}

export = S3rver;
