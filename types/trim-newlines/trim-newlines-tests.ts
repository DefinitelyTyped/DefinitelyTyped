import trimNewlines = require("trim-newlines");

// $ExpectType string
trimNewlines('\nunicorn\r\n');

// $ExpectType string
trimNewlines.start("\n\npony\n");

// $ExpectType string
trimNewlines.end("\ndonk\n\n");
