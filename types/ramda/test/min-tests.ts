import * as R from 'ramda';

() => {
    const x: number = R.min(9, 3); // => 3
    const y: string = R.min('a', 'z'); // => 'a'
};
