// Type definitions for time-limit-promise 1.0
// Project: https://github.com/inikulin/time-limit-promise
// Definitions by: James Wassink <https://github.com/jameswassink>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function timeLimit<T>(promise: Promise<T>, timeout: number): Promise<T | undefined>;
declare function timeLimit<T>(promise: Promise<T>, timeout: number, opts: { rejectWith: any }): Promise<T>;
declare function timeLimit<T, R>(promise: Promise<T>, timeout: number, opts: { resolveWith: R }): Promise<T | R>;

export = timeLimit;
