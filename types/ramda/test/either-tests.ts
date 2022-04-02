import * as R from 'ramda';

() => {
    function gt10(x: number) {
        return x > 10;
    }

    function even(x: number) {
        return x % 2 === 0;
    }

    // $ExpectType (a: number) => boolean
    const f = R.either(gt10, even);
    // $ExpectType (a: number) => boolean
    R.either(gt10)(even);
    // $ExpectType boolean
    f(101); // => true
    // $ExpectType boolean
    f(8); // => true
};
