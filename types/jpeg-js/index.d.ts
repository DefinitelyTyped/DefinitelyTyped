// Type definitions for jpeg-js 0.3
// Project: https://github.com/eugeneware/jpeg-js#readme
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface RawImageData<D extends Uint8Array> {
    data: D;
    width: number;
    height: number;
}

export function decode(jpegData: ArrayLike<number> | Iterable<number> | ArrayBuffer, useTypedArray: true): RawImageData<Uint8Array>;
export function decode(jpegData: ArrayLike<number> | Iterable<number> | ArrayBuffer, useTypedArray?: false): RawImageData<Buffer>;
export function decode(jpegData: ArrayLike<number> | Iterable<number> | ArrayBuffer, useTypedArray: boolean): RawImageData<Uint8Array | Buffer>;

export function encode(imgData: RawImageData<Uint8Array | Buffer>, qu?: number): RawImageData<Buffer>;
