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
};
