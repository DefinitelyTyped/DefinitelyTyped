import syllable = require("syllable");

// $ExpectType number
syllable("test");
// $ExpectError
syllable();
