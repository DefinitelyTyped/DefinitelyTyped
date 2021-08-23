// Type definitions for ethjs-util 0.1
// Project: https://github.com/ethjs/ethjs-util#readme
// Definitions by: tomonari-t <https://github.com/tomoari-t>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function isHexPrefixed(str: string): boolean;

export function stripHexPrefix(str: string): string;

export function padToEven(value: string): string;

export function intToHex(i: number): string;

export function intToBuffer(i: number): Buffer;

export function getBinarySize(str: string): number;

export function arrayContainsArray(superset: any[], subset: any[], some?: boolean): boolean;

export function toUtf8(hex: string): string;

export function toAscii(hex: string): string;

export function fromUtf8(stringValue: string): string;

export function fromAscii(stringValue: string): string;

export function getKeys(params: any[], key: string, allowEmpty?: boolean): any[];

export function isHexString(value: string, length?: number): boolean;
