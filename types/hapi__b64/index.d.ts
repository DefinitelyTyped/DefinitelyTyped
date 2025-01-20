/// <reference types='node' />

import * as stream from "stream";

export class Decoder extends stream.Transform {}
export class Encoder extends stream.Transform {}

export function decode(buffer: Buffer): Buffer;
export function encode(buffer: Buffer): Buffer;

export function base64urlEncode(value: string | Buffer, encoding?: BufferEncoding): string;

export function base64urlDecode(value: string, encoding?: BufferEncoding): string;
export function base64urlDecode(value: string, encoding: "buffer"): Buffer;
