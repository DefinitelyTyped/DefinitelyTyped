import randomString = require("random-string");

// $ExpectType string
randomString();

// $ExpectType string
randomString({ length: 20 });

// $ExpectType string
randomString({ numeric: true });

// $ExpectType string
randomString({ letters: true });

// $ExpectType string
randomString({ special: true });

// $ExpectType string
randomString({ exclude: ["a", "b", "1"] });
