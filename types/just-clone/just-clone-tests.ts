import clone = require('just-clone');

const array: string[] = [];
const object: object = {};

// Correct Objects
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
