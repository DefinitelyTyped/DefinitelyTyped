import Ints = require('super-number');

Ints([-5, -2, 0, 1, 5]).findNearestInteger(0); // $ExpectType number
Ints([-5, -2, 0, 1, 5]).findNearestInteger(1); // $ExpectType number
Ints([-5, -2, 0, 1, 5]).findNearestInteger(5); // $ExpectType number
Ints([0, 1, 2, 5, 6]).findNearestInteger(5); // $ExpectType number
Ints([-1, 0, 1]).findNearestInteger(0); // $ExpectType number
Ints([-5, -2, 0, 1, 5]).findNearestInteger(-2); // $ExpectType number
Ints([-5, -2, 0, 1, 5]).findNearestInteger(-5); // $ExpectType number
Ints([-5, -4, -2, 0]).findNearestInteger(-2); // $ExpectType number

Ints(10).getLessEvenNumbers(); // $ExpectType number[]
Ints(10).getLessOrEqualEvenNumbers(); // $ExpectType number[]
Ints([1, -2, 3, 4, -6, 7, 11]).getEvenNumbers(); // $ExpectType number[]
Ints([0, 3, -4, 7, 9, 10, 13, 20]).getEvenNumbersLessThan(20); // $ExpectType number[]
Ints([0, 3, -4, 7, 9, -10, 13, 20]).getEvenNumbersLessThan(-4); // $ExpectType number[]
Ints([0, 3, 4, 7, 9, -10, 13, 20]).getEvenNumbersLessOrEqualThan(20); // $ExpectType number[]
Ints([0, -3, 4, -7, 9, -10, 13, -20]).getEvenNumbersLessOrEqualThan(-7); // $ExpectType number[]
Ints([0, -2, -4, 7, 9, 10, 13, 20]).getEvenNumbersGreaterThan(4); // $ExpectType number[]
Ints([0, -2, -4, 7, 9, 10, 13, 20]).getEvenNumbersGreaterThan(-4); // $ExpectType number[]
Ints([0, -2, -4, 4, 7, 9, 10, 13, 20]).getEvenNumbersGreaterOrEqualThan(4); // $ExpectType number[]
Ints([0, -2, -4, 7, 9, 10, 13, 20]).getEvenNumbersGreaterOrEqualThan(-4); // $ExpectType number[]
Ints(2).isEvenNumber(); // $ExpectType boolean
Ints(3).isEvenNumber(); // $ExpectType boolean
Ints(-2).isEvenNumber(); // $ExpectType boolean
Ints(-3).isEvenNumber(); // $ExpectType boolean

Ints(11).getLessOddNumbers(); // $ExpectType number[]
Ints(11).getLessOrEqualOddNumbers(); // $ExpectType number[]
Ints([0, 1, 2, -3, 4, 6, 7, 11]).getOddNumbers(); // $ExpectType number[]
Ints([0, 1, 2, -3, 4, 6, 7, 11]).getOddNumbersLessThan(11); // $ExpectType number[]
Ints([0, 1, -2, -3, -5, 6, 7, 11]).getOddNumbersLessThan(-3); // $ExpectType number[]
Ints([0, 1, 2, -3, 4, 6, 7, 11]).getOddNumbersLessOrEqualThan(11); // $ExpectType number[]
Ints([0, 1, -2, -3, -5, 6, 7, 11]).getOddNumbersLessOrEqualThan(-3); // $ExpectType number[]
Ints([0, 1, 2, -3, 4, 6, 7, 11]).getOddNumbersGreaterThan(3); // $ExpectType number[]
Ints([0, 1, -2, -3, 4, 6, 7, 11]).getOddNumbersGreaterThan(-3); // $ExpectType number[]
Ints([0, 1, -2, 3, 4, 6, 7, 11]).getOddNumbersGreaterOrEqualThan(3); // $ExpectType number[]
Ints([0, 1, -2, -3, -5, 6, 7, 11]).getOddNumbersGreaterOrEqualThan(-3); // $ExpectType number[]
Ints(3).isOddNumber(); // $ExpectType boolean
Ints(2).isOddNumber(); // $ExpectType boolean
Ints(-3).isOddNumber(); // $ExpectType boolean
Ints(-2).isOddNumber(); // $ExpectType boolean

Ints([-5, -2, 0, 1, 5]).getPositivesNumbers(); // $ExpectType number[]
Ints([-5, -2, 0, 1, 5]).getNegativesNumbers(); // $ExpectType number[]
Ints([3, -2, 4, 5, 10, 7, 8, 9, 12, 20]).getDivisiblesOf(10); // $ExpectType number[]
Ints([3, 2, 4, 5, -10, 7, 8, 9, 12, 20]).getMultiplesOf(10); // $ExpectType number[]
Ints([3, 2, 4, 5, 10, 7, 8, 9, 12, -20]).getGreatersThan(10); // $ExpectType number[]
Ints([3, 2, 4, 5, 10, 7, 8, 9, 12, -20]).getGreatersThan(-10); // $ExpectType number[]
Ints([3, 2, 4, 5, 10, 7, 8, 9, 12, -20]).getLessersThan(10); // $ExpectType number[]
Ints([3, 2, 4, 5, 10, 7, 8, 9, 12, -20]).getLessersThan(-10); // $ExpectType number[]

Ints(11).getLessPrimeNumbers(); // $ExpectType number[]
Ints(11).getLessOrEqualPrimeNumbers(); // $ExpectType number[]
Ints([2, 1, 3, 7, 10, 4, 20, 6, 11, 8, 23]).getPrimeNumbers(); // $ExpectType number[]
Ints([2, 1, 3, 7, 10, 4, 20, 6, 11, 8, 23]).getPrimeNumbersLessThan(23); // $ExpectType number[]
Ints([2, 1, 3, 7, 10, 4, 20, 6, 11, 8, 23]).getPrimeNumbersLessOrEqualThan(23); // $ExpectType number[]
Ints([2, 1, 3, 7, 10, 4, 20, 6, 11, 8, 23]).getPrimeNumbersGreaterThan(7); // $ExpectType number[]
Ints([2, 1, 3, 7, 10, 4, 20, 6, 11, 8, 23]).getPrimeNumbersGreaterOrEqualThan(7); // $ExpectType number[]
Ints(2).isPrimeNumber(); // $ExpectType boolean
Ints(4).isPrimeNumber(); // $ExpectType boolean
