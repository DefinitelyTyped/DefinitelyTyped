import getSymbolDescription = require('es-abstract/helpers/getSymbolDescription');

getSymbolDescription(Symbol.iterator); // $ExpectType string
getSymbolDescription(Symbol.toStringTag); // $ExpectType string
