import pathIsAbsolute = require('path-is-absolute');

// Running on Linux
pathIsAbsolute('/home/foo');
// => true
pathIsAbsolute('C:/Users/foo');
// => false

// Running on Windows
pathIsAbsolute('C:/Users/foo');
// => true
pathIsAbsolute('/home/foo');
// => false

// Running on any OS
pathIsAbsolute.posix('/home/foo');
// => true
pathIsAbsolute.posix('C:/Users/foo');
// => false
pathIsAbsolute.win32('C:/Users/foo');
// => true
pathIsAbsolute.win32('/home/foo');
// => false
