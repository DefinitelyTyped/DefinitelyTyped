/// <reference types="node" />

export type Encoding = 'ascii' | 'base64' | 'hex' | 'utf8';

/**
 * Read a uint24 from a buffer starting at the given offset.
 */
export function readUInt24BE(buffer: Buffer, offset: number): number;

/**
 * Writes a uint24 to a buffer starting at the given offset, returning the
 * offset of the next byte.
 */
export function writeUInt24BE(buffer: Buffer, value: number, offset: number): number;

/**
 * Read a uint64 (technically supports up to 53 bits per JS number
 * representation).
 */
export function readUInt64BE(buffer: Buffer, offset: number): number;

/**
 * Write a uint64 (technically supports up to 53 bits per JS number
 * representation).
 */
export function writeUInt64BE(buffer: Buffer, value: number, offset: number): number;

/**
 * Determine the number of bytes it would take to encode the given data with the
 * given encoding.
 */
export function byteLength(data: any, encoding: Encoding): number;

/**
 * Attempts to construct a buffer from the input, throws if invalid.
 */
export function toBuffer(data: any): Buffer;

/**
 * Function to create a buffer of a given sized filled with zeros.
 */
export function createBuffer(...args: any[]): Buffer;
