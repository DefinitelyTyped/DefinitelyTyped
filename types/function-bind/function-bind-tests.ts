import bind = require('function-bind');

declare function call<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, ...args: A): R;

declare const string: string;
declare const number: number;
declare const boolean: boolean;

/**
 * The `expectType` function from https://www.npmjs.com/package/tsd,
 * except instead of returning `void`, it returns `T`.
 */
declare function expectType<T>(value: T): T;

// $ExpectType (thisArg: any, start?: number | undefined, end?: number | undefined) => any[]
const slice = expectType<(thisArg: any, start?: number, end?: number) => any[]>(bind.call(call, Array.prototype.slice));

// $ExpectType (start?: number | undefined, end?: number | undefined) => any[]
expectType<(start?: number, end?: number) => any[]>(bind.call(call, Array.prototype.slice, null));

// $ExpectType (end?: number | undefined) => any[]
expectType<(end?: number) => any[]>(bind.call(call, Array.prototype.slice, ['a'], 1));

slice(['a']);

// $ExpectType () => boolean
bind.call(
    Boolean,
    null,
    '1',
    // @ts-expect-error
    '2',
    '3',
    '4',
    '5',
);

// $ExpectType (value?: unknown) => boolean
bind.call(Boolean, null);

// $ExpectType () => boolean
expectType<() => boolean>(bind.apply(Boolean, [null, '1', '2', '3', '4', '5']));

// Class compatibility:
class Foo {
    constructor(public string: string, public number: number) {}
    declare static bind: typeof bind;
}

// bind.call():
// $ExpectType new (string: string, number: number) => Foo
bind.call(Foo, null);

// $ExpectType typeof Foo
Foo.bind(null);

// $ExpectType new (number: number) => Foo
bind.call(Foo, null, string);

// $ExpectType new (number: number) => Foo
Foo.bind(null, string);

// $ExpectType new () => Foo
bind.call(Foo, null, string, number);

// $ExpectType new () => Foo
Foo.bind(null, string, number);

// @ts-expect-error
bind.call(Foo, null, string, number, boolean);

// @ts-expect-error
Foo.bind(null, string, number, boolean);

// @ts-expect-error
bind.call(Foo, null, string, number, boolean, undefined);

// @ts-expect-error
Foo.bind(null, string, number, boolean, undefined);

// bind.apply():
// $ExpectType new (string: string, number: number) => Foo
bind.apply(Foo, [null]);
// Foo.bind(...[null]);

// $ExpectType new (number: number) => Foo
bind.apply(Foo, [null, string]);
// Foo.bind(...[null, string]);

// $ExpectType new () => Foo
bind.apply(Foo, [null, string, number]);
// Foo.bind(...[null, string, number]);

// $ExpectType new () => Foo
bind.apply(Foo, [null, string, number, boolean]);
// Foo.bind(...[null, string, number, boolean]);

// $ExpectType new () => Foo
bind.apply(Foo, [null, string, number, boolean, undefined]);
// Foo.bind(...[null, string, number, boolean, undefined]);
