import pTry = require('p-try');

function throws(): never {
    throw new Error('foo');
}

let str: string;
pTry(() => 'foo').then(value => {
    str = value;
});
pTry(() => Promise.resolve('foo')).then(value => {
    str = value;
});
pTry(throws).then(value => {
    str = value;
});

declare function a(a: string): string;
declare function b(a: string, b: number): string;
declare function c(a: string, b: number, c: boolean): string;
declare function d(a: string, b: number, c: boolean, d: symbol): string;
declare function e(a: string, b: number, c: boolean, d: symbol, e: 'yes' | 'no'): string;
declare function f(a: string, b: number, c: boolean, d: symbol, e: 'yes' | 'no', f: 1 | 2): string;
declare function g(a: string, b: number, c: boolean, d: symbol, e: 'yes' | 'no', f: 1 | 2, g: true): string;

pTry(a, 'test').then(v => { str = v; });
pTry(b, 'test', 1).then(v => { str = v; });
pTry(c, 'test', 1, false).then(v => { str = v; });
pTry(d, 'test', 1, false, Symbol('test')).then(v => { str = v; });
pTry(e, 'test', 1, false, Symbol('test'), 'no').then(v => { str = v; });
pTry(f, 'test', 1, false, Symbol('test'), 'no', 2).then(v => { str = v; });
pTry(g, 'test', 1, false, Symbol('test'), 'no', 2, true).then(v => { str = v; });

declare function add(...args: number[]): number;

pTry(add, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13).then(v => (v === 91));
