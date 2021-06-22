// Type definitions for libqp 1.1
// Project: https://github.com/nodemailer/libqp
// Definitions by: Chris. Webster <https://github.com/webstech>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Transform, TransformOptions } from "stream";

/** Encodes a Buffer or String into a Quoted-Printable encoded string */
export function encode(buffer: string | Buffer): string;

/** Decodes a Quoted-Printable encoded string to a Buffer object */
export function decode(input: string): Buffer;

/** Adds soft line breaks to a Quoted-Printable string */
export function wrap(str: string, lineLength?: number): string;

/** Extend options to add lineLength */
export interface EncoderOptions extends TransformOptions {
    lineLength?: number;
}

/** Create a transform stream for encoding data to Quoted-Printable encoding */
export class Encoder extends Transform {
    constructor(opts?: EncoderOptions);
}

/** Create a transform stream for decoding Quoted-Printable encoded strings */
export class Decoder extends Transform {
    constructor(opts?: TransformOptions);
}
