import stopcock = require('stopcock');

// test type exports
type Options = stopcock.Options;
type LimiterFunction<T extends (...args: any[]) => unknown> = stopcock.LimiterFunction<T>;

async function fn(i: number) {
    return `${i} - ${new Date().toISOString()}`;
}

// $ExpectType LimiterFunction<(i: number) => Promise<string>>
const fn1 = stopcock(fn);
fn1(1); // $ExpectType Promise<string>
fn1.size; // $ExpectType number
// @ts-expect-error
fn1.size = 1;
// $ExpectType LimiterFunction<(i: string, n: number) => undefined>
const fn2 = stopcock((i: string, n: number) => void 0);
fn2('foo', 2); // $ExpectType Promise<undefined>
// $ExpectType LimiterFunction<(i: string, n: number) => PromiseLike<number>>
const fn3 = stopcock((i: string, n: number): PromiseLike<number> => Promise.resolve(1));
fn3('foo', 2); // $ExpectType Promise<number>

stopcock(fn, { limit: 1 });
stopcock(fn, { interval: 1000 });
stopcock(fn, { bucketSize: 1000 });
stopcock(fn, { queueSize: 1000 });
