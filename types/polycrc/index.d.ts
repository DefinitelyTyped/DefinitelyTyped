// Type definitions for polycrc 0.1
// Project: https://github.com/latysheff/node-polycrc#readme
// Definitions by: Emmanuel <https://github.com/emmanuelm41>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export class CRC {
    constructor(width: number, poly: number, xor_in: number, xor_out: number, reflect: boolean);
    calculate(buffer: Buffer): number;
    calculate_no_table(buffer: Buffer): number;
    gen_table(): Int32Array;
    print_table(): string;
}

export function crc(
    width: number,
    poly: number,
    xor_in: number,
    xor_out: number,
    reflect: boolean,
): (buffer: Buffer) => number;

export const crc1: CRC;
export const crc6: CRC;
export const crc8: CRC;
export const crc10: CRC;
export const crc16: CRC;
export const crc24: CRC;
export const crc32: CRC;
export const crc32c: CRC;
