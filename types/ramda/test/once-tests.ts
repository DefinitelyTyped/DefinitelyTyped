import * as R from 'ramda';

() => {
    // $ExpectType (x: number) => number
    const addOneOnce = R.once((x: number) => x + 1);
    // $ExpectType number
    addOneOnce(10); // => 11
    addOneOnce(addOneOnce(50)); // => 11

    // $ExpectType string
    const str = R.once(() => 'test')();
};
