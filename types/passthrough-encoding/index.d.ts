/// <reference types="node" />

/**
 * An encoder that encodes buffers/strings to a buffer and is
 * [abstract-encoding](https://github.com/mafintosh/abstract-encoding) compatible.
 *
 * @example
 * import * as codec from 'passthrough-encoding'
 *
 * console.log(codec.encode(Buffer.from('hello'))) // prints Buffer('hello')
 * console.log(codec.encode('hello')) // prints Buffer('hello')
 */
export function encode(value: Buffer | string | null | undefined, buffer?: Buffer, offset?: number): Buffer;
export namespace encode {
    const bytes: number;
}

/**
 * An decoder that decodes a buffer to a buffer and is
 * [abstract-encoding](https://github.com/mafintosh/abstract-encoding) compatible.
 *
 * @example
 * import * as codec from 'passthrough-encoding'
 *
 * console.log(codec.decode(Buffer.from('hello'))) // prints Buffer('hello')
 */
export function decode(buffer: Buffer, offset?: number, end?: number): Buffer;
export namespace decode {
    const bytes: number;
}

export function encodingLength(buf: Buffer | string | null | undefined): number;
