import * as R from 'ramda';

() => {
    R.gte(2, 6); // => false
    R.gte(2, 0); // => true
    R.gte(2, 2); // => false
    R.gte(2)(10); // => false
    R.gte('a', 'z'); // => false
    R.gte('z', 'a'); // => true
    R.gte('c', 'c'); // => true
};

() => {
    R.gte(R.__, 6)(2); // false
    R.gte(R.__)(6, 2); // false
};
