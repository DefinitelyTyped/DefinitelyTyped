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
    const f = R.anyPass([gt10, even]);

    // $ExpectType boolean
    f(11);
    // $ExpectType boolean
    f(8);
    // $ExpectType boolean
    f(9); // => false

    const isFooAndBar = (a: {}): a is { foo: number; bar: string } => true;
    const isFooAndBuz = (a: {}): a is { foo: number; buz: string } => true;

    // $ExpectType (a: {}) => a is { foo: number; bar: string; } | { foo: number; buz: string; }
    const fIsFoo = R.anyPass([isFooAndBar, isFooAndBuz]);

    const is1or2 = (x: number): x is 1 | 2 => true;
    const is2or3 = (x: number): x is 2 | 3 => true;
    const is3 = (x: number): x is 3 => true;

    // $ExpectType (a: number) => a is 1 | 2 | 3 || (a: number) => a is 2 | 1 | 3 || (a: number) => a is 2 | 3 | 1
    const fIsSpecialNumber = R.anyPass([is1or2, is2or3, is3]);

    const isFoo = (x: any): x is { foo: number; fuz: boolean } => true;
    const isBar = (x: any): x is { bar: string; fuz: boolean } => true;
    const isFooOrBar = R.anyPass([isFoo, isBar]);

    const foobar: any = {};
    if (isFooOrBar(foobar)) {
        // $ExpectType boolean
        foobar.fuz;
        // @ts-expect-error
        foobar.bar;
    }
};
