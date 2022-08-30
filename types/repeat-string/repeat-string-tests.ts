import Repeat = require("repeat-string");

Repeat('A', 5);
Repeat('A', 0); // $ExpectType string
Repeat('A', '5'); // $ExpectType string
Repeat('A', null); // $ExpectType string
Repeat('A'); // $ExpectType string
