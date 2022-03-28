import * as R from 'ramda';

() => {
    R.clamp(1, 10, -1); // => 1
    R.clamp(1, 10)(11); // => 10
    R.clamp(1)(10, 4); // => 4
    R.clamp('a', 'd', 'e'); // => 'd'
};
