// Type definitions for just-pick 2.1
// Project: https://github.com/angus-c/just#readme
// Definitions by: Peter Safranek <https://github.com/pe8ter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare function pick<T, U extends keyof T>(obj: T, select: U[]): Pick<T, U>;

declare function pick<T, U extends keyof T>(obj: T, select1: U, ...selectn: U[]): Pick<T, U>;

export = pick;
