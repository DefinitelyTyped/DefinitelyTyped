// Type definitions for pg-copy-streams 1.2
// Project: https://github.com/brianc/node-pg-copy-streams
// Definitions by: Brian Crowell <https://github.com/fluggo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { Submittable, Connection } from "pg";
import { Transform, TransformOptions } from "stream";

export function from(txt: string, options?: TransformOptions): CopyStreamQuery;
export function to(txt: string, options?: TransformOptions): CopyToStreamQuery;

export class CopyStreamQuery extends Transform implements Submittable {
    submit(connection: Connection): void;
}

export class CopyToStreamQuery extends Transform implements Submittable {
    submit(connection: Connection): void;
}
