import * as R from 'ramda';

() => {
    // $ExpectType false
    R.F();

    // $ExpectType false
    R.F(10);

    // $ExpectType false
    R.F(true);
};
