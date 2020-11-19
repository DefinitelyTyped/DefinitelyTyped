// Type definitions for cbor 5.0
// Project: https://github.com/hildjj/node-cbor
// Definitions by: Jeffery Grajkowski <https://github.com/pushplay>
//                 Peter Boromissza <https://github.com/boromisp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import stream = require('stream');

export interface DecoderOptions extends stream.TransformOptions {
    max_depth?: number;
    tags?: { [tag: number]: (v: any) => any };
    bigint?: boolean;
}

interface DecodeOptions {
    encoding?: string;
}

type decodeCallback = (error?: Error, value?: any) => void;
type decodeAllCallback = (error?: Error, value?: any[]) => void;

export class Decoder extends stream.Transform {
    constructor(options?: DecoderOptions);

    static nullcheck(val: any): any;
    static decodeFirstSync(input: string | Buffer | ArrayBufferView, options?: DecodeOptions | string): any;
    static decodeAllSync(input: string | Buffer | ArrayBufferView, options?: DecodeOptions | string): any[];

    static decodeFirst(input: string | Buffer | ArrayBufferView, cb: decodeCallback): void;
    static decodeFirst(input: string | Buffer | ArrayBufferView, options: DecodeOptions | string, cb: decodeCallback): void;
    static decodeFirst(input: string | Buffer | ArrayBufferView, options?: DecodeOptions | string): Promise<any>;

    static decodeAll(input: string | Buffer | ArrayBufferView, cb: decodeAllCallback): void;
    static decodeAll(input: string | Buffer | ArrayBufferView, options: DecodeOptions | string, cb: decodeAllCallback): void;
    static decodeAll(input: string | Buffer | ArrayBufferView, options?: DecodeOptions | string): Promise<any>;
}

export interface EncoderOptions extends stream.TransformOptions {
    genTypes?: any[];
    canonical?: boolean;
    detectLoops?: boolean | symbol;
    dateType?: 'number' | 'float' | 'int' | 'string';
    encodeUndefined?: any;
    disallowUndefinedKeys?: boolean;
}

export class Encoder extends stream.Transform {
    constructor(options?: EncoderOptions);
    addSemanticType<T>(
        type: new (...args: any[]) => T,
        encodeFunction: (encoder: Encoder, t: T) => boolean,
    ): (encoder: Encoder, t: T) => boolean | null;
    pushAny(input: any): boolean;
    removeLoopDetectors(obj: any): boolean;

    static encode(...objs: any[]): Buffer | ArrayBufferView;
    static encodeCanonical(...objs: any[]): Buffer | ArrayBufferView;
    static encodeOne(obj: any, options?: EncoderOptions): Buffer | ArrayBufferView;
    static encodeAsync(obj: any, options?: EncoderOptions): Promise<Buffer | ArrayBufferView>;
}

export class Simple {
    constructor(value: number);

    toString(): string;
    encodeCBOR(gen: Encoder): boolean;

    static isSimple(obj: any): boolean;
    static decode(
        val: number,
        has_parent?: boolean,
        parent_indefinite?: boolean,
    ): null | undefined | boolean | symbol | Simple;
}

export interface CommentedOptions extends stream.TransformOptions {
    max_depth?: number;
}

interface CommentOptions {
    max_depth?: number;
    encoding?: string;
}

type commentCallback = (error?: Error, commented?: string) => void;

export class Commented extends stream.Transform {
    constructor(options?: CommentedOptions);

    static comment(input: string | Buffer | ArrayBufferView, cb: commentCallback): void;
    static comment(input: string | Buffer | ArrayBufferView, options: CommentOptions | string, cb: commentCallback): void;
    static comment(input: string | Buffer | ArrayBufferView, options?: CommentOptions | string): Promise<string>;
}

declare class CborMap extends Map {
    constructor(iterable: Iterable<[any, any]>);
    encodeCBOR(gen: Encoder): boolean;
}

export { CborMap as Map };

export class Tagged {
    constructor(tag: number, value?: any, err?: Error);

    toString(): string;
    encodeCBOR(gen: Encoder): boolean;
    convert(converters?: { [tag: number]: (val: any) => any }): any;
}

export interface DiagnoseOptions extends stream.TransformOptions {
    separator?: string;
    stream_errors?: boolean;
    max_depth?: number;
}

type diagnoseCallback = (error?: Error, str?: string) => void;
export class Diagnose extends stream.Transform {
    constructor(options?: DiagnoseOptions);

    static diagnose(input: string | Buffer | ArrayBufferView, encoding?: string): Promise<string>;
    static diagnose(input: string | Buffer | ArrayBufferView, cb: diagnoseCallback): void;
}

export const decode: typeof Decoder.decodeFirstSync;
export const decodeFirstSync: typeof Decoder.decodeFirstSync;
export const decodeAllSync: typeof Decoder.decodeAllSync;
export const decodeFirst: typeof Decoder.decodeFirst;
export const decodeAll: typeof Decoder.decodeAll;

export const encode: typeof Encoder.encode;
export const encodeCanonical: typeof Encoder.encodeCanonical;
export const encodeOne: typeof Encoder.encodeOne;
export const encodeAsync: typeof Encoder.encodeAsync;

export const comment: typeof Commented.comment;

export namespace leveldb {
    const decode: typeof Decoder.decodeAllSync;
    const encode: typeof Encoder.encode;
    const buffer: true;
    const name: 'cbor';
}
