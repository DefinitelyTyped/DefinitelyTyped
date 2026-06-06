/// <reference types="node" />

import { DuplexOptions, Transform } from "stream";
import { ThroughStream } from "through";

export interface ParseOptions {
    strict?: boolean | undefined;
}

export function parse(opts?: ParseOptions): ThroughStream;

export function stringify(opts?: DuplexOptions): Transform;
