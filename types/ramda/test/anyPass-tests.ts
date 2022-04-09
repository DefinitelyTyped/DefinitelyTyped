import * as R from 'ramda';

() => {
    function gt10(x: number) {
        return x > 10;
    }

    function even(x: number) {
        return x % 2 === 0;
    }

    // $ExpectType (x: number) => boolean
    const f = R.anyPass([gt10, even]);

    // $ExpectType boolean
    f(11);
    // $ExpectType boolean
    f(8);
    // $ExpectType boolean
    f(9); // => false

    const isFooAndBar = (_a: {}): _a is { foo: number; bar: string } => true;
    const isFooAndBuz = (_a: {}): _a is { foo: number; buz: string } => true;

    // $ExpectType (a: {}) => a is { foo: number; bar: string; } | { foo: number; buz: string; }
    R.anyPass([isFooAndBar, isFooAndBuz]);

    const is1or2 = (_x: number): _x is 1 | 2 => true;
    const is2or3 = (_x: number): _x is 2 | 3 => true;
    const is3 = (_x: number): _x is 3 => true;

    // $ExpectType (a: number) => a is 1 | 2 | 3 || (a: number) => a is 2 | 1 | 3 || (a: number) => a is 2 | 3 | 1
    R.anyPass([is1or2, is2or3, is3]);

    const isFoo = (_x: any): _x is { foo: number; fuz: boolean } => true;
    const isBar = (_x: any): _x is { bar: string; fuz: boolean } => true;
    const isFooOrBar = R.anyPass([isFoo, isBar]);

    const foobar: any = {};
    if (isFooOrBar(foobar)) {
        // $ExpectType boolean
        foobar.fuz;
        // $ExpectError
        foobar.bar;
    }

    // tslint:disable:use-default-type-parameter
    // Using `is3` to avoid having to deal with union ordering
    // $ExpectType (value: 3) => boolean
    R.anyPass<3>([is3]);
    // $ExpectType (value: 3) => boolean
    R.anyPass<3, 'arg'>([is3]);
    // $ExpectError
    R.anyPass<3, 'args'>([is3]);
    // $ExpectError
    R.anyPass<3, 'pred'>([is3]);
    // $ExpectType (foo: 3) => boolean
    R.anyPass<[foo: 3]>([is3]);
    // $ExpectType (foo: 3) => boolean
    R.anyPass<[foo: 3], 'args'>([is3]);
    // $ExpectError
    R.anyPass<[foo: 3], 'arg'>([is3]);
    // $ExpectError
    R.anyPass<[foo: 3], 'pred'>([is3]);
    // $ExpectType (foo: 3) => boolean
    R.anyPass<(foo: 3) => boolean>([is3]);
    // $ExpectType (foo: 3) => boolean
    R.anyPass<(foo: 3) => boolean, 'pred'>([is3]);
    // $ExpectError
    R.anyPass<(foo: 3) => boolean, 'arg'>([is3]);
    // $ExpectError
    R.anyPass<(foo: 3) => boolean, 'args'>([is3]);
    function overloads(a: string): boolean;
    function overloads(a: number, b: string): boolean;
    function overloads(..._args: [a: string] | [a: number, b: string]) { return true; }
    // $ExpectType { (a: string): boolean; (a: number, b: string): boolean; }
    R.pipe(R.anyPass([overloads]));
    // tslint:enable:use-default-type-parameter
};
