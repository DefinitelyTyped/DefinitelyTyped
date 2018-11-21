import isRegexp = require('is-regexp');

isRegexp('unicorn');
// => false

isRegexp(/unicorn/);
// => true

isRegexp(new RegExp('unicorn'));
// => true
