import * as R from 'ramda';

() => {
    const a1: [1, 2, 3] = [1, 2, 3];
    const a2: [4, 5, 6] = [4, 5, 6];
    let result: [1, 2, 3, 4, 5, 6];
    result = R.concat(a1, a2);
    result = R.concat(a1)(a2);
};

() => {
    const s1 = 'ABC';
    const s2 = 'DEF';
    let result: 'ABCDEF';
    result = R.concat(s1, s2);
    result = R.concat(s1)(s2);
};
