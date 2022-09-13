import * as R from 'ramda';

() => {
    const raceResults0 = {
        first: 'alice',
        second: 'jake',
    };
    R.invertObj(raceResults0);
    // => { 'alice': 'first', 'jake':'second' }

    // Alternatively:
    const raceResults1 = ['alice', 'jake'];
    R.invertObj(raceResults1);
    // => { 'alice': '0', 'jake':'1' }
};
