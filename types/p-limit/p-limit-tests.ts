import pLimit = require('p-limit');

const limit = pLimit(1);

const input = [
    limit(() => Promise.resolve('foo')),
    limit(() => Promise.resolve('bar')),
    limit(() => Promise.resolve(undefined)),
];

Promise.all(input).then(result => {
    const str: string | undefined = result[0];
});

let str: string;

declare function a(a: string): string;
declare function b(a: string, b: number): string;
declare function c(a: string, b: number, c: boolean): string;
declare function d(a: string, b: number, c: boolean, d: symbol): string;
declare function e(a: string, b: number, c: boolean, d: symbol, e: 'yes' | 'no'): string;
declare function f(a: string, b: number, c: boolean, d: symbol, e: 'yes' | 'no', f: 1 | 2): string;
declare function g(a: string, b: number, c: boolean, d: symbol, e: 'yes' | 'no', f: 1 | 2, g: true): string;

limit(a, 'test').then(v => { str = v; });
limit(b, 'test', 1).then(v => { str = v; });
limit(c, 'test', 1, false).then(v => { str = v; });
limit(d, 'test', 1, false, Symbol('test')).then(v => { str = v; });
limit(e, 'test', 1, false, Symbol('test'), 'no').then(v => { str = v; });
limit(f, 'test', 1, false, Symbol('test'), 'no', 2).then(v => { str = v; });
limit(g, 'test', 1, false, Symbol('test'), 'no', 2, true).then(v => { str = v; });

declare function add(...args: number[]): number;

limit(add, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13).then(v => (v === 91));
