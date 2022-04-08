import clone = require('just-clone');

const array: string[] = [];
const object: object = {};

const arr = [1, 2, 3];
const subObj = { aa: 1 };
const obj = { a: 3, b: 5, c: arr, d: subObj };

clone(obj); // $ExpectType { a: number; b: number; c: number[]; d: { aa: number; }; }
clone(object); // $ExpectType object
clone(array); // $ExpectType string[]
clone(() => array); // $ExpectType () => string[]
clone(() => {}); // $ExpectType () => void
clone({ a: array }); // $ExpectType { a: string[]; }
clone([{ a: '' }]); // $ExpectType { a: string; }[]

// Incorrect types
clone(); // $ExpectError
clone(1); // $ExpectError
clone(''); // $ExpectError
clone(true); // $ExpectError
clone(false); // $ExpectError
clone(null); // $ExpectError
clone(undefined); // $ExpectError
