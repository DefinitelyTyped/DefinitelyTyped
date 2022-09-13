import * as R from 'ramda';

() => {
    R.equals(1, 1); // => true
    R.equals('2', '1'); // => false
    R.equals([1, 2, 3], [1, 2, 3]); // => true
    R.equals(R.__, 1)(1); // => true
    R.equals(1)(1); // => true

    const a: any = {};
    a.v = a;
    const b: any = {};
    b.v = b;
    R.equals(a, b); // => true
};

() => {
    R.equals(R.unnest([1, [2], [[3]]]), [1, 2, [3]]); // => true
    R.equals(
        R.unnest([
            [1, 2],
            [3, 4],
            [5, 6],
        ]),
        [1, 2, 3, 4, 5, 6],
    ); // => true
};
