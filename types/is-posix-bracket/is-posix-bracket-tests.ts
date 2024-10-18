import isPosixBracket = require("is-posix-bracket");

// $ExpectType boolean
isPosixBracket("[]");

// $ExpectType boolean
isPosixBracket("other string");

// @ts-expect-error
isPosixBracket(Symbol());

// @ts-expect-error
isPosixBracket(1);
