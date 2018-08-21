// Type definitions for p-try 2.0
// Project: https://github.com/sindresorhus/p-try#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 Linus Unnebäck <https://github.com/LinusU>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pTry;

declare function pTry<T, A, B, C, D, E, F>(cb: (a: A, b: B, c: C, d: D, e: E, f: F, ...args: any[]) => Promise<T> | PromiseLike<T> | T, a: A, b: B, c: C, d: D, e: E, f: F, ...args: any[]): Promise<T>;
declare function pTry<T, A, B, C, D, E, F>(cb: (a: A, b: B, c: C, d: D, e: E, f: F) => Promise<T> | PromiseLike<T> | T, a: A, b: B, c: C, d: D, e: E, f: F): Promise<T>;
declare function pTry<T, A, B, C, D, E>(cb: (a: A, b: B, c: C, d: D, e: E) => Promise<T> | PromiseLike<T> | T, a: A, b: B, c: C, d: D, e: E): Promise<T>;
declare function pTry<T, A, B, C, D>(cb: (a: A, b: B, c: C, d: D) => Promise<T> | PromiseLike<T> | T, a: A, b: B, c: C, d: D): Promise<T>;
declare function pTry<T, A, B, C>(cb: (a: A, b: B, c: C) => Promise<T> | PromiseLike<T> | T, a: A, b: B, c: C): Promise<T>;
declare function pTry<T, A, B>(cb: (a: A, b: B) => Promise<T> | PromiseLike<T> | T, a: A, b: B): Promise<T>;
declare function pTry<T, A>(cb: (a: A) => Promise<T> | PromiseLike<T> | T, a: A): Promise<T>;
declare function pTry<T>(cb: () => Promise<T> | PromiseLike<T> | T): Promise<T>;
