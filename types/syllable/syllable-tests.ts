import syllable = require("syllable");

// $ExpectType number
syllable("test");
// @ts-expect-error
// $ExpectError
syllable();
