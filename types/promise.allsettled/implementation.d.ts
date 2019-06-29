import { PromiseRejection, PromiseResolution, PromiseResult } from './types';

type PromiseTuple<T extends [unknown, ...unknown[]]> = {[P in keyof T]: Promise<T[P]>};
type PromiseResultTuple<T extends [unknown, ...unknown[]]> = {[P in keyof T]: PromiseResult<T[P], unknown>};

declare function allSettled(): Promise<[]>;
declare function allSettled<T extends [unknown, ...unknown[]]>(iterable: PromiseTuple<T>): Promise<PromiseResultTuple<T>>;
declare function allSettled<T>(iterable: Iterable<T>): Promise<T[]>;

export = allSettled;
