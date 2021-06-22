import assertRecord = require('es-abstract/helpers/assertRecord');
import ES5 = require('es-abstract/es5');

declare const desc: ES5.PropertyDescriptor;

// $ExpectType void
assertRecord(ES5, 'Property Descriptor', 'desc', desc);

// $ExpectError
assertRecord(ES5, 'Property Descriptor', 'desc', null);
