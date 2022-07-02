import * as R from 'ramda';

() => {
    function gt10(x: number) {
        return x > 10;
    }

    function even(x: number) {
        return x % 2 === 0;
    }

    // $ExpectType (x: number) => boolean
    const f = R.both(gt10, even);
    // $ExpectType (x: number) => boolean
    const g = R.both(gt10)(even);
    // $ExpectType boolean
    f(100); // => true
    // $ExpectType boolean
    f(101); // => false

    const isFooAndBar = (a: {}): a is { foo: number; bar: string } => true;
    const isFooAndBuz = (a: {}): a is { foo: number; buz: string } => true;

    // $ExpectType (a: {}) => a is { foo: number; bar: string; } & { foo: number; buz: string; }
    const fIsFoo = R.both(isFooAndBar, isFooAndBuz);

    const is1To3 = (x: number): x is 1 | 2 | 3 => true;
    const is2To5 = (x: number): x is 2 | 3 | 4 | 5 => true;

    // $ExpectType (a: number) => a is 2 | 3
    const fIsSpecialNumber = R.both(is1To3, is2To5);

    const isFoo = (x: any): x is { foo: number } => true;
    const isBar = (x: any): x is { bar: string } => true;
    const isFooBar = R.both(isFoo, isBar);

    const foobar: any = {};
    if (isFooBar(foobar)) {
        // $ExpectType number
        foobar.foo;
        // $ExpectType string
        foobar.bar;
    }
};
