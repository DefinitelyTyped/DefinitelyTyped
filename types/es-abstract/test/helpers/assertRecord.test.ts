import assertRecord = require('es-abstract/helpers/assertRecord');
import ES5 = require('es-abstract/es5');

declare const desc: ES5.PropertyDescriptor;

// $ExpectType void
assertRecord(ES5, 'Property Descriptor', 'desc', desc);

// @ts-expect-error
assertRecord(ES5, 'Property Descriptor', 'desc', null);
