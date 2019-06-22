// Type definitions for k6 0.24
// Project: https://docs.k6.io/docs
// Definitions by: MajorBreakfast <https://github.com/MajorBreakfast>
//                 Book Moons <https://github.com/bookmoons>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

export type byte = number; // [0,256)
export type bytes = byte[];

export function check<T>(val: T, sets: { [key: string]: (val: T) => boolean }, tags?: object): boolean;
export function fail(err?: string): never;
export function group<T>(name: string, fn: () => T): T;
export function sleep(t: number): void;
