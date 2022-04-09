import * as R from 'ramda';

() => {
    function gt10(x: number) {
        return x > 10;
    }

    function even(x: number) {
        return x % 2 === 0;
    }

    // $ExpectType (x: number) => boolean
    const f = R.allPass([gt10, even]);

    // $ExpectType boolean
    f(11); // => false

    // $ExpectType boolean
    f(12); // => true

    const isFooAndBar = (_a: {}): _a is { foo: number; bar: string } => true;
    const isFooAndBuz = (_a: {}): _a is { foo: number; buz: string } => true;

    // $ExpectType (a: {}) => a is { foo: number; bar: string; } & { foo: number; buz: string; }
    R.allPass([isFooAndBar, isFooAndBuz]);

    const is1To10 = (_x: number): _x is 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 => true;
    const is6To12 = (_x: number): _x is 6 | 7 | 8 | 9 | 10 | 11 | 12 => true;
    const isOdd1to15 = (_x: number): _x is 1 | 3 | 5 | 7 | 9 | 11 | 13 | 15 => true;

    // $ExpectType (a: number) => a is 7 | 9
    R.allPass([is1To10, is6To12, isOdd1to15]);

    const isFoo = (_x: any): _x is { foo: number } => true;
    const isBar = (_x: any): _x is { bar: string } => true;
    const isFooBar = R.allPass([isFoo, isBar]);

    const foobar: any = {};
    if (isFooBar(foobar)) {
        // $ExpectType number
        foobar.foo;
        // $ExpectType string
        foobar.bar;
    }

    const is3 = (_x: number): _x is 3 => true;
    // Using `is3` to avoid having to deal with union ordering
    // tslint:disable:use-default-type-parameter
    // $ExpectType (value: 3) => boolean
    R.allPass<3>([is3]);
    // $ExpectType (value: 3) => boolean
    R.allPass<3, 'arg'>([is3]);
    // $ExpectError
    R.allPass<3, 'args'>([is3]);
    // $ExpectError
    R.allPass<3, 'pred'>([is3]);
    // $ExpectType (foo: 3) => boolean
    R.allPass<[foo: 3]>([is3]);
    // $ExpectType (foo: 3) => boolean
    R.allPass<[foo: 3], 'args'>([is3]);
    // $ExpectError
    R.allPass<[foo: 3], 'arg'>([is3]);
    // $ExpectError
    R.allPass<[foo: 3], 'pred'>([is3]);
    // $ExpectType (foo: 3) => boolean
    R.allPass<(foo: 3) => boolean>([is3]);
    // $ExpectType (foo: 3) => boolean
    R.allPass<(foo: 3) => boolean, 'pred'>([is3]);
    // $ExpectError
    R.allPass<(foo: 3) => boolean, 'arg'>([is3]);
    // $ExpectError
    R.allPass<(foo: 3) => boolean, 'args'>([is3]);
    function overloads(a: string): boolean;
    function overloads(a: number, b: string): boolean;
    function overloads(..._args: [a: string] | [a: number, b: string]) { return true; }
    // $ExpectType { (a: string): boolean; (a: number, b: string): boolean; }
    R.pipe(R.allPass([overloads]));
    // tslint:enable:use-default-type-parameter
};
