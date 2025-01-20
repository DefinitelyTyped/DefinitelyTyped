import isSymbol = require("is-symbol");

isSymbol(() => {}); // $ExpectType boolean
isSymbol(null); // $ExpectType boolean
isSymbol(function*() {}); // $ExpectType boolean
isSymbol(Symbol.iterator); // $ExpectType boolean
isSymbol(Symbol("foo")); // $ExpectType boolean
isSymbol(Symbol.for("foo")); // $ExpectType boolean
isSymbol(Object(Symbol("foo"))); // $ExpectType boolean
