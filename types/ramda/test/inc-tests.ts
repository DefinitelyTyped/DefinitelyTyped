import * as R from 'ramda';

() => {
    // $ExpectType number
    R.inc(42); // => 41
    // $ExpectError
    R.inc('');
    // $ExpectError
    R.inc(null);
    // $ExpectError
    R.inc(undefined);
    // $ExpectError
    R.inc(0, 1);
    // $ExpectError
    R.inc();
};
