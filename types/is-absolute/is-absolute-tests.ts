import isAbsolute = require('is-absolute');

isAbsolute('a/b/c.js'); // $ExpectType boolean
isAbsolute.posix('/foo/bar'); // $ExpectType boolean
isAbsolute.win32('c:\\'); // $ExpectType boolean
