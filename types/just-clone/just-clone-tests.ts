import clone = require('just-clone');

// Correct Objects
clone({}); // $ExpectType object
clone([]); // $ExpectType object
clone(() => []); // $ExpectType () => []
clone(() => {}); // $ExpectType () => {}
clone({ a: [] }); // $ExpectType object
clone([{ a: '' }]); // $ExpectType object

// Incorrect types
clone(); // $ExpectError
clone(1); // $ExpectError
clone(''); // $ExpectError
clone(true); // $ExpectError
clone(false); // $ExpectError
clone(null); // $ExpectError
clone(undefined); // $ExpectError
