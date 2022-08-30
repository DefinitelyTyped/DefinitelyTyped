import isValidGlob = require('is-valid-glob');

const input: any = 'foo/*.js';

if (isValidGlob(input)) {
    input; // $ExpectType string | string[]
}

isValidGlob(); // $ExpectType false
