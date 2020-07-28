// Type definitions for @hapi/b64 5.0
// Project: https://github.com/hapijs/b64#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types='node' />

import * as stream from 'stream';

export class Decoder extends stream.Transform {}
export class Encoder extends stream.Transform {}

export function decode(buffer: Buffer): Buffer;
export function encode(buffer: Buffer): Buffer;

export function base64urlEncode(value: string | Buffer, encoding?: BufferEncoding): string;

export function base64urlDecode(value: string, encoding?: BufferEncoding): string;
export function base64urlDecode(value: string, encoding: 'buffer'): Buffer;
