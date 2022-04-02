import * as R from 'ramda';

() => {
    const sets = new Set([1, 2, 3]);

    // $ExpectType (value: number) => boolean
    R.bind(sets.has)(sets);
    // $ExpectType () => void
    R.bind(sets.clear, sets);
};
