import * as R from 'ramda';

() => {
    const sets = new Set([1, 2, 3]);

    R.bind(sets.has)(sets); // $ExpectType (value: number) => boolean
    R.bind(sets.clear, sets); // $ExpectType () => void
};
