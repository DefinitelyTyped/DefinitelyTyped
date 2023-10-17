/// <reference types="node" />

import { Writable } from "stream";

declare function concat(cb: (buf: Buffer) => void): Writable;
declare function concat(opts: { encoding: "buffer" | undefined } | {}, cb: (buf: Buffer) => void): Writable;
declare function concat(opts: { encoding: "string" }, cb: (buf: string) => void): Writable;
declare function concat(opts: { encoding: "array" }, cb: (buf: Array<bigint>) => void): Writable;
declare function concat(opts: { encoding: "uint8array" | "u8" | "uint8" }, cb: (buf: Uint8Array) => void): Writable;
declare function concat(opts: { encoding: "object" }, cb: (buf: object[]) => void): Writable;

export = concat;
