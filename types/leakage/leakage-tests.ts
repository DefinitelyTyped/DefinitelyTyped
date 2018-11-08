import { iterate, IterateOptions, Result } from "leakage";

let optionalNumber: number | undefined;
let num = 1;
const iterateFn: () => void = () => {};
const promiseIterate: () => Promise<void> = () => Promise.resolve();
const iterateOptions: IterateOptions | undefined = { iterations: optionalNumber, gcollections: optionalNumber };

let result: Result = iterate(iterateFn, iterateOptions);
optionalNumber = 1;

iterate.async(promiseIterate, iterateOptions).then((res: Result) => result = res);

num = result.gcollections;
num = result.iterations;
