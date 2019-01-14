// Type definitions for k6 0.0
// Project: https://github.com/loadimpact/k6#readme
// Definitions by: MajorBreakfast <https://github.com/MajorBreakfast>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export type bytes = any;

declare global {
  function open(filePath: string): string;
  function open(filePath: string, mode: 'b'): bytes;
}

export function check<T>(val: T, sets: { [key: string]: (val: T) => boolean }, tags?: object): boolean;

export function fail(err?: string): undefined;

export function group<T>(name: string, fn: () => T): T;

export function sleep(t: number): void;
