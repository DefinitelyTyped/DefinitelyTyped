import * as R from 'ramda';

() => {
    const a1 = R.pick(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }); // => {a: 1, d: 4}
    const a2 = R.pick(['a', 'e', 'f'], { a: 1, b: 2, c: 3, d: 4 }); // => {a: 1}
    const a3 = R.pick(['a', 'e', 'f'])({ a: 1, b: 2, c: 3, d: 4 }); // => {a: 1}
    const a4 = R.pick(['a', 'e', 'f'], [1, 2, 3, 4]); // => {}
    const a5 = R.pick([1, 2], ['a', 'b', 'c', 'd']); // => {1: 'b', 2: 'c'}

    const s = Symbol('s');
    const a6 = R.pick([s], { [s]: 'a' }); // => {Symbol(s): 'a'}
};
