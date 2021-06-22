import getSymbolDescription = require('es-abstract/helpers/getSymbolDescription');

getSymbolDescription(Symbol.iterator); // $ExpectType string | undefined
getSymbolDescription(Symbol.toStringTag); // $ExpectType string | undefined
