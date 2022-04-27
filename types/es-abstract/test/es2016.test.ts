import ES2016 = require('es-abstract/es2016');

const iterableNumbers: Iterable<number> = [1, 2, 3];
const arrayLikeNumbers: ArrayLike<number> = [1, 2, 3];
const iterableArrayLikeNumbers: Iterable<number> & ArrayLike<number> = [1, 2, 3];
const recordNumbers: Record<number, number> = [1, 2, 3];

// $ExpectType boolean
ES2016.SameValueNonNumber('a', 'b');

// $ExpectType number[]
ES2016.IterableToArrayLike(iterableNumbers);

// $ExpectType number[]
ES2016.IterableToArrayLike(iterableArrayLikeNumbers);

// $ExpectType ArrayLike<number>
ES2016.IterableToArrayLike(arrayLikeNumbers);

// $ExpectError
ES2016.IterableToArrayLike(recordNumbers);
