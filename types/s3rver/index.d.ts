// Type definitions for S3rver
// Project: https://github.com/jamhall/s3rver
// Definitions by: David Broder-Rodgers <https://github.com/DavidBR-SW/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


import * as http from "http";

declare class S3rver {
    constructor(options: S3rverOptions)
    setPort(port: number): S3rver;
    setHostname(hostname: string): S3rver;
    setDirectory(directory: string): S3rver;
    setSilent(silent: boolean): S3rver;
    setIndexDocument(indexDocument: string): S3rver;
    setErrorDocument(errorDocument: string): S3rver;
    run(callback: (error: Error, hostname: string, port: number, directory: string) => void): http.Server;
}

interface S3rverOptions {
    port?: number;
    hostname?: string;
    silent?: boolean;
    indexDocument?: string;
    errorDocument?: string;
    directory: string;
}

export = S3rver;
