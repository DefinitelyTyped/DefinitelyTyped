import shuffle = require('knuth-shuffle-seeded');

// with type parameter
shuffle<number>([1, 2, 3]);  // $ExpectType number[]
shuffle<number>([1, 2, 3], 0);   // $ExpectType number[]

// inferred type
shuffle(['a', 'b', 'c']);  // $ExpectType string[]
shuffle(['a', 'b', 'c'], 0);   // $ExpectType string[]
