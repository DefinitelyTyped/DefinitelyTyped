import * as R from 'ramda';

() => {
    // $ExpectType true
    R.T();

    // $ExpectType true
    R.T(10);

    // $ExpectType true
    R.T(true, false);
};
