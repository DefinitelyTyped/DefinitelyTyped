/// <reference types="node" />

import { Transform } from "stream";

export interface Options {
    emitInvalidLines?: boolean | undefined;
}

/** A transform stream that turns newline separated json into a stream of javascript values. */
export class Parser extends Transform {
    // inherited (must re-declare since this is a class)
    on(event: "close" | "end" | "pause" | "readable" | "resume", listener: () => void): this;
    // added 'invalid-line'
    on(event: "error" | "invalid-line", listener: (err: Error) => void): this;
    // changed
    on(event: "data", listener: (data: any) => void): this;
    // inherited
    on(event: string | symbol, listener: (...args: any[]) => void): this;
}

/** A transform stream that turns javascript values into a stream of newline separated json. */
export class Stringifier extends Transform {
    // inherited (must re-declare since this is a class)
    on(event: "close" | "end" | "pause" | "readable" | "resume", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    // changed
    on(event: "data", listener: (data: any) => void): this;
    // inherited
    on(event: string | symbol, listener: (...args: any[]) => void): this;
}

/** Returns a transform stream that turns newline separated json into a stream of javascript values. */
export function parse(options?: Options): Parser;

/** Returns a transform stream that turns javascript values into a stream of newline separated json. */
export function stringify(): Stringifier;
