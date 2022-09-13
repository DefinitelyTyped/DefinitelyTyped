import * as R from 'ramda';

() => {
    R.modulo(17, 3); // => 2
    // JS behavior:
    R.modulo(-17, 3); // => -2
    R.modulo(17, -3); // => 2
};

() => {
    R.modulo(R.__, 2)(42); // 0
    R.modulo(R.__)(2, 42); // 0
};
