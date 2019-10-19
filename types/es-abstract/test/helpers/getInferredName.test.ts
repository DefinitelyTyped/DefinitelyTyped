import getInferredName = require('es-abstract/helpers/getInferredName');

getInferredName(Symbol.iterator); // $ExpectType string
getInferredName(Symbol.toStringTag); // $ExpectType string
