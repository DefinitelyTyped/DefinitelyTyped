import allSettled = require("promise.allsettled");

type Result<T extends [unknown, ...unknown[]]> = Promise<allSettled.PromiseResultTuple<T>>;
type ArrayResult<T, E = unknown> = Promise<Array<allSettled.PromiseResult<T>>>;

allSettled(); // $ExpectType Promise<[]>
// the $ExpectType comment does not work with the following constraints unfortunately
const r0: Result<[number]> = allSettled([Promise.resolve(0)]);
const r1: Result<[number, string]> = allSettled([Promise.resolve(1), Promise.resolve('a')]);
const r2: Result<[never, boolean]> = allSettled([Promise.reject<never>(null), Promise.resolve(true)]); // tslint:disable-line use-default-type-parameter
const input = [
  Promise.resolve(0),
  Promise.resolve(1),
  Promise.resolve(2),
  3,
  4
];
const r3: ArrayResult<number> = allSettled(input);
const r4: Result<[number, string]> = allSettled([0, Promise.resolve("foo")]);
