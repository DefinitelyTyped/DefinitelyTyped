import levenshtein = require("levenshtein-edit-distance");

// $ExpectType number
levenshtein("test", "tset");
// $ExpectType number
levenshtein("test", "tset", true);
// $ExpectType number
levenshtein("test", "tset", false);
// $ExpectError
levenshtein("test");
// $ExpectError
levenshtein();
