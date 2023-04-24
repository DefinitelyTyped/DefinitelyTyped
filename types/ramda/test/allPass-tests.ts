import * as R from 'ramda';

() => {
    type Predicate = (x: number) => boolean;

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

    const isFooAndBar = (a: {}): a is { foo: number; bar: string } => true;
    const isFooAndBuz = (a: {}): a is { foo: number; buz: string } => true;

    // $ExpectType (a: {}) => a is { foo: number; bar: string; } & { foo: number; buz: string; }
    const fIsFoo = R.allPass([isFooAndBar, isFooAndBuz]);

    const is1To10 = (x: number): x is 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 => true;
    const is6To12 = (x: number): x is 6 | 7 | 8 | 9 | 10 | 11 | 12 => true;
    const isOdd1to15 = (x: number): x is 1 | 3 | 5 | 7 | 9 | 11 | 13 | 15 => true;

    // $ExpectType (a: number) => a is 7 | 9
    const fIsSpecialNumber = R.allPass([is1To10, is6To12, isOdd1to15]);

    const isFoo = (x: any): x is { foo: number } => true;
    const isBar = (x: any): x is { bar: string } => true;
    const isFooBar = R.allPass([isFoo, isBar]);

    const foobar: any = {};
    if (isFooBar(foobar)) {
        // $ExpectType number
        foobar.foo;
        // $ExpectType string
        foobar.bar;
    }
};
