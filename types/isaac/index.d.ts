// Type definitions for isaac 0.0
// Project: https://github.com/StefanoBalocco/isaac.js
// Definitions by: Martin Olsson <https://github.com/mo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function internals(): any;
export function prng(n: number): void;
export function rand(): number;
export function random(): number;
export function reset(): void;
export function seed(s: string | number | ReadonlyArray<number>): void;
