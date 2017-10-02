import isRootPath = require('is-root-path');

isRootPath('/');
// => true

isRootPath('/Users');
// => false
