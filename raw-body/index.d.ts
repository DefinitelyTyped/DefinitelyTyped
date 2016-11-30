// Type definitions for raw-body 2.1
// Project: https://github.com/stream-utils/raw-body
// Definitions by: Stefan Reichel <https://github.com/bomret>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Readable } from "stream";

declare namespace getRawBody {
    export interface Options {
        length?: number;
        limit?: number;
        encoding?: string;
    }

    export interface RawBodyError extends Error {
        limit?: number;
        length?: number;
        expected?: number;
        received?: number;
        encoding?: string;
        status?: number;
        statusCode?: number;
        type?: string;
    }

    export type Callback = (err: RawBodyError, res: string | Buffer) => void;
}


declare function getRawBody(stream: Readable, callback: getRawBody.Callback): void;
declare function getRawBody(stream: Readable, options: getRawBody.Options | string, callback: getRawBody.Callback): void;

declare function getRawBody(stream: Readable, options?: getRawBody.Options | string): Promise<string | Buffer>;

export = getRawBody;
