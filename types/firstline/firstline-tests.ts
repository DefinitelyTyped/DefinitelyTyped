import firstline = require('firstline');

// $ExpectType: Promise<string>
firstline('./my-file.txt');
// $ExpectType: Promise<string>
firstline('./my-file.txt', { lineEnding: '\r' });
// $ExpectType: Promise<string>
firstline('./my-file.txt', { lineEnding: '\r', encoding: 'ascii' });
// @ts-expect-error
firstline('./my-file.txt', { lineEnding: '\r', encoding: 'utf88' });
