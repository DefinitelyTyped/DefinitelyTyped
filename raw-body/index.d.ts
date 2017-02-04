// Type definitions for raw-body 2.1
// Project: https://github.com/stream-utils/raw-body
// Definitions by: Stefan Reichel <https://github.com/bomret>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Readable } from "stream";

declare namespace getRawBody {
    export type Encoding = string | true;

    export interface Options {
        length?: number;
        limit?: number;
        encoding?: Encoding;
    }

    export interface RawBodyError extends Error {
        limit?: number;
        length?: number;
        expected?: number;
        received?: number;
        encoding?: string;
        status: number;
        statusCode: number;
        type: string;
    }
}


declare function getRawBody(stream: Readable, callback: (err: getRawBody.RawBodyError, body: Buffer) => void): void;
declare function getRawBody(stream: Readable, options: (getRawBody.Options & { encoding: getRawBody.Encoding }) | getRawBody.Encoding, callback: (err: getRawBody.RawBodyError, body: string) => void): void;
declare function getRawBody(stream: Readable, options: getRawBody.Options, callback: (err: getRawBody.RawBodyError, body: Buffer) => void): void;

declare function getRawBody(stream: Readable, options: (getRawBody.Options & { encoding: getRawBody.Encoding }) | getRawBody.Encoding): Promise<string>;
declare function getRawBody(stream: Readable, options?: getRawBody.Options): Promise<Buffer>;

export = getRawBody;
