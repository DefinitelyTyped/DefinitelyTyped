import * as R from 'ramda';

() => {
    function lteTwo(x: number) {
        return x <= 2;
    }

    R.dropWhile(lteTwo, [1, 2, 3, 4]); // => [3, 4]
    R.dropWhile(lteTwo)([1, 2, 3, 4]); // => [3, 4]
};
