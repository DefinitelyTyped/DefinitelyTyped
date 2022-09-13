import * as R from 'ramda';

() => {
    R.lt(2, 6); // => true
    R.lt(2, 0); // => false
    R.lt(2, 2); // => false
    R.lt(5)(10); // => true
    R.lt('a', 'z'); // => true
    R.lt('z', 'a'); // => false
};

() => {
    R.lt(R.__, 5)(10); // false
    R.lt(R.__)(5, 10); // false
};
