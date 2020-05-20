
import shuffle = require('shuffle-array');

// shuffle()
var a = [1, 2, 3, 4, 5];
var result: number[];
result = shuffle(a);
result = shuffle(a, {});
result = shuffle(a, {copy: true});
result = shuffle(a, {rng: () => 0});
result = shuffle(a, {copy: true, rng: () => 0});

var b = ['aaa', 'bbb', 'ccc']
var result2: string[];
result2 = shuffle.pick(b);
result2 = shuffle.pick(b, {});
result2 = shuffle.pick(b, {picks: 3});
result2 = shuffle.pick(b, {rng: () => 0});
result2 = shuffle.pick(b, {picks: 3, rng: () => 0});
