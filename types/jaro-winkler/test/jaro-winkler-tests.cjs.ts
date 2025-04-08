import distance = require("jaro-winkler");

distance("hello", "hllo"); // $ExpectType number
distance("hello", "hllo", {}); // $ExpectType number
distance("hello", "hllo", { caseSensitive: false }); // $ExpectType number
