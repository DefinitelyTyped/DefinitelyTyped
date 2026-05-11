/// <reference types="node" />

/**
 * Deserialize signed 64-bit int encoded as Big Endian (BE).
 *
 * @example
 * import * as int53 from 'int53'
 *
 * int53.readInt64BE(Buffer.from('0000FFFFFFFFFFFF', 'hex')) // => 0xFFFFFFFFFFF
 */
export function readInt64BE(buffer: Buffer, offset?: number): number;
/**
 * Deserialize signed 64-bit int encoded as Little Endian (LE).
 *
 * @example
 * import * as int53 from 'int53'
 *
 * int53.readInt64LE(Buffer.from('ffffffffffff0000', 'hex')) // => 0xFFFFFFFFFFF
 */
export function readInt64LE(buffer: Buffer, offset?: number): number;
/**
 * Deserialize unsigned 64-bit int encoded as Big Endian (BE).
 *
 * @example
 * import * as int53 from 'int53'
 *
 * int53.readUInt64BE(Buffer.from('0000FFFFFFFFFFFF', 'hex')) // => 0xFFFFFFFFFFF
 */
export function readUInt64BE(buffer: Buffer, offset?: number): number;
/**
 * Deserialize unsigned 64-bit int encoded as Little Endian (LE).
 *
 * @example
 * import * as int53 from 'int53'
 *
 * int53.readUInt64LE(Buffer.from('ffffffffffff0000', 'hex')) // => 0xFFFFFFFFFFF
 */
export function readUInt64LE(buffer: Buffer, offset?: number): number;
/**
 * Serialize signed 64-bit int encoded as Big Endian (BE).
 *
 * @example
 * import * as int53 from 'int53'
 *
 * const buf = Buffer.alloc(8)
 * int53.writeInt64BE(0xFFFFFFFFFFF, buf)
 */
export function writeInt64BE(number: number, buffer: Buffer, offset?: number): void;
/**
 * Serialize signed 64-bit int encoded as Little Endian (LE).
 *
 * @example
 * import * as int53 from 'int53'
 *
 * const buf = Buffer.alloc(8)
 * int53.writeInt64LE(0xFFFFFFFFFFF, buf)
 */
export function writeInt64LE(number: number, buffer: Buffer, offset?: number): void;
/**
 * Serialize unsigned 64-bit int encoded as Big Endian (BE).
 *
 * @example
 * import * as int53 from 'int53'
 *
 * const buf = Buffer.alloc(8)
 * int53.writeUInt64BE(0xFFFFFFFFFFF, buf)
 */
export function writeUInt64BE(number: number, buffer: Buffer, offset?: number): void;
/**
 * Serialize unsigned 64-bit int encoded as Little Endian (LE).
 *
 * @example
 * import * as int53 from 'int53'
 *
 * const buf = Buffer.alloc(8)
 * int53.writeUInt64LE(0xFFFFFFFFFFF, buf)
 */
export function writeUInt64LE(number: number, buffer: Buffer, offset?: number): void;
