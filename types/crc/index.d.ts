// Type definitions for crc 3.4
// Project: https://github.com/alexgorbatchev/node-crc/
// Definitions by: Jianrong Yu <https://github.com/YuJianrong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function crc1(buf: string | Buffer, previous?: number): number;
export function crc8(buf: string | Buffer, previous?: number): number;
export function crc81wire(buf: string | Buffer, previous?: number): number;
export function crc16(buf: string | Buffer, previous?: number): number;
export function crc16ccitt(buf: string | Buffer, previous?: number): number;
export function crc16modbus(buf: string | Buffer, previous?: number): number;
export function crc16xmodem(buf: string | Buffer, previous?: number): number;
export function crc16kermit(buf: string | Buffer, previous?: number): number;
export function crc24(buf: string | Buffer, previous?: number): number;
export function crc32(buf: string | Buffer, previous?: number): number;
