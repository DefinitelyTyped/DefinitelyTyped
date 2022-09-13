import presuf = require('pre-suf');

presuf.ensureLeading('a', '/'); // $ExpectType string
presuf.removeLeading('a', '/'); // $ExpectType string
presuf.ensureEnding('a', '/'); // $ExpectType string
presuf.removeEnding('/a/ab/a', '/a'); // $ExpectType string
// @ts-expect-error
presuf.ensureLeading();
// @ts-expect-error
presuf.removeLeading();
// @ts-expect-error
presuf.ensureEnding();
// @ts-expect-error
presuf.removeEnding();
