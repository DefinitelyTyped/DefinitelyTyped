import isAbsoluteUrl = require('is-absolute-url');

isAbsoluteUrl('http://sindresorhus.com/foo/bar');
// => true

isAbsoluteUrl('//sindresorhus.com');
// => false

isAbsoluteUrl('foo/bar');
// => false
