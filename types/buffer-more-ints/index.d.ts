/// <reference types="node" />

import { Buffer } from "buffer";

/**
 * Checks if a value can be represented as a contiguous integer
 * (i.e., it's within the range that can be exactly represented by IEEE754 doubles).
 * @param val The value to check
 * @returns true if the value can be represented exactly
 */
export function isContiguousInt(val: number): boolean;

/**
 * Throws a TypeError if the value cannot be represented as a contiguous integer.
 * @param val The value to check
 * @throws TypeError if the value cannot be represented as a contiguous integer
 */
export function assertContiguousInt(val: number): void;

// 8-bit integers
export function readUInt8(buf: Buffer, offset: number): number;
export function writeUInt8(buf: Buffer, val: number, offset: number): void;
export function readInt8(buf: Buffer, offset: number): number;
export function writeInt8(buf: Buffer, val: number, offset: number): void;

// 16-bit integers
export function readUInt16BE(buf: Buffer, offset: number): number;
export function writeUInt16BE(buf: Buffer, val: number, offset: number): void;
export function readUInt16LE(buf: Buffer, offset: number): number;
export function writeUInt16LE(buf: Buffer, val: number, offset: number): void;
export function readInt16BE(buf: Buffer, offset: number): number;
export function writeInt16BE(buf: Buffer, val: number, offset: number): void;
export function readInt16LE(buf: Buffer, offset: number): number;
export function writeInt16LE(buf: Buffer, val: number, offset: number): void;

// 24-bit integers
export function readUInt24BE(buf: Buffer, offset: number): number;
export function writeUInt24BE(buf: Buffer, val: number, offset: number): void;
export function readUInt24LE(buf: Buffer, offset: number): number;
export function writeUInt24LE(buf: Buffer, val: number, offset: number): void;
export function readInt24BE(buf: Buffer, offset: number): number;
export function writeInt24BE(buf: Buffer, val: number, offset: number): void;
export function readInt24LE(buf: Buffer, offset: number): number;
export function writeInt24LE(buf: Buffer, val: number, offset: number): void;

// 32-bit integers
export function readUInt32BE(buf: Buffer, offset: number): number;
export function writeUInt32BE(buf: Buffer, val: number, offset: number): void;
export function readUInt32LE(buf: Buffer, offset: number): number;
export function writeUInt32LE(buf: Buffer, val: number, offset: number): void;
export function readInt32BE(buf: Buffer, offset: number): number;
export function writeInt32BE(buf: Buffer, val: number, offset: number): void;
export function readInt32LE(buf: Buffer, offset: number): number;
export function writeInt32LE(buf: Buffer, val: number, offset: number): void;

// 40-bit integers
export function readUInt40BE(buf: Buffer, offset: number): number;
export function writeUInt40BE(buf: Buffer, val: number, offset: number): void;
export function readUInt40LE(buf: Buffer, offset: number): number;
export function writeUInt40LE(buf: Buffer, val: number, offset: number): void;
export function readInt40BE(buf: Buffer, offset: number): number;
export function writeInt40BE(buf: Buffer, val: number, offset: number): void;
export function readInt40LE(buf: Buffer, offset: number): number;
export function writeInt40LE(buf: Buffer, val: number, offset: number): void;

// 48-bit integers
export function readUInt48BE(buf: Buffer, offset: number): number;
export function writeUInt48BE(buf: Buffer, val: number, offset: number): void;
export function readUInt48LE(buf: Buffer, offset: number): number;
export function writeUInt48LE(buf: Buffer, val: number, offset: number): void;
export function readInt48BE(buf: Buffer, offset: number): number;
export function writeInt48BE(buf: Buffer, val: number, offset: number): void;
export function readInt48LE(buf: Buffer, offset: number): number;
export function writeInt48LE(buf: Buffer, val: number, offset: number): void;

// 56-bit integers
export function readUInt56BE(buf: Buffer, offset: number): number;
export function writeUInt56BE(buf: Buffer, val: number, offset: number): void;
export function readUInt56LE(buf: Buffer, offset: number): number;
export function writeUInt56LE(buf: Buffer, val: number, offset: number): void;
export function readInt56BE(buf: Buffer, offset: number): number;
export function writeInt56BE(buf: Buffer, val: number, offset: number): void;
export function readInt56LE(buf: Buffer, offset: number): number;
export function writeInt56LE(buf: Buffer, val: number, offset: number): void;

// 64-bit integers
export function readUInt64BE(buf: Buffer, offset: number): number;
export function writeUInt64BE(buf: Buffer, val: number, offset: number): void;
export function readUInt64LE(buf: Buffer, offset: number): number;
export function writeUInt64LE(buf: Buffer, val: number, offset: number): void;
export function readInt64BE(buf: Buffer, offset: number): number;
export function writeInt64BE(buf: Buffer, val: number, offset: number): void;
export function readInt64LE(buf: Buffer, offset: number): number;
export function writeInt64LE(buf: Buffer, val: number, offset: number): void;
