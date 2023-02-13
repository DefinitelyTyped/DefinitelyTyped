/*
 * Copyright (c) 2020-2022 Moddable Tech, Inc
 *
 *   This file is part of the Moddable SDK Tools.
 *
 *   The Moddable SDK Tools is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   The Moddable SDK Tools is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with the Moddable SDK Tools.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

interface Trace {
    (...log: (string | number | boolean)[]): void;
    left(log: string | ArrayBufferLike, conversation?: string): void;
    center(log: string | ArrayBufferLike, conversation?: string): void;
    right(log: string | ArrayBufferLike, conversation?: string): void;
}
declare const trace: Trace;

declare class HostBuffer {
    readonly byteLength: number;
    private brand: boolean;
}

interface ArrayBufferTypes {
    HostBuffer: HostBuffer;
}

interface BufferTypes extends ArrayBufferTypes {
    Uint8Array: Uint8Array;
    Uint8ClampedArray: Uint8ClampedArray;
    Int8Array: Int8Array;
    DataView: DataView;
}

type BufferLike = BufferTypes[keyof BufferTypes];

interface ObjectConstructor {
    freeze<T>(obj: T, freeze?: boolean | number): Readonly<T>;
}

interface JSON {
    parse(text: string, reviver?: string[]): any;
}

interface StringConstructor {
    fromArrayBuffer(buffer: ArrayBufferLike): string;
}

interface ArrayBufferConstructor {
    fromString(string: string): ArrayBuffer;
    fromBigInt(value: BigInt): ArrayBuffer;
}

interface ArrayBuffer {
    concat(...buffers: ArrayBufferLike[]): ArrayBuffer;
}

interface BigIntConstructor {
    bitLength(value: BigInt): number;
    fromArrayBuffer(buffer: ArrayBufferLike): BigInt;
}

// Compartment?
