// Type definitions for pg-copy-streams 1.2
// Project: https://github.com/brianc/node-pg-copy-streams
// Definitions by: Brian Crowell <https://github.com/fluggo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { Connection, Submittable } from "pg";
import { Readable, ReadableOptions, Writable, WritableOptions } from "stream";

export function from(txt: string, options?: WritableOptions): CopyStreamQuery;
export function to(txt: string, options?: ReadableOptions): CopyToStreamQuery;

export class CopyStreamQuery extends Writable implements Submittable {
    text: string;
    rowCount: number;
    submit(connection: Connection): void;
}

export class CopyToStreamQuery extends Readable implements Submittable {
    text: string;
    rowCount: number;
    submit(connection: Connection): void;
}
