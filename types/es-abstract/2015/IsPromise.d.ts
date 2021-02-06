declare function IsPromise<T>(x: PromiseLike<T>): x is Promise<T>;
declare function IsPromise(x: unknown): x is Promise<any>;
export = IsPromise;
