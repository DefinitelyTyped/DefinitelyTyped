// Type definitions for buffers 0.1.1
// Project: https://github.com/substack/node-buffers
// Definitions by: Robert Hencke <https://github.com/rhencke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>



interface BuffersStatics {
    new (bufs?: Buffer[] | Buffers): Buffers;
    (bufs?: Buffer[] | Buffers): Buffers;
    prototype: Buffers;
}

interface Buffers {
    buffers: Buffer[];
    length: number;

    push(...items: Buffer[]): number;
    unshift(...items: Buffer[]): number;
    slice(i?: number, j?: number): Buffer;
    splice(i: number, howMany?: number, ...items: Buffer[]): Buffers;
    copy(dst: Buffer, dstStart?: number, start?: number, end?: number): number;
    get(i: number): any;
    set(i: number, b: any): void;
    indexOf(needle: string | Buffer, offset?: number): number;
    toBuffer(): Buffer;
    toString(encoding?: any, start?: number, end?: number): string;
}

declare var Buffers: BuffersStatics;

export = Buffers;
