import { PromiseRejection, PromiseResolution, PromiseResult } from './types';

type PromiseTuple<T extends [unknown, ...unknown[]]> = {[P in keyof T]: Promise<T[P]> | T[P]};
type PromiseResultTuple<T extends [unknown, ...unknown[]]> = {[P in keyof T]: PromiseResult<T[P]>};

declare function allSettled(): Promise<[]>;
declare function allSettled<T extends [unknown, ...unknown[]]>(iterable: PromiseTuple<T>): Promise<PromiseResultTuple<T>>;
// tslint:disable-next-line no-unnecessary-generics
declare function allSettled<T, E>(iterable: Iterable<Promise<T> | T>): Promise<Array<PromiseResult<T, E>>>;

export = allSettled;
