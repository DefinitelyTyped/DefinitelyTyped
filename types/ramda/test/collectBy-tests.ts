import * as R from 'ramda';

() => {
    // $ExpectType { type: string; item: string; }[][]
    R.collectBy(R.prop('type'), [
        { type: 'breakfast', item: '☕️' },
        { type: 'lunch', item: '🌯' },
        { type: 'dinner', item: '🍝' },
        { type: 'breakfast', item: '🥐' },
        { type: 'lunch', item: '🍕' },
    ]);

    // [ [ {type: 'breakfast', item: '☕️'},
    //     {type: 'breakfast', item: '🥐'} ],
    //   [ {type: 'lunch', item: '🌯'},
    //     {type: 'lunch', item: '🍕'} ],
    //   [ {type: 'dinner', item: '🍝'} ] ]

    // $ExpectType { type: string; item: string; }[][]
    R.collectBy<{ type: string; item: string }, string>(R.prop('type'))([
        { type: 'breakfast', item: '☕️' },
        { type: 'lunch', item: '🌯' },
        { type: 'dinner', item: '🍝' },
        { type: 'breakfast', item: '🥐' },
        { type: 'lunch', item: '🍕' },
    ]);
};
