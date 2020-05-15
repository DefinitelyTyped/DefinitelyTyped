import getInferredName = require('es-abstract/helpers/getInferredName');

if (getInferredName === null) {
    throw new Error('Unsupported JavaScript engine');
}

getInferredName('foo'); // $ExpectType string
getInferredName(Symbol.iterator); // $ExpectType string
getInferredName(Symbol.toStringTag); // $ExpectType string
