import shuffle = require('shuffle-array');

// shuffle()
const a = [1, 2, 3, 4, 5];
let result: number[];
result = shuffle(a);
result = shuffle(a, {});
result = shuffle(a, {copy: true});
result = shuffle(a, {rng: () => 0});
result = shuffle(a, {copy: true, rng: () => 0});

const b = ['aaa', 'bbb', 'ccc'];
let result2: string | string[];
result2 = shuffle.pick(b);
result2 = shuffle.pick(b, {});
result2 = shuffle.pick(b, {picks: 3});
result2 = shuffle.pick(b, {rng: () => 0});
result2 = shuffle.pick(b, {picks: 3, rng: () => 0});
