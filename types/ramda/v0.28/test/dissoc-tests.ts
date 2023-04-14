import * as R from 'ramda';

() => {
    const object = { a: 'A' as const, b: 'B' as const, c: 'C' as const };
    let result: { a: 'A'; c: 'C' };
    result = R.dissoc('b', object);
    result = R.dissoc('b')(object);
};
