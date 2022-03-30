import * as R from 'ramda';

() => {
    const alice = {
        name: 'ALICE',
        age: 101,
    };
    const favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');

    const s2 = favoriteWithDefault(alice); // => 'Ramda'
};
