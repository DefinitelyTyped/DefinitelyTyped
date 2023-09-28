// Type definitions for integrate-adaptive-simpson 1.1
// Project: https://github.com/scijs/integrate-adaptive-simpson#readme
// Definitions by: Aimee Gamble-Milner <https://github.com/aimee-gm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Func = (val: number) => number;

declare function integrate(f: Func, a: number, b: number, tol?: number, maxdepth?: number): number;

export = integrate;
