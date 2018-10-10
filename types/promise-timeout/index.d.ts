// Type definitions for promise-timeout 1.3
// Project: https://github.com/building5/promise-timeout#readme
// Definitions by: Aankhen <https://github.com/Aankhen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function timeout<T>(promise: Promise<T>, timeoutMillis: number): Promise<T>;

export class TimeoutError extends Error { }
