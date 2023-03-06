import * as R from 'ramda';

() => {
    // $ExpectType (...args: unknown[]) => string
    const alwaysTea = R.always('Tea');
    // $ExpectType string
    alwaysTea(); // => 'Tea'

    // $ExpectType string
    alwaysTea('Coffee'); // => 'Tea'

    // $ExpectType string
    alwaysTea(1, 2, 3); // => 'Tea'
};
