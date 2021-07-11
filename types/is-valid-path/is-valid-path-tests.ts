// Tests are from the NPM README (https://www.npmjs.com/package/is-valid-path).

import isValid = require('is-valid-path');

isValid('abc.js'); // $ExpectType boolean
isValid('abc/def/ghi.js'); // $ExpectType boolean
isValid('foo.js'); // $ExpectType boolean

isValid(); // $ExpectType false
isValid(null); // $ExpectType false
isValid({}); // $ExpectType false
isValid(['hello']); // $ExpectType false
isValid('!foo.js'); // $ExpectType boolean
isValid('*.js'); // $ExpectType boolean
isValid('**/abc.js'); // $ExpectType boolean
isValid('abc/*.js'); // $ExpectType boolean
isValid('abc/(aaa|bbb).js'); // $ExpectType boolean
isValid('abc/[a-z].js'); // $ExpectType boolean
isValid('abc/{a,b}.js'); // $ExpectType boolean
isValid('abc/?.js'); // $ExpectType boolean
