import * as R from 'ramda';

() => {
    const raceResultsByFirstName = {
        first: 'alice',
        second: 'jake',
        third: 'alice',
    };
    R.invert(raceResultsByFirstName);
    // => { 'alice': ['first', 'third'], 'jake':['second'] }
};
