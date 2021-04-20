import firstline = require('firstline');

// Imagine the file content is:
// abc
// def
// ghi
//

// $ExpectType: Promise<string>
firstline('./my-file.txt');
// -> Returns a promise that will be fulfilled with 'abc'.

// $ExpectType: Promise<string>
firstline('./my-file.txt', { lineEnding: '\r' });
// -> Same as above, but using '\r' as line ending.
