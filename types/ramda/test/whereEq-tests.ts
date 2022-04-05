import * as R from 'ramda';

() => {
    // pred :: Object -> Boolean
    // $ExpectType (obj: { a: number; b: number; }) => boolean
    const pred = R.whereEq({ a: 1, b: 2 });
    // $ExpectError
    pred({ a: 1 }); // => false
    pred({ a: 1, b: 2 }); // => true
    const a = { a: 1, b: 2, c: 3 };
    pred(a); // => true
    pred({ a: 1, b: 1 }); // => false
    // $ExpectType boolean
    R.whereEq({ a: 'one' }, { a: 'one' }); // => true
};
