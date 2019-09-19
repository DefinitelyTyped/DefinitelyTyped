import memoize = require('memoizee');

const fn = (one: string, two?: number, three?: any) => { /* ... */ };

let memoized = memoize(fn);
memoized('foo', 3, 'bar');
memoized('foo', 3, 'bar');
memoized = memoize(fn, { length: 2 });
memoized('foo');
memoized('foo', undefined);
memoized('foo', 3, {});
memoized('foo', 3, 13);
memoized('foo', undefined);
memoized('foo', undefined);
memoized('foo', 3, {});
memoized('foo', 3, 13);
memoized('foo', 3, 13);
memoized = memoize(fn, { primitive: true });
memoized('/path/one');
memoized('/path/one');
memoized = memoize(fn, { dispose(value: number) { /*…*/ } });
const foo3 = memoized('foo', 3);
const bar7 = memoized('bar', 7);
memoized.clear('foo', 3); // Dispose called with foo3 value
memoized.clear('bar', 7); // Dispose called with bar7 value
memoized.delete('foo', 0);
const mFn = memoize((hash: any) => {
    // body of memoized function
}, { normalizer: (args: any[]) => {
    // args is arguments object as accessible in memoized function
    return JSON.stringify(args[0]);
} });

mFn({ foo: 'bar' });

memoized = memoize(fn, { length: 2, resolvers: [String, Boolean] });
memoized(String(12), [1, 2, 3].length);
memoized("12", Number(true));
memoized(String({ toString() { return "12"; } }), Number({}));

{
    const afn = (a: number, b: number) => {
        return new Promise(res => { res(a + b); });
    };
    const memoized = memoize(afn, { promise: true });
    memoized(3, 7);
    memoized(3, 7);
}

memoized = memoize(fn, { maxAge: 1000, preFetch: 0.6 });

memoized('foo', 3);
memoized('foo', 3);

setTimeout(() => {
  memoized('foo', 3);
}, 500);

setTimeout(() => {
  memoized('foo', 3);
}, 1300);
