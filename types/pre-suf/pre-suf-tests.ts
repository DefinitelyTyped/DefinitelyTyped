import presuf = require('pre-suf');

presuf.ensureLeading('a', '/'); // $ExpectType string
presuf.removeLeading('a', '/'); // $ExpectType string
presuf.ensureEnding('a', '/'); // $ExpectType string
presuf.removeEnding('/a/ab/a', '/a'); // $ExpectType string
// $ExpectError
presuf.ensureLeading();
// $ExpectError
presuf.removeLeading();
// $ExpectError
presuf.ensureEnding();
// $ExpectError
presuf.removeEnding();
