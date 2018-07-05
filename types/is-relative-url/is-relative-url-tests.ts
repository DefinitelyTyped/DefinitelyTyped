import isRelativeUrl = require('is-relative-url');

isRelativeUrl('foo/bar');
// => true

isRelativeUrl('http://sindresorhus.com/foo/bar');
// => false

isRelativeUrl('//sindresorhus.com');
// => true
