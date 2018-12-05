import ansiRegex = require("ansi-regex");

ansiRegex(); // $ExpectType RegExp

// From the ansi-regex README.md
ansiRegex().test('\u001B[4mcake\u001B[0m'); // $ExpectType boolean
// => true

ansiRegex().test('cake'); // $ExpectType boolean
// => false

'\u001B[4mcake\u001B[0m'.match(ansiRegex()); // $ExpectType RegExpMatchArray | null
// => ['\u001B[4m', '\u001B[0m']
