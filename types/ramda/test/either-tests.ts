import * as R from 'ramda';

() => {
    function gt10(x: number) {
        return x > 10;
    }

    function even(x: number) {
        return x % 2 === 0;
    }

    // $ExpectType (x: number) => boolean
    const f = R.either(gt10, even);
    // $ExpectType (x: number) => boolean
    const g = R.either(gt10)(even);
    // $ExpectType boolean
    f(101); // => true
    // $ExpectType boolean
    f(8); // => true

    const isFoo = (x: any): x is { foo: number } => true;
    const isBar = (x: any): x is { foo: string } => true;
    const isFooBar = R.either(isFoo, isBar);
    const isFooBar2 = R.either(isFoo)(isBar);

    const foobar: any = {};
    if (isFooBar(foobar)) {
        // $ExpectType string | number
        foobar.foo;
    }
    if (isFooBar2(foobar)) {
        // $ExpectType string | number
        foobar.foo;
    }

    // $ExpectType (a: string | number | boolean) => a is string | number
    R.either(
        (value: string | number | boolean): value is string => true,
        (value: number | boolean): value is number => true,
    );
};
