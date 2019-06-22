// Type definitions for k6 1.0
// Project: https://docs.k6.io/docs
// Definitions by: MajorBreakfast <https://github.com/MajorBreakfast>
//                 Book Moons <https://github.com/bookmoons>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

export type byte = number; // [0,256)
export type bytes = byte[];

// Only available in init context
// Available without importing
declare global {
    function open(filePath: string): string;
    function open(filePath: string, mode: 'b'): bytes;
}

export function check<T>(val: T, sets: { [key: string]: (val: T) => boolean }, tags?: object): boolean;

export function fail(err?: string): undefined;

export function group<T>(name: string, fn: () => T): T;

export function sleep(t: number): void;
