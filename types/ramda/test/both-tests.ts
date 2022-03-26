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
};
