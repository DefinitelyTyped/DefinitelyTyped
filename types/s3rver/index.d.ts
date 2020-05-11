// Type definitions for S3rver
// Project: https://github.com/jamhall/s3rver
// Definitions by: David Broder-Rodgers <https://github.com/DavidBR-SW/>
//                 F. Eugene Aumson <https://github.com/feuGeneA/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

declare class S3rver {
    constructor(options: S3rverOptions)
    setPort(port: number): S3rver;
    setHostname(hostname: string): S3rver;
    setDirectory(directory: string): S3rver;
    setSilent(silent: boolean): S3rver;
    setIndexDocument(indexDocument: string): S3rver;
    setErrorDocument(errorDocument: string): S3rver;
    run(callback: (error: Error | null, hostname: string, port: number, directory: string) => void): S3rver;
    run(): Promise<string>;
    close(): Promise<void>;
    // Should return S3rver, but doesn't in all cases, currently
    // See https://github.com/jamhall/s3rver/pull/571
    close(callback: (error: Error | null) => void): void;
}

interface S3rverOptions {
    port?: number;
    hostname?: string;
    address?: string;
    silent?: boolean;
    key?: string | Buffer;
    cert?: string | Buffer;
    resetOnClose?: boolean;
    indexDocument?: string;
    errorDocument?: string;
    configureBuckets?: S3rverBucketConfig[];
    directory: string;
}

interface S3rverBucketConfig {
    name: string;
    configs: string[] | Buffer[];
}

export = S3rver;
