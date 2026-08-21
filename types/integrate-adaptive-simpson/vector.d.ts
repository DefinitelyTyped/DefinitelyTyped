type Func = (val: number) => number;

declare function integrate(f: Func, a: number, b: number, tol?: number, maxdepth?: number): number[];

export = integrate;
