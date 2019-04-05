import arrayMove = require('array-move');

const input = ['a', 'b', 'c'];
const input2 = [1, 2, 3];

arrayMove(input, 1, 2); // $ExpectType string[]
arrayMove(input2, 1, 2); // $ExpectType number[]
arrayMove.mut(input, 1, 2); // $ExpectType void
