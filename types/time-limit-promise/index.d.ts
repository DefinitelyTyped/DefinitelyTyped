declare function timeLimit<T>(promise: Promise<T>, timeout: number): Promise<T | undefined>;
declare function timeLimit<T>(promise: Promise<T>, timeout: number, opts: { rejectWith: any }): Promise<T>;
declare function timeLimit<T, R>(promise: Promise<T>, timeout: number, opts: { resolveWith: R }): Promise<T | R>;

export = timeLimit;
