import getSymbolDescription = require("get-symbol-description");

// $ExpectType string | undefined
getSymbolDescription(Symbol("foo"));

// $ExpectType string | undefined
getSymbolDescription(Symbol());

// $ExpectType string | undefined
getSymbolDescription(Symbol.iterator);

// @ts-expect-error
getSymbolDescription(1);
