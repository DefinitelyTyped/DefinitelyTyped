import isPosixBracket = require("./");

// $ExpectType boolean
isPosixBracket("[]");

// $ExpectType boolean
isPosixBracket("other string");

// $ExpectType false
isPosixBracket(Symbol());

// $ExpectType false
isPosixBracket(1);
