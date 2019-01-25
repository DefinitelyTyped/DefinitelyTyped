// Tests are from the NPM README (https://www.npmjs.com/package/is-valid-path).

import isValid = require('is-valid-path');

isValid('abc.js');
isValid('abc/def/ghi.js');
isValid('foo.js');

isValid();
isValid(null);
isValid('!foo.js');
isValid('*.js');
isValid('**/abc.js');
isValid('abc/*.js');
isValid('abc/(aaa|bbb).js');
isValid('abc/[a-z].js');
isValid('abc/{a,b}.js');
isValid('abc/?.js');
