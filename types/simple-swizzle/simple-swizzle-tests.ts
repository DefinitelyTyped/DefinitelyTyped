import swizzle = require('simple-swizzle');

swizzle([1, [2, 3], 4]); // $ExpectType number[]
swizzle([1, [2, 3], 4] as ArrayLike<number | ArrayLike<number>>); // $ExpectType number[]
swizzle([1, 2, 3, 4]); // $ExpectType number[]
swizzle<number | string>([1, 2, 3, 'foo']); // $ExpectType (string | number)[]
swizzle([[1, 2, 3, 4]]); // $ExpectType number[]

const wrapped1 = swizzle.wrap((args: number[]) => 'foo'); // $ExpectType (...args: (number | number[])[]) => string
wrapped1(1, [2, 3], 4); // $ExpectType string
wrapped1(1, 2, 3, 4); // $ExpectType string
wrapped1([1, 2, 3, 4]); // $ExpectType string
const wrapped2 = swizzle.wrap((args: Array<number | string>) => true); // $ExpectType (...args: (string | number | (string | number)[])[]) => boolean
wrapped2('foo', [2, 'foo'], 4); // $ExpectType boolean
wrapped2(1, 2, 'foo', 4); // $ExpectType boolean
wrapped2([1, 'foo', 3, 4]); // $ExpectType boolean
